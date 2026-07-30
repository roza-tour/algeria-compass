<?php
// Algeria Compass — self-hosted hit collector (no Google, no third party).
// The site pings this on every page view and on tracked clicks. We append one
// compact line per hit to a month file under data/ (web-blocked). No cookies,
// no IP, no personal data is stored — just anonymous aggregate counts.
//
// Read back by stats.php. Safe to wipe: deleting data/hits-*.jsonl only resets
// the counters.

header('Content-Type: text/plain; charset=utf-8');

// Only accept small POST beacons.
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { http_response_code(405); exit; }
$raw = file_get_contents('php://input', false, null, 0, 2048);
$in = json_decode((string)$raw, true);
if (!is_array($in)) { http_response_code(204); exit; }

// Ignore obvious bots — they inflate counts and never convert.
$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
if ($ua === '' || preg_match('~bot|crawl|spider|slurp|bing|preview|monitor|headless|lighthouse~i', $ua)) {
  http_response_code(204); exit;
}

// Sanitise the inputs. type = 'view' or a short event name; path from our site.
$type = preg_replace('~[^a-z0-9_]~', '', strtolower((string)($in['t'] ?? '')));
if ($type === '' || strlen($type) > 40) { http_response_code(204); exit; }
$path = (string)($in['p'] ?? '/');
if ($path === '' || $path[0] !== '/' || strlen($path) > 300) $path = '/';
$path = preg_replace('~[^\x20-\x7E]~', '', $path);      // ASCII-safe
$path = strtok($path, '?#');                             // drop query/hash

// Device bucket from the UA (no fingerprinting — one of three words).
$device = preg_match('~Mobi|Android|iPhone|iPod~i', $ua) ? 'mobile'
        : (preg_match('~iPad|Tablet~i', $ua) ? 'tablet' : 'desktop');

// Referrer host only (never the full URL, never our own domain).
$ref = 'direct';
$rr = $_SERVER['HTTP_REFERER'] ?? '';
if ($rr !== '') {
  $host = parse_url($rr, PHP_URL_HOST) ?: '';
  $host = preg_replace('~^www\.~', '', strtolower($host));
  if ($host !== '' && strpos($host, 'algeriacompass.com') === false) {
    $ref = substr(preg_replace('~[^a-z0-9.\-]~', '', $host), 0, 60) ?: 'direct';
  }
}

// Language section from the path, so the owner sees EN vs FR/IT/ES/DE reach.
$seg = explode('/', ltrim($path, '/'))[0] ?? '';
$lang = in_array($seg, ['fr','it','es','de'], true) ? $seg : 'en';

$rec = [
  't'   => gmdate('Y-m-d'),
  'ty'  => $type,
  'p'   => $path,
  'dev' => $device,
  'ref' => $ref,
  'ln'  => $lang,
];

$dir = __DIR__ . '/data';
if (!is_dir($dir)) @mkdir($dir, 0755, true);
$file = $dir . '/hits-' . gmdate('Y-m') . '.jsonl';
@file_put_contents($file, json_encode($rec, JSON_UNESCAPED_SLASHES) . "\n", FILE_APPEND | LOCK_EX);

http_response_code(204);
