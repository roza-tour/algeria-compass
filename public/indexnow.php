<?php
// Algeria Compass — IndexNow: tell Bing, Yandex, Seznam, Naver and Yep which
// pages changed, minutes after a deploy, instead of waiting for them to recrawl.
// (Google does not use IndexNow; it reads sitemap.xml.)
//
// Run on the server AFTER each deploy (scripts/server-deploy.sh does it):
//   php indexnow.php          submit only pages whose content changed
//   php indexnow.php --dry    show what would be submitted, send nothing
//   php indexnow.php --all    submit every URL in the sitemap
//
// How "changed" is decided: each sitemap URL's built page is fingerprinted
// (title + <main> content, so a CSS or menu change does not count as a change
// to every page) and compared with the fingerprints stored at the last run in
// data/.indexnow-state.json. New pages and pages dropped from the sitemap are
// submitted too, so engines pick up additions and removals.
//
// It also rewrites the <lastmod> dates in sitemap.xml to the day each page's
// content really last changed: the build stamps most URLs with the build date,
// which tells search engines everything changes every day.

const KEY  = 'b00ed809a36308c30a813741d1f5bff4';
const HOST = 'algeriacompass.com';
const SITE = 'https://algeriacompass.com';

if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }   // never callable from the web

$root  = __DIR__;
$dry   = in_array('--dry', $argv, true);
$all   = in_array('--all', $argv, true);
$state = $root . '/data/.indexnow-state.json';
$logf  = $root . '/data/indexnow.log';
if (!is_dir($root . '/data')) @mkdir($root . '/data', 0755, true);

function say($s) { fwrite(STDOUT, $s . "\n"); }
function logline($f, $s) { @file_put_contents($f, gmdate('c') . ' ' . $s . "\n", FILE_APPEND | LOCK_EX); }

if (!is_file($root . '/' . KEY . '.txt')) { say('Key file ' . KEY . '.txt is missing from the docroot — aborting.'); exit(1); }

$sitemap = @file_get_contents($root . '/sitemap.xml');
if (!$sitemap) { say('sitemap.xml not found — aborting.'); exit(1); }
preg_match_all('~<url>\s*<loc>([^<]+)</loc>(?:\s*<lastmod>([^<]*)</lastmod>)?~', $sitemap, $m, PREG_SET_ORDER);

function fingerprint($root, $url) {
  $path = parse_url($url, PHP_URL_PATH) ?: '/';
  $file = $root . rtrim($path, '/') . '/index.html';
  if ($path === '/') $file = $root . '/index.html';
  $h = @file_get_contents($file);
  if ($h === false) return null;
  $t = preg_match('~<title>(.*?)</title>~s', $h, $a) ? $a[1] : '';
  $b = preg_match('~<main[^>]*>(.*)</main>~s', $h, $c) ? $c[1] : $h;
  $b = preg_replace('~data-astro-cid-[a-z0-9]+~', '', $b);
  return md5($t . $b);
}

// POST helper: cURL when the host has it, otherwise PHP streams (some cPanel
// hosts disable one or the other). Returns the HTTP status, 0 on network error.
function post_json($url, $payload) {
  if (function_exists('curl_init')) {
    $ch = curl_init($url);
    curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => $payload, CURLOPT_RETURNTRANSFER => true,
      CURLOPT_TIMEOUT => 20, CURLOPT_HTTPHEADER => ['Content-Type: application/json; charset=utf-8']]);
    curl_exec($ch); $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE); curl_close($ch);
    return $code;
  }
  $ctx = stream_context_create(['http' => ['method' => 'POST', 'timeout' => 20, 'ignore_errors' => true,
    'header' => "Content-Type: application/json; charset=utf-8\r\n", 'content' => $payload]]);
  @file_get_contents($url, false, $ctx);
  return isset($http_response_header[0]) && preg_match('~\s(\d{3})\s~', $http_response_header[0], $s) ? (int) $s[1] : 0;
}

$prev  = is_file($state) ? (json_decode((string) file_get_contents($state), true) ?: []) : [];
$first = !$prev;
$today = gmdate('Y-m-d');
$next  = []; $changed = [];
foreach ($m as $row) {
  $url = trim($row[1]); $built = trim($row[2] ?? '') ?: $today;
  $fp  = fingerprint($root, $url);
  if ($fp === null) continue;
  if (isset($prev[$url]) && $prev[$url]['h'] === $fp) {
    $next[$url] = $prev[$url];                                  // unchanged: keep its real date
  } else {
    $next[$url] = ['h' => $fp, 'mod' => $first ? $built : $today];
    $changed[] = $url;
  }
}
$removed = array_values(array_diff(array_keys($prev), array_keys($next)));
$submit  = $all ? array_keys($next) : array_values(array_unique(array_merge($changed, $removed)));

say('Sitemap URLs: ' . count($next) . ' · changed/new: ' . count($changed) . ' · removed: ' . count($removed) . ($first ? ' (first run)' : ''));

// sitemap.xml: real last-changed dates.
$fixed = preg_replace_callback('~<url>\s*<loc>([^<]+)</loc>(\s*<lastmod>)[^<]*(</lastmod>)~', function ($x) use ($next) {
  $u = trim($x[1]);
  return isset($next[$u]) ? '<url><loc>' . $u . '</loc>' . $x[2] . $next[$u]['mod'] . $x[3] : $x[0];
}, $sitemap);

if ($dry) { foreach (array_slice($submit, 0, 50) as $u) say('  would submit ' . $u); exit(0); }

if ($fixed && $fixed !== $sitemap) @file_put_contents($root . '/sitemap.xml', $fixed, LOCK_EX);

if (!$submit) { say('Nothing changed — nothing to submit.'); file_put_contents($state, json_encode($next), LOCK_EX); logline($logf, 'ok 0 urls (nothing changed)'); exit(0); }

$ok = true;
foreach (array_chunk($submit, 10000) as $batch) {
  $payload = json_encode(['host' => HOST, 'key' => KEY, 'keyLocation' => SITE . '/' . KEY . '.txt', 'urlList' => $batch], JSON_UNESCAPED_SLASHES);
  $status = post_json(getenv('INDEXNOW_ENDPOINT') ?: 'https://api.indexnow.org/indexnow', $payload);   // env override is for testing only
  // 200 = accepted, 202 = accepted (key check pending); anything else is a failure.
  $good = in_array($status, [200, 202], true);
  $ok = $ok && $good;
  say($good ? "Submitted " . count($batch) . " URL(s) — HTTP $status." : "IndexNow refused the batch — HTTP $status. (403 key, 422 wrong host/URLs, 429 too many requests.)");
  logline($logf, ($good ? 'ok ' : 'FAIL ') . count($batch) . " urls HTTP $status");
}

// Only remember the new fingerprints if the engines actually took them, so a
// failed run is retried in full next time.
if ($ok) file_put_contents($state, json_encode($next), LOCK_EX);
exit($ok ? 0 : 1);
