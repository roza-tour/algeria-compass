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
// Checked here, but a hit is only RECORDED once the message actually validates,
// so someone who mistypes their email a few times is not locked out for an hour.
function rl_file($bucket) {
  $dir = __DIR__ . '/data';
  if (!is_dir($dir)) @mkdir($dir, 0755, true);
  return $dir . '/rl-' . $bucket . '-' . md5(substr($_SERVER['REMOTE_ADDR'] ?? '0', 0, 45)) . '.json';
}
function rl_hits($bucket, $win) {
  $now = time();
  $hits = is_file(rl_file($bucket)) ? (json_decode((string) @file_get_contents(rl_file($bucket)), true) ?: []) : [];
  return array_values(array_filter($hits, fn($t) => $t > $now - $win));
}
function rate_limit_record($bucket, $win) {
  $hits = rl_hits($bucket, $win);
  $hits[] = time();
  @file_put_contents(rl_file($bucket), json_encode($hits), LOCK_EX);
}
if (count(rl_hits('contact', 3600)) >= 5) {
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
$company   = clean('company');        // /partners/ (B2B) form only
$csite     = clean('company_site');
$wa        = clean('whatsapp');       // optional, e.g. /plan-your-trip/ offer

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  respond(false, 'Please add your name, a valid email and a message.', $ajax);
}

// Length guards. Without them a bot can POST megabytes straight into the email
// body and the subject line — reviews.php has always capped its fields; this
// endpoint did not.
$name      = mb_substr($name, 0, 80);
$email     = mb_substr($email, 0, 120);
$country   = mb_substr($country, 0, 60);
$when      = mb_substr($when, 0, 60);
$days      = mb_substr($days, 0, 30);
$people    = mb_substr($people, 0, 30);
$interests = mb_substr($interests, 0, 200);
$context   = mb_substr($context, 0, 200);
$company   = mb_substr($company, 0, 100);
$csite     = mb_substr($csite, 0, 150);
$wa        = mb_substr($wa, 0, 30);
$message   = mb_substr($message, 0, 4000);

// The message validated — only now does this attempt count against the cap.
rate_limit_record('contact', 3600);

// Spam score (spamguard.php): obvious spam is dropped silently; borderline
// messages are still delivered, marked in the subject, so nothing real is lost.
require __DIR__ . '/spamguard.php';
$sg = sg_check($company !== '' ? 'partner' : 'contact', $name, $email, $message . "\n" . $interests);
if ($sg['verdict'] === 'block') respond(true, null, $ajax);
$spamTag = $sg['verdict'] === 'suspect' ? '[Possible spam] ' : '';

// Encoded, because a raw UTF-8 subject (an Arabic or accented name, and the
// dash itself) arrives garbled in some mail clients.
$subject = mb_encode_mimeheader($spamTag . ($company !== '' ? 'PARTNER enquiry — ' . nohdr($company) . ' / ' : 'Algeria trip inquiry — ') . nohdr($name), 'UTF-8', 'B', "\r\n");
$body  = "New inquiry from algeriacompass.com\n";
$body .= "----------------------------------------\n";
if ($company !== '') $body .= "Company:    $company\n";
if ($csite !== '')   $body .= "Website:    $csite\n";
$body .= "Name:       $name\n";
$body .= "Email:      $email\n";
if ($wa !== '') $body .= "WhatsApp:   $wa\n";
$body .= "Country:    $country\n";
$body .= "Travellers: $people\n";
$body .= "Dates:      $when\n";
$body .= "Days:       $days\n";
$body .= "Interests:  $interests\n";
if ($context !== '') $body .= "Tour/Page:  $context\n";
$body .= "----------------------------------------\n\n";
$body .= "Message:\n$message\n";
if ($spamTag !== '') $body .= "\n----------------------------------------\nSpam filter: score {$sg['score']} (" . implode(', ', $sg['why']) . ")\n";

$headers  = 'From: Algeria Compass <' . $FROM . ">\r\n";
// The display name is MIME-encoded too, which also neutralises quotes and
// angle brackets someone might type into it to smuggle in a second address.
$headers .= 'Reply-To: ' . mb_encode_mimeheader(nohdr($name), 'UTF-8', 'B', "\r\n") . ' <' . nohdr($email) . ">\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

$sent = @mail($TO, $subject, $body, $headers, '-f' . $FROM);

if (!$sent) {
  respond(false, 'Sorry — we could not send your message right now. Please WhatsApp or email us directly.', $ajax);
}
respond(true, null, $ajax);
