<?php
// Algeria Compass — spam filter shared by contact.php and reviews.php.
//
// Each submission gets a score from a few independent signals (no captcha, no
// third party, no cookies). The honeypot and per-IP rate limit in the form
// handlers still run first; this catches what gets past them.
//
//   score >= SG_BLOCK    → dropped silently (the bot is told "sent"), logged
//   score >= SG_SUSPECT  → still delivered, but the subject is marked
//                          "[Possible spam]" so a real enquiry is never lost
//   below                → normal
//
// Every blocked or suspect submission is written to data/spam.jsonl (capped)
// and shown in stats.php, so false positives can be spotted.
//
// Russian, Arabic or any other script is NOT a spam signal — real clients
// write in many languages.

if (basename($_SERVER['SCRIPT_FILENAME'] ?? '') === basename(__FILE__)) { http_response_code(404); exit; }

const SG_BLOCK   = 6;
const SG_SUSPECT = 3;

/** Score a submission. $text = the free-text message; $name / $email as typed. */
function sg_check(string $form, string $name, string $email, string $text): array {
  $score = 0; $why = [];
  $add = function (int $n, string $r) use (&$score, &$why) { $score += $n; $why[] = $r; };

  // 1. Timing. The page script fills _el with the seconds between page load
  //    and submit (measured in the browser, so a wrong visitor clock does not
  //    matter). Missing means the form was posted without the page's
  //    JavaScript — usually a bot; under 3 seconds is not a person typing.
  $el = $_POST['_el'] ?? '';
  if (!ctype_digit((string) $el)) $add(2, 'no-js');
  elseif ((int) $el < 3) $add(4, 'too-fast');

  // 2. Links. Enquiries rarely carry links; link spam carries several.
  $links = preg_match_all('~https?://|www\.~i', $text);
  if ($links >= 3) $add(5, "links:$links");
  elseif ($links === 2) $add(2, 'links:2');
  elseif ($links === 1) $add(1, 'links:1');
  if (preg_match('~\[url|<a\s+href|\[link~i', $text)) $add(5, 'bbcode/html-link');

  // 3. Name. A link, an email address or a long number where a name should be.
  if (preg_match('~https?://|www\.|\.(com|net|ru|xyz|top|info)\b|@~i', $name)) $add(4, 'link-in-name');
  elseif (preg_match('~\d{5,}~', $name)) $add(2, 'digits-in-name');

  // 4. Classic spam vocabulary (each distinct hit counts, capped).
  $words = ['\bseo\b', 'backlinks?', 'guest post', 'first page of google', 'google ranking', 'rank(ing)? higher',
    'increase (your )?traffic', 'web ?design services', 'website redesign', 'digital marketing agency', 'lead generation',
    'crypto', 'bitcoin', 'forex', 'casino', 'betting', 'viagra', 'cialis', 'payday', '\bloan\b', 'porn', 'escort',
    'make money', 'investment opportunity', 'unsubscribe', 'opt[- ]out', 'buy followers', 'telegram ?@'];
  $hits = 0;
  foreach ($words as $w) if (preg_match("~$w~iu", $text)) $hits++;
  if ($hits) $add(min(6, 2 * $hits), "words:$hits");

  // 5. Throwaway mailboxes.
  $domain = strtolower(substr(strrchr($email, '@') ?: '', 1));
  $burner = ['mailinator.com','guerrillamail.com','10minutemail.com','tempmail.com','temp-mail.org','yopmail.com',
    'trashmail.com','sharklasers.com','getnada.com','dispostable.com','maildrop.cc','fakeinbox.com'];
  if ($domain !== '' && in_array($domain, $burner, true)) $add(3, 'burner-email');

  // 6. The same text sent again within a day (bots replay one message).
  $hash = sha1(mb_strtolower(preg_replace('~\s+~u', ' ', $text)));
  $f = __DIR__ . '/data/sg-recent.json';
  $recent = is_file($f) ? (json_decode((string) @file_get_contents($f), true) ?: []) : [];
  $now = time();
  $recent = array_filter($recent, fn($t) => $t > $now - 86400);
  if (isset($recent[$hash])) $add(4, 'duplicate');
  $recent[$hash] = $now;
  if (!is_dir(dirname($f))) @mkdir(dirname($f), 0755, true);
  @file_put_contents($f, json_encode(array_slice($recent, -500, null, true)), LOCK_EX);

  $verdict = $score >= SG_BLOCK ? 'block' : ($score >= SG_SUSPECT ? 'suspect' : 'ok');
  if ($verdict !== 'ok') sg_log($form, $verdict, $score, $why, $name, $email, $text);
  return ['verdict' => $verdict, 'score' => $score, 'why' => $why];
}

function sg_log(string $form, string $verdict, int $score, array $why, string $name, string $email, string $text): void {
  $f = __DIR__ . '/data/spam.jsonl';
  // Keep the log small: once past ~1 MB, keep the newest half.
  if (is_file($f) && filesize($f) > 1048576) {
    $lines = file($f, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    @file_put_contents($f, implode("\n", array_slice($lines, -intdiv(count($lines), 2))) . "\n", LOCK_EX);
  }
  @file_put_contents($f, json_encode([
    't' => gmdate('c'), 'form' => $form, 'verdict' => $verdict, 'score' => $score, 'why' => $why,
    'name' => mb_substr($name, 0, 80), 'email' => mb_substr($email, 0, 120), 'text' => mb_substr($text, 0, 300),
  ], JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);
}
