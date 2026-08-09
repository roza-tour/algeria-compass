<?php
// Algeria Compass — customer review intake.
// Stores submissions as PENDING (never auto-published) for manual moderation
// via reviews-admin.php, and emails the owner a notification.
// AJAX (X-Requested-With: fetch) -> JSON; plain POST -> redirect.

$TO   = 'hello@algeriacompass.com';
$FROM = 'no-reply@algeriacompass.com';
$PENDING = __DIR__ . '/data/reviews-pending.jsonl';

$ajax = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'fetch';

function respond($ok, $msg, $ajax) {
  if ($ajax) {
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode(['ok' => $ok, 'error' => $ok ? null : $msg]);
    exit;
  }
  header('Location: ' . ($ok ? '/thank-you/?review=1' : '/?reviewerror=1'));
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') respond(false, 'Method not allowed.', $ajax);

// Honeypot: bots fill the hidden "website" field — accept silently, store nothing.
if (!empty($_POST['website'])) respond(true, null, $ajax);

// Per-IP rate limit — guards the file-write endpoint (3 reviews / day).
// Checked here, but a hit is only RECORDED once validation passes, so a
// visitor who trips a validation error a few times is not locked out.
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
if (count(rl_hits('review', 86400)) >= 3) {
  respond(false, 'Thanks — it looks like you have already submitted a review recently.', $ajax);
}

function clean($k) { return trim($_POST[$k] ?? ''); }

$name     = clean('name');
$country  = clean('country');
$tour     = clean('tour');
$comment  = clean('comment');
$email    = clean('email');
$whatsapp = clean('whatsapp');
$rating   = (int) clean('rating');

if ($name === '' || $comment === '' || $rating < 1 || $rating > 5) {
  respond(false, 'Please add your name, a rating (1–5) and a short comment.', $ajax);
}
// Verification contact: email OR WhatsApp — at least one, never published.
if ($email === '' && $whatsapp === '') {
  respond(false, 'Please add your email or WhatsApp number (just one is fine) so we can verify your trip — it stays private and is never published.', $ajax);
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  respond(false, 'That email address does not look right — please check it.', $ajax);
}
if ($whatsapp !== '' && !preg_match('/^\+?[0-9()\/. -]{6,25}$/', $whatsapp)) {
  respond(false, 'That WhatsApp number does not look right — digits only, e.g. +49 170 1234567.', $ajax);
}
// length guards
$name     = mb_substr($name, 0, 80);
$country  = mb_substr($country, 0, 60);
$tour     = mb_substr($tour, 0, 120);
$comment  = mb_substr($comment, 0, 1500);
$email    = mb_substr($email, 0, 120);
$whatsapp = mb_substr($whatsapp, 0, 25);

// validation passed — this attempt now counts against the per-IP daily cap
rate_limit_record('review', 86400);

$entry = [
  'id'      => bin2hex(random_bytes(6)),
  'name'    => $name,
  'country' => $country,
  'tour'    => $tour,
  'rating'  => $rating,
  'comment' => $comment,
  // Private verification contact — shown ONLY in reviews-admin.php; the
  // approve step copies a whitelist of fields, so these never reach the
  // public reviews-approved.json.
  'email'    => $email,
  'whatsapp' => $whatsapp,
  'date'    => gmdate('Y-m-d'),
  'ip'      => substr($_SERVER['REMOTE_ADDR'] ?? '', 0, 45),
  'ua'      => substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 200),
  'received'=> gmdate('c'),
];

if (!is_dir(dirname($PENDING))) @mkdir(dirname($PENDING), 0755, true);

// Cap the pending queue so a flood can never exhaust disk / drown moderation.
if (is_file($PENDING) && count(file($PENDING, FILE_SKIP_EMPTY_LINES)) >= 1000) {
  respond(false, 'Our review inbox is full right now — please try again later.', $ajax);
}

$ok = @file_put_contents($PENDING, json_encode($entry, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);

if ($ok === false) {
  respond(false, 'Sorry — we could not save your review right now. Please try again later.', $ajax);
}

// notify the owner (best-effort; submission is already saved)
$nohdr = fn($s) => str_replace(["\r", "\n"], ' ', $s);
$subject = 'New PENDING review — ' . $nohdr($name) . ' (' . $rating . '★)';
$body  = "A new review is awaiting moderation.\n";
$body .= "Approve/reject it at: https://algeriacompass.com/reviews-admin.php\n";
$body .= "----------------------------------------\n";
$body .= "Name:     $name\n";
$body .= "Country:  $country\n";
$body .= "Rating:   $rating / 5\n";
$body .= "Tour:     $tour\n";
$body .= "Email:    " . ($email !== '' ? $email : '—') . "  (private — for verification only)\n";
$body .= "WhatsApp: " . ($whatsapp !== '' ? $whatsapp : '—') . "  (private — for verification only)\n";
$body .= "----------------------------------------\n\nComment:\n$comment\n";
$headers  = 'From: Algeria Compass <' . $FROM . ">\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\nMIME-Version: 1.0\r\n";
@mail($TO, $subject, $body, $headers, '-f' . $FROM);

respond(true, null, $ajax);
