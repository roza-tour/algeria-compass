<?php
// Algeria Compass — self-hosted hit collector (no Google, no third party).
// The site pings this on page view, at 15s of engagement, on exit (with dwell
// time + scroll depth) and on tracked clicks. We append one compact line per
// hit to a month file under data/ (web-blocked).
//
// PRIVACY: no cookies, no IP, no persistent identifier. The session id is a
// random string that lives in the visitor's sessionStorage only — it dies when
// the tab closes, so it can never follow anyone across days or sites. Nothing
// stored here identifies a person.
//
// Read back by stats.php. Safe to wipe: deleting data/hits-*.jsonl only resets
// the counters.

date_default_timezone_set('Africa/Algiers');   // owner's local time — makes the
                                               // hour-of-day chart actionable.
header('Content-Type: text/plain; charset=utf-8');

// Only accept small POST beacons.
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { http_response_code(405); exit; }
$raw = file_get_contents('php://input', false, null, 0, 4096);
$in = json_decode((string)$raw, true);
if (!is_array($in)) { http_response_code(204); exit; }

// Ignore obvious bots — they inflate counts and never convert.
$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
if ($ua === '' || preg_match('~bot|crawl|spider|slurp|bing|preview|monitor|headless|lighthouse~i', $ua)) {
  http_response_code(204); exit;
}

// type = 'view' | 'notfound' | 'engaged' | 'exit' | a tracked event name
$type = preg_replace('~[^a-z0-9_]~', '', strtolower((string)($in['t'] ?? '')));
if ($type === '' || strlen($type) > 40) { http_response_code(204); exit; }

// Clean a site-relative path: must start with /, ASCII only, no query/hash.
function clean_path($p): string {
  $p = (string)$p;
  if ($p === '' || $p[0] !== '/' || strlen($p) > 300) return '/';
  $p = preg_replace('~[^\x20-\x7E]~', '', $p);
  return strtok($p, '?#') ?: '/';
}
$path = clean_path($in['p'] ?? '/');

// Device bucket from the UA (no fingerprinting — one of three words).
$device = preg_match('~Mobi|Android|iPhone|iPod~i', $ua) ? 'mobile'
        : (preg_match('~iPad|Tablet~i', $ua) ? 'tablet' : 'desktop');

// Referrer HOST only (never the full URL, never our own domain).
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
  't'   => date('Y-m-d'),
  'hh'  => (int) date('G'),        // hour 0-23, Algiers time
  'wd'  => (int) date('w'),        // weekday 0=Sun … 6=Sat
  'ty'  => $type,
  'p'   => $path,
  'dev' => $device,
  'ref' => $ref,
  'ln'  => $lang,
];

// Optional context, only when the beacon supplied it -------------------------
$sid = preg_replace('~[^a-z0-9]~', '', strtolower((string)($in['s'] ?? '')));
if ($sid !== '' && strlen($sid) <= 16) $rec['s'] = $sid;          // ephemeral session
if (!empty($in['en'])) $rec['en'] = 1;                             // entry page of session
$vw = (string)($in['vw'] ?? '');
if (in_array($vw, ['sm','md','lg'], true)) $rec['vw'] = $vw;       // viewport bucket
$utm = preg_replace('~[^\x20-\x7E]~', '', (string)($in['utm'] ?? ''));
if ($utm !== '') $rec['utm'] = substr($utm, 0, 40);                // campaign source
if (isset($in['dw'])) {                                            // dwell seconds (exit)
  $d = (int) $in['dw'];
  if ($d > 0 && $d < 3600) $rec['sec'] = $d;
}
if (isset($in['sd'])) {                                            // scroll depth % (exit)
  $sd = (int) $in['sd'];
  if ($sd >= 0 && $sd <= 100) $rec['sd'] = $sd;
}
if (!empty($in['tp'])) $rec['tp'] = clean_path($in['tp']);         // clicked tour path

$dir = __DIR__ . '/data';
if (!is_dir($dir)) @mkdir($dir, 0755, true);
$file = $dir . '/hits-' . date('Y-m') . '.jsonl';
@file_put_contents($file, json_encode($rec, JSON_UNESCAPED_SLASHES) . "\n", FILE_APPEND | LOCK_EX);

http_response_code(204);
