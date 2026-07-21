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
if (!rate_limit('review', 3, 86400)) {
  respond(false, 'Thanks — it looks like you have already submitted a review recently.', $ajax);
}

function clean($k) { return trim($_POST[$k] ?? ''); }

$name    = clean('name');
$country = clean('country');
$tour    = clean('tour');
$comment = clean('comment');
$rating  = (int) clean('rating');

if ($name === '' || $comment === '' || $rating < 1 || $rating > 5) {
  respond(false, 'Please add your name, a rating (1–5) and a short comment.', $ajax);
}
// length guards
$name    = mb_substr($name, 0, 80);
$country = mb_substr($country, 0, 60);
$tour    = mb_substr($tour, 0, 120);
$comment = mb_substr($comment, 0, 1500);

$entry = [
  'id'      => bin2hex(random_bytes(6)),
  'name'    => $name,
  'country' => $country,
  'tour'    => $tour,
  'rating'  => $rating,
  'comment' => $comment,
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
$body .= "Name:    $name\n";
$body .= "Country: $country\n";
$body .= "Rating:  $rating / 5\n";
$body .= "Tour:    $tour\n";
$body .= "----------------------------------------\n\nComment:\n$comment\n";
$headers  = 'From: Algeria Compass <' . $FROM . ">\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\nMIME-Version: 1.0\r\n";
@mail($TO, $subject, $body, $headers, '-f' . $FROM);

respond(true, null, $ajax);
