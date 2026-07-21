<?php
// Algeria Compass — contact/inquiry handler.
// Validates server-side and emails the inquiry to the site inbox.
// AJAX (X-Requested-With: fetch) -> JSON; plain POST -> redirect to /thank-you/.

$TO = 'hello@algeriacompass.com';
$FROM = 'no-reply@algeriacompass.com'; // must be on this domain for SPF/DKIM

$ajax = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'fetch';

function respond($ok, $msg, $ajax) {
  if ($ajax) {
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode(['ok' => $ok, 'error' => $ok ? null : $msg]);
    exit;
  }
  header('Location: ' . ($ok ? '/thank-you/' : '/contact/?error=1'));
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
  respond(false, 'Method not allowed.', $ajax);
}

// Honeypot: bots fill hidden "website" field — accept silently, send nothing.
if (!empty($_POST['website'])) {
  respond(true, null, $ajax);
}

// Per-IP rate limit — guards mail() against abuse/spam-relay (5 / hour).
function rate_limit($bucket, $max, $win) {
  $dir = __DIR__ . '/data';
  if (!is_dir($dir)) @mkdir($dir, 0755, true);
  $f = $dir . '/rl-' . $bucket . '-' . md5(substr($_SERVER['REMOTE_ADDR'] ?? '0', 0, 45)) . '.json';
  $now = time();
  $hits = is_file($f) ? (json_decode((string) @file_get_contents($f), true) ?: []) : [];
  $hits = array_values(array_filter($hits, fn($t) => $t > $now - $win));
  if (count($hits) >= $max) return false;
  $hits[] = $now;
  @file_put_contents($f, json_encode($hits), LOCK_EX);
  return true;
}
if (!rate_limit('contact', 5, 3600)) {
  respond(false, 'Too many messages from your connection — please try again later or email us directly.', $ajax);
}

function clean($k) { return trim($_POST[$k] ?? ''); }
function nohdr($s) { return str_replace(["\r", "\n", "%0a", "%0d"], ' ', $s); } // header-injection guard

$name      = clean('name');
$email     = clean('email');
$message   = clean('message');
$country   = clean('country');
$when      = clean('when');
$days      = clean('days');
$people    = clean('people');
$interests = clean('interests');
$context   = clean('context');

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  respond(false, 'Please add your name, a valid email and a message.', $ajax);
}

$subject = 'Algeria trip inquiry — ' . nohdr($name);
$body  = "New inquiry from algeriacompass.com\n";
$body .= "----------------------------------------\n";
$body .= "Name:       $name\n";
$body .= "Email:      $email\n";
$body .= "Country:    $country\n";
$body .= "Travellers: $people\n";
$body .= "Dates:      $when\n";
$body .= "Days:       $days\n";
$body .= "Interests:  $interests\n";
if ($context !== '') $body .= "Tour/Page:  $context\n";
$body .= "----------------------------------------\n\n";
$body .= "Message:\n$message\n";

$headers  = 'From: Algeria Compass <' . $FROM . ">\r\n";
$headers .= 'Reply-To: ' . nohdr($name) . ' <' . nohdr($email) . ">\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

$sent = @mail($TO, $subject, $body, $headers, '-f' . $FROM);

if (!$sent) {
  respond(false, 'Sorry — we could not send your message right now. Please WhatsApp or email us directly.', $ajax);
}
respond(true, null, $ajax);
