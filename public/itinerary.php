<?php
// Algeria Compass — "Get this itinerary as a PDF" lead capture.
// The visitor leaves an email on a tour page; the owner is emailed the lead and
// it is appended to data/leads.jsonl. Nothing is sent to the visitor's address
// (so this endpoint can never be used to mail third parties); the page itself
// then opens the printable itinerary. JSON in, JSON out.

$TO = 'hello@algeriacompass.com';
$FROM = 'no-reply@algeriacompass.com';

header('Content-Type: application/json; charset=UTF-8');
function out($ok, $msg = null) { echo json_encode(['ok' => $ok, 'error' => $msg]); exit; }

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') out(false, 'Method not allowed.');
if (!empty($_POST['website'])) out(true);                       // honeypot

$email = mb_substr(trim($_POST['email'] ?? ''), 0, 120);
$tour  = preg_replace('~[^a-z0-9-]~', '', mb_substr($_POST['tour'] ?? '', 0, 80));
$title = mb_substr(trim($_POST['title'] ?? ''), 0, 150);
$lang  = in_array($_POST['lang'] ?? 'en', ['en', 'fr', 'it', 'es', 'de'], true) ? $_POST['lang'] : 'en';
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $tour === '') out(false, 'Invalid email.');

// Per-IP cap: 10 an hour.
$dir = __DIR__ . '/data'; if (!is_dir($dir)) @mkdir($dir, 0755, true);
$rl = $dir . '/rl-itin-' . md5(substr($_SERVER['REMOTE_ADDR'] ?? '0', 0, 45)) . '.json';
$now = time();
$hits = array_values(array_filter(is_file($rl) ? (json_decode((string) @file_get_contents($rl), true) ?: []) : [], fn($t) => $t > $now - 3600));
if (count($hits) >= 10) out(true);                               // quietly stop counting; the PDF still opens
$hits[] = $now; @file_put_contents($rl, json_encode($hits), LOCK_EX);

require __DIR__ . '/spamguard.php';
$sg = sg_check('itinerary', '', $email, $email . ' ' . $title);
if ($sg['verdict'] === 'block') out(true);

$lead = ['t' => gmdate('c'), 'email' => $email, 'tour' => $tour, 'title' => $title, 'lang' => $lang];
@file_put_contents($dir . '/leads.jsonl', json_encode($lead, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);

$nohdr = fn($s) => str_replace(["\r", "\n"], ' ', $s);
$subject = mb_encode_mimeheader(($sg['verdict'] === 'suspect' ? '[Possible spam] ' : '') . 'Itinerary downloaded — ' . $nohdr($title ?: $tour), 'UTF-8', 'B', "\r\n");
$body  = "Someone downloaded a tour itinerary — a warm lead.\n";
$body .= "----------------------------------------\n";
$body .= "Email:    $email\n";
$body .= "Tour:     $title ($tour)\n";
$body .= "Language: $lang\n";
$body .= "Page:     https://algeriacompass.com/tours/$tour/\n";
$body .= "----------------------------------------\n";
$body .= "Tip: reply within a day — ask their dates and group size.\n";
$headers  = 'From: Algeria Compass <' . $FROM . ">\r\n";
$headers .= 'Reply-To: <' . $nohdr($email) . ">\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\nMIME-Version: 1.0\r\n";
@mail($TO, $subject, $body, $headers, '-f' . $FROM);

out(true);
