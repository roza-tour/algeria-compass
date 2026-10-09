<?php
// Algeria Compass — private behaviour dashboard (self-hosted, no third party).
// Reads the anonymous hit log written by hit.php (data/hits-YYYY-MM.jsonl) and
// answers the questions that actually change decisions: which tours pull
// people in, how far they read, where they arrive from, when they browse, and
// where they drop out of the booking funnel.
//
// PASSWORD-PROTECTED (owner's request, 2026-10-04): it shows visitors' own
// words — searches and questions — so it is no longer left open. The bcrypt
// hash lives in stats-auth.php; login is throttled per IP.

date_default_timezone_set('Africa/Algiers');
header('X-Robots-Tag: noindex, nofollow', true);
header('Referrer-Policy: no-referrer');

// ---- login gate ------------------------------------------------------------
function stats_hash(): string {
  $env = getenv('STATS_HASH'); if (is_string($env) && $env !== '') return $env;
  $f = __DIR__ . '/../.stats_hash'; if (is_file($f)) { $h = trim((string) file_get_contents($f)); if ($h !== '') return $h; }
  $h = @include __DIR__ . '/stats-auth.php'; return is_string($h) ? $h : '';
}
function stats_throttle_file(): string { return __DIR__ . '/data/.stats-login-' . md5(substr($_SERVER['REMOTE_ADDR'] ?? '0', 0, 45)) . '.json'; }
function stats_fails(): array { $f = stats_throttle_file(); $now = time();
  $h = is_file($f) ? (json_decode((string) @file_get_contents($f), true) ?: []) : [];
  return array_values(array_filter($h, fn($t) => $t > $now - 900)); }
session_name('acstats');
session_set_cookie_params(['lifetime' => 0, 'path' => '/', 'secure' => true, 'httponly' => true, 'samesite' => 'Strict']);
session_start();
if (empty($_SESSION['st_tok'])) $_SESSION['st_tok'] = bin2hex(random_bytes(16));
if (isset($_GET['logout'])) { session_destroy(); header('Location: stats.php'); exit; }
if (isset($_POST['st_pass'])) {
  $fails = stats_fails();
  $ok = count($fails) < 5 && hash_equals($_SESSION['st_tok'], (string) ($_POST['st_tok'] ?? ''))
        && ($hash = stats_hash()) !== '' && password_verify((string) $_POST['st_pass'], $hash);
  if ($ok) { session_regenerate_id(true); $_SESSION['st_ok'] = true; }
  else {
    $fails[] = time(); if (!is_dir(__DIR__ . '/data')) @mkdir(__DIR__ . '/data', 0755, true);
    @file_put_contents(stats_throttle_file(), json_encode($fails), LOCK_EX);
    $_SESSION['st_err'] = count($fails) >= 5 ? 'محاولات كثيرة — انتظر ربع ساعة.' : 'كلمة المرور غير صحيحة.';
  }
  header('Location: stats.php' . (isset($_GET['d']) ? '?d=' . (int) $_GET['d'] : '')); exit;
}
if (empty($_SESSION['st_ok'])) {
  $err = $_SESSION['st_err'] ?? ''; unset($_SESSION['st_err']);
  $tok = htmlspecialchars($_SESSION['st_tok'], ENT_QUOTES, 'UTF-8');
  header('Content-Type: text/html; charset=utf-8');
  echo '<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>الإحصائيات</title>'
     . '<style>body{font-family:system-ui,sans-serif;background:#0f1e17;color:#f3ead7;display:grid;place-items:center;min-height:100vh;margin:0}'
     . 'form{background:#17291f;padding:2rem;border-radius:14px;width:min(340px,90vw);display:grid;gap:.8rem}input{font:inherit;padding:.75rem;border-radius:9px;border:1px solid #3b5446;background:#0f1e17;color:#fff}'
     . 'button{font:inherit;padding:.75rem;border:0;border-radius:9px;background:#c8a24a;color:#1a1a1a;font-weight:700;cursor:pointer}.e{color:#ff9b8a}</style></head><body>'
     . '<form method="post"><h1 style="margin:0;font-size:1.3rem">لوحة الإحصائيات</h1>'
     . ($err ? '<p class="e">' . htmlspecialchars($err, ENT_QUOTES, 'UTF-8') . '</p>' : '')
     . '<input type="hidden" name="st_tok" value="' . $tok . '"><input type="password" name="st_pass" placeholder="كلمة المرور" autocomplete="current-password" required autofocus>'
     . '<button type="submit">دخول</button></form></body></html>';
  exit;
}

// ---- range selector (7 / 30 / 90 days) ----
$RANGES = [7 => '7 أيام', 30 => '30 يومًا', 90 => '90 يومًا'];
$DAYS = (int)($_GET['d'] ?? 30);
if (!isset($RANGES[$DAYS])) $DAYS = 30;

$today   = new DateTimeImmutable('today');
$from    = $today->sub(new DateInterval('P' . ($DAYS - 1) . 'D'));
$fromStr = $from->format('Y-m-d');
$todayStr = $today->format('Y-m-d');

// Month files that can hold this window (up to 4 for a 90-day range).
$dir = __DIR__ . '/data';
$files = [];
for ($m = 0; $m <= (int)ceil($DAYS / 28); $m++) {
  $files[] = $dir . '/hits-' . $today->sub(new DateInterval('P' . $m . 'M'))->format('Y-m') . '.jsonl';
}
$files = array_unique($files);

// ---- accumulators ----
$views = 0; $viewsToday = 0; $prevViews = 0;
$byDay = []; $byHour = array_fill(0, 24, 0); $byWeekday = array_fill(0, 7, 0);
$pages = []; $events = []; $devices = []; $refs = []; $langs = [];
$browserLangs = [];        // visitor's own browser language (market signal)
$entryPages = []; $tourClicks = []; $notFound = []; $utms = [];
$searches = []; $searchesEmpty = []; $searchTotal = 0;
$asked = []; $askedEmpty = []; $askedTotal = 0; $askedLang = [];   // on-site assistant
$sessions = [];            // sid => view count   (bounce + pages/session)
$dwellSum = 0; $dwellN = 0;
$scrollSum = 0; $scrollN = 0;
$engaged = 0;
$convByLang = []; $convByDev = [];   // language/device => conversion events
$viewsByLang = []; $viewsByDev = []; // matching denominators
$hasData = false;

for ($d = clone $from; $d <= $today; $d = $d->add(new DateInterval('P1D'))) $byDay[$d->format('Y-m-d')] = 0;

// Previous equal-length window, for the trend arrows.
$prevFrom = $from->sub(new DateInterval('P' . $DAYS . 'D'))->format('Y-m-d');
$prevTo   = $from->sub(new DateInterval('P1D'))->format('Y-m-d');

// Conversion = a real intent signal, not a pageview.
$CONV_SET = ['whatsapp_click' => 1, 'inquiry_submit' => 1, 'book_intent' => 1];

foreach ($files as $f) {
  if (!is_file($f)) continue;
  $fh = @fopen($f, 'r');
  if (!$fh) continue;
  while (($line = fgets($fh)) !== false) {
    $r = json_decode($line, true);
    if (!is_array($r)) continue;
    $date = $r['t'] ?? '';

    if ($date >= $prevFrom && $date <= $prevTo && ($r['ty'] ?? '') === 'view') { $prevViews++; continue; }
    if ($date < $fromStr || $date > $todayStr) continue;

    $hasData = true;
    $ty  = $r['ty'] ?? '';
    $p   = $r['p'] ?? '/';
    $ln  = $r['ln'] ?? 'en';
    $dev = $r['dev'] ?? 'desktop';
    $sid = $r['s'] ?? '';

    if ($ty === 'view') {
      $views++;
      if (isset($byDay[$date])) $byDay[$date]++;
      if ($date === $todayStr) $viewsToday++;
      // Only count hour/weekday when the record actually carries them —
      // hits logged before these fields existed would otherwise all pile up
      // on midnight/Sunday and invent a spike that never happened.
      if (isset($r['hh'])) $byHour[max(0, min(23, (int)$r['hh']))]++;
      if (isset($r['wd'])) $byWeekday[max(0, min(6, (int)$r['wd']))]++;
      $pages[$p] = ($pages[$p] ?? 0) + 1;
      $devices[$dev] = ($devices[$dev] ?? 0) + 1;
      $langs[$ln] = ($langs[$ln] ?? 0) + 1;
      if (!empty($r['bl'])) $browserLangs[$r['bl']] = ($browserLangs[$r['bl']] ?? 0) + 1;
      $refs[$r['ref'] ?? 'direct'] = ($refs[$r['ref'] ?? 'direct'] ?? 0) + 1;
      $viewsByLang[$ln] = ($viewsByLang[$ln] ?? 0) + 1;
      $viewsByDev[$dev] = ($viewsByDev[$dev] ?? 0) + 1;
      if (!empty($r['en'])) $entryPages[$p] = ($entryPages[$p] ?? 0) + 1;
      if (!empty($r['utm'])) $utms[$r['utm']] = ($utms[$r['utm']] ?? 0) + 1;
      if ($sid !== '') $sessions[$sid] = ($sessions[$sid] ?? 0) + 1;
    } elseif ($ty === 'notfound') {
      $notFound[$p] = ($notFound[$p] ?? 0) + 1;
    } elseif ($ty === 'engaged') {
      $engaged++;
    } elseif ($ty === 'exit') {
      if (isset($r['sec'])) { $dwellSum += (int)$r['sec']; $dwellN++; }
      if (isset($r['sd']))  { $scrollSum += (int)$r['sd']; $scrollN++; }
    } elseif ($ty === 'search') {
      $q = $r['q'] ?? '';
      if ($q !== '') {
        $searchTotal++;
        $searches[$q] = ($searches[$q] ?? 0) + 1;
        // Zero-result queries are the actionable ones: each names a page a
        // visitor went looking for and did not find.
        if ((int)($r['n'] ?? 0) === 0) $searchesEmpty[$q] = ($searchesEmpty[$q] ?? 0) + 1;
      }
    } elseif ($ty === 'ask') {
      // Questions typed into the on-site assistant. Unlike a search box these
      // are whole sentences in the visitor's own words, so the n=0 list reads
      // like a list of things the site should say and does not.
      $q = $r['q'] ?? '';
      if ($q !== '') {
        $askedTotal++;
        $asked[$q] = ($asked[$q] ?? 0) + 1;
        $askedLang[$ln] = ($askedLang[$ln] ?? 0) + 1;
        if ((int)($r['n'] ?? 0) === 0) $askedEmpty[$q] = ($askedEmpty[$q] ?? 0) + 1;
      }
    } elseif ($ty === 'tour_click') {
      $tp = $r['tp'] ?? '';
      if ($tp !== '') $tourClicks[$tp] = ($tourClicks[$tp] ?? 0) + 1;
    } else {
      $events[$ty] = ($events[$ty] ?? 0) + 1;
      if (isset($CONV_SET[$ty])) {
        $convByLang[$ln] = ($convByLang[$ln] ?? 0) + 1;
        $convByDev[$dev] = ($convByDev[$dev] ?? 0) + 1;
      }
    }
  }
  fclose($fh);
}

arsort($pages); arsort($refs); arsort($devices); arsort($langs); arsort($browserLangs);
arsort($entryPages); arsort($tourClicks); arsort($notFound); arsort($utms);
arsort($searches); arsort($searchesEmpty);
arsort($asked); arsort($askedEmpty); arsort($askedLang);

$ev = fn(string $k): int => (int)($events[$k] ?? 0);
$whatsapp = $ev('whatsapp_click');
$inquiries = $ev('inquiry_submit');
$bookIntent = $ev('book_intent');
$conversions = $whatsapp + $inquiries + $bookIntent;

$sessionCount = count($sessions);
$bounces = 0; foreach ($sessions as $c) if ($c <= 1) $bounces++;
$bounceRate   = $sessionCount ? round($bounces / $sessionCount * 100) : 0;
$pagesPerSess = $sessionCount ? round($views / $sessionCount, 1) : 0;
$avgDwell     = $dwellN ? round($dwellSum / $dwellN) : 0;
$avgScroll    = $scrollN ? round($scrollSum / $scrollN) : 0;
$engRate      = $views ? round($engaged / $views * 100) : 0;
$convRate     = $sessionCount ? round($conversions / $sessionCount * 100, 1) : 0;
$deltaViews   = $prevViews > 0 ? round(($views - $prevViews) / $prevViews * 100) : null;

// Pages that are tour detail pages, in any language — the commercial core.
$isTour = fn(string $p): bool => (bool) preg_match('~^/(tours|fr/circuits|it/circuiti|es/circuitos|de/reisen)/[^/]+/$~', $p);
$tourViews = 0; $tourPages = [];
foreach ($pages as $p => $c) if ($isTour($p)) { $tourViews += $c; $tourPages[$p] = $c; }

// Funnel: everyone → looked at a tour → showed intent → sent an enquiry.
$funnel = [
  ['l' => 'زيارات الموقع',        'v' => $views,      'c' => '#0B3D2E'],
  ['l' => 'شاهدوا صفحة رحلة',     'v' => $tourViews,  'c' => '#14614a'],
  ['l' => 'أبدوا نية حجز/تواصل',  'v' => $conversions,'c' => '#B88A2E'],
  ['l' => 'أرسلوا نموذج حجز',     'v' => $inquiries,  'c' => '#D9B45A'],
];
$funnelMax = max(1, $views);

$EVENT_LABELS = [
  'whatsapp_click' => 'نقرات واتساب',
  'inquiry_submit' => 'إرسال نموذج حجز',
  'cta_plan'       => 'زر «خطّط رحلتك»',
  'book_intent'    => 'نية الحجز (فتح الحجز)',
  'plan_click'     => 'زر التخطيط العائم',
  'itinerary_pdf'  => 'تحميل البرنامج PDF (مقابل إيميل)',
  'guide_tour_click' => 'نقرة على رحلة من داخل مقال',
  'planner_whatsapp' => 'مخطّط الرحلة ← واتساب',
  'planner_request'  => 'مخطّط الرحلة ← طلب حجز',
];
$CONV_LIST = ['whatsapp_click', 'inquiry_submit', 'book_intent', 'cta_plan', 'plan_click', 'itinerary_pdf', 'guide_tour_click', 'planner_whatsapp', 'planner_request'];
$LANG_LABELS = ['en' => 'إنجليزي', 'fr' => 'فرنسي', 'it' => 'إيطالي', 'es' => 'إسباني', 'de' => 'ألماني'];
// Browser languages — every market a visitor might come from, not just ours.
$BL_LABELS = $LANG_LABELS + ['ar' => 'عربي', 'nl' => 'هولندي', 'pl' => 'بولندي', 'pt' => 'برتغالي', 'ru' => 'روسي',
  'tr' => 'تركي', 'zh' => 'صيني', 'ja' => 'ياباني', 'ko' => 'كوري', 'cs' => 'تشيكي', 'sv' => 'سويدي', 'da' => 'دنماركي',
  'no' => 'نرويجي', 'nb' => 'نرويجي', 'fi' => 'فنلندي', 'hu' => 'مجري', 'ro' => 'روماني', 'el' => 'يوناني', 'he' => 'عبري',
  'hi' => 'هندي', 'id' => 'إندونيسي', 'ms' => 'ماليزي', 'fa' => 'فارسي', 'uk' => 'أوكراني'];
$DEV_LABELS  = ['mobile' => 'موبايل', 'desktop' => 'كمبيوتر', 'tablet' => 'تابلت'];
$WD_LABELS   = ['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];

function h($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
function n($v) { return number_format((float)$v); }
function mmdd(string $d): string { return substr($d, 8, 2) . '/' . substr($d, 5, 2); }
function dur(int $s): string { return $s >= 60 ? floor($s/60) . 'د ' . ($s%60) . 'ث' : $s . ' ثانية'; }
$maxDay  = max(1, $byDay ? max($byDay) : 1);
$maxHour = max(1, max($byHour));
$maxWd   = max(1, max($byWeekday));
$top = fn(array $a, int $k) => array_slice($a, 0, $k, true);
?><!doctype html>
<html lang="ar" dir="rtl"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>إحصائيات الموقع — Algeria Compass</title>
<style>
  :root{--emerald:#0B3D2E;--emerald2:#14614a;--gold:#B88A2E;--gold-bright:#D9B45A;--ink:#22303a;--dim:#6b7280;--line:#e7e2d6;--bg:#F7F1E6;--card:#fff}
  *{box-sizing:border-box}
  body{font:16px/1.6 "Segoe UI",Tahoma,system-ui,sans-serif;background:var(--bg);color:var(--ink);margin:0}
  .wrap{max-width:1060px;margin:0 auto;padding:1.4rem clamp(.9rem,3vw,1.8rem) 3rem}
  header.top{display:flex;flex-wrap:wrap;gap:.6rem;align-items:baseline;justify-content:space-between}
  h1{color:var(--emerald);font-size:clamp(1.4rem,3vw,1.9rem);margin:0}
  .sub{color:var(--dim);font-size:.88rem}
  .ranges{display:flex;gap:.4rem;margin:1rem 0 1.2rem;flex-wrap:wrap}
  .ranges a{text-decoration:none;border:1px solid var(--line);background:var(--card);color:var(--dim);
    border-radius:999px;padding:.3rem .95rem;font-size:.85rem;font-weight:600}
  .ranges a.on{background:var(--emerald);border-color:var(--emerald);color:#fff}
  .grid{display:grid;gap:.9rem}
  .tiles{grid-template-columns:repeat(4,1fr)}
  .tile{background:var(--card);border:1px solid var(--line);border-top:3px solid var(--gold);border-radius:12px;padding:1rem;box-shadow:0 4px 14px rgba(11,61,46,.05)}
  .tile b{display:block;font-size:1.75rem;color:var(--emerald);font-weight:800;line-height:1.15}
  .tile span{display:block;color:var(--dim);font-size:.8rem;margin-top:.2rem}
  .tile .mini{font-size:.76rem;font-weight:700;margin-top:.35rem;color:var(--gold)}
  .up{color:#1c7a4f}.down{color:#b23a2a}
  section{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:1.1rem 1.2rem;margin-top:1.1rem;box-shadow:0 4px 14px rgba(11,61,46,.05)}
  h2{color:var(--emerald);font-size:1.03rem;margin:0 0 .9rem;display:flex;align-items:center;gap:.5rem}
  h2::before{content:"";width:8px;height:8px;background:var(--gold);transform:rotate(45deg);display:inline-block}
  h2 small{color:var(--dim);font-weight:400;font-size:.78rem;margin-inline-start:auto}
  table{width:100%;border-collapse:collapse}
  th,td{text-align:right;padding:.45rem .3rem;border-bottom:1px solid var(--line);font-size:.9rem}
  th{color:var(--dim);font-weight:600;font-size:.78rem}
  td.num{font-weight:700;color:var(--emerald);white-space:nowrap;text-align:left;font-variant-numeric:tabular-nums}
  .path{color:var(--ink);word-break:break-all;direction:ltr;text-align:left;font-family:ui-monospace,monospace;font-size:.82rem}
  .bar-wrap{display:flex;align-items:flex-end;gap:2px;height:120px;margin-top:1rem;padding-top:.5rem;border-top:1px solid var(--line)}
  .bar{flex:1;background:linear-gradient(180deg,var(--gold-bright),var(--gold));border-radius:2px 2px 0 0;min-height:2px;position:relative}
  .bar:hover{background:var(--emerald)}
  .bar em{position:absolute;top:-1.35rem;left:50%;transform:translateX(-50%);font-style:normal;font-size:.62rem;color:var(--dim);opacity:0;white-space:nowrap;background:#fff;padding:0 .2rem;border-radius:3px}
  .bar:hover em{opacity:1}
  .bar-x{display:flex;justify-content:space-between;color:var(--dim);font-size:.7rem;margin-top:.3rem}
  .two{display:grid;grid-template-columns:1fr 1fr;gap:1.1rem}
  .chip{display:inline-block;background:#f3ecdd;color:var(--gold);font-weight:700;border-radius:999px;padding:.15rem .6rem;font-size:.78rem;margin:0 0 .3rem .3rem}
  .funnel{display:grid;gap:.5rem;margin-top:.3rem}
  .fn-row{display:grid;grid-template-columns:11rem 1fr auto;gap:.7rem;align-items:center}
  .fn-bar{height:26px;border-radius:5px;min-width:3px}
  .fn-lab{font-size:.87rem;color:var(--ink)}
  .fn-val{font-weight:800;color:var(--emerald);font-variant-numeric:tabular-nums;white-space:nowrap;font-size:.9rem}
  .fn-pc{color:var(--dim);font-weight:600;font-size:.76rem}
  .note{background:#fff8ec;border:1px solid #ecdcb8;border-radius:10px;padding:.8rem 1rem;color:#6b5a34;font-size:.85rem;margin-top:1.1rem}
  .warn{background:#fdecea;border:1px solid #f5c6c0;color:#8a2318}
  .empty{background:var(--card);border:1px dashed var(--line);border-radius:12px;padding:2rem 1.2rem;text-align:center;color:var(--dim);margin-top:1rem}
  .muted-sm{color:var(--dim);font-size:.76rem;margin:.6rem 0 0}
  @media(max-width:820px){.tiles{grid-template-columns:1fr 1fr}.two{grid-template-columns:1fr}.fn-row{grid-template-columns:7.5rem 1fr auto}}
</style></head><body><div class="wrap">

<header class="top">
  <h1>📊 إحصائيات الموقع</h1>
  <span class="sub">Algeria Compass · إحصاء ذاتي على خادمك · بتوقيت الجزائر · <a href="?logout=1" style="color:inherit">خروج</a></span>
</header>

<nav class="ranges">
  <?php foreach ($RANGES as $d => $lab): ?>
    <a class="<?= $d === $DAYS ? 'on' : '' ?>" href="?d=<?= $d ?>"><?= h($lab) ?></a>
  <?php endforeach; ?>
</nav>

<?php if (!$hasData): ?>
  <div class="empty">
    <p style="font-size:1.05rem;color:var(--ink)">لسه مفيش بيانات في الفترة دي.</p>
    <p>افتحي أي صفحة في الموقع مرة أو اتنين، وبعدها حدّثي الصفحة دي.</p>
  </div>
<?php else: ?>

  <!-- ============ headline numbers ============ -->
  <div class="grid tiles">
    <div class="tile"><b><?= n($views) ?></b><span>مشاهدات الصفحات</span>
      <span class="mini">اليوم: <?= n($viewsToday) ?><?php if ($deltaViews !== null): ?>
        · <span class="<?= $deltaViews >= 0 ? 'up' : 'down' ?>"><?= $deltaViews >= 0 ? '▲' : '▼' ?> <?= abs($deltaViews) ?>%</span>
      <?php endif; ?></span></div>
    <div class="tile"><b><?= n($sessionCount) ?></b><span>زيارات (جلسات)</span><span class="mini"><?= $pagesPerSess ?> صفحة لكل زيارة</span></div>
    <div class="tile"><b><?= n($conversions) ?></b><span>إشارات اهتمام حقيقية</span><span class="mini">واتساب + حجز + نية حجز</span></div>
    <div class="tile"><b><?= $convRate ?>%</b><span>نسبة التحويل</span><span class="mini">من كل زيارة</span></div>
  </div>

  <!-- ============ funnel ============ -->
  <section>
    <h2>مسار الزبون — من الزيارة للحجز <small>أين يتوقّف الناس؟</small></h2>
    <div class="funnel">
      <?php foreach ($funnel as $i => $st):
        $w = max(0.5, $st['v'] / $funnelMax * 100);
        $prev = $i > 0 ? $funnel[$i-1]['v'] : 0;
        $drop = ($i > 0 && $prev > 0) ? round($st['v'] / $prev * 100) : null; ?>
        <div class="fn-row">
          <span class="fn-lab"><?= h($st['l']) ?></span>
          <span class="fn-bar" style="width:<?= $w ?>%;background:<?= $st['c'] ?>"></span>
          <span class="fn-val"><?= n($st['v']) ?><?php if ($drop !== null): ?> <span class="fn-pc">(<?= $drop ?>% من السابق)</span><?php endif; ?></span>
        </div>
      <?php endforeach; ?>
    </div>
    <p class="muted-sm">أكبر هبوط بين مرحلتين هو المكان اللي يستحق التحسين أولًا.</p>
  </section>

  <!-- ============ engagement ============ -->
  <section>
    <h2>جودة الزيارة <small>هل يقرأون فعلًا؟</small></h2>
    <div class="grid tiles">
      <div class="tile"><b><?= dur($avgDwell) ?></b><span>متوسط زمن البقاء بالصفحة</span></div>
      <div class="tile"><b><?= $avgScroll ?>%</b><span>متوسط عمق القراءة</span></div>
      <div class="tile"><b><?= $engRate ?>%</b><span>بقوا أكثر من 15 ثانية</span></div>
      <div class="tile"><b><?= $bounceRate ?>%</b><span>غادروا بعد صفحة واحدة</span></div>
    </div>
  </section>

  <!-- ============ daily trend ============ -->
  <section>
    <h2>المشاهدات اليومية</h2>
    <div class="bar-wrap">
      <?php foreach ($byDay as $date => $c): ?>
        <div class="bar" style="height:<?= max(2, round($c / $maxDay * 100)) ?>%"><em><?= h(mmdd($date)) ?>: <?= n($c) ?></em></div>
      <?php endforeach; ?>
    </div>
    <div class="bar-x"><span><?= h(mmdd($fromStr)) ?></span><span>الإجمالي: <?= n($views) ?></span><span><?= h(mmdd($todayStr)) ?></span></div>
  </section>

  <div class="two">
    <!-- ============ when do they browse ============ -->
    <section>
      <h2>ساعات اليوم <small>بتوقيت الجزائر</small></h2>
      <div class="bar-wrap" style="height:90px">
        <?php foreach ($byHour as $hh => $c): ?>
          <div class="bar" style="height:<?= max(2, round($c / $maxHour * 100)) ?>%"><em><?= $hh ?>:00 — <?= n($c) ?></em></div>
        <?php endforeach; ?>
      </div>
      <div class="bar-x"><span>00:00</span><span>12:00</span><span>23:00</span></div>
      <p class="muted-sm">الساعات المرتفعة هي أفضل وقت للنشر والرد على الاستفسارات.</p>
    </section>

    <section>
      <h2>أيام الأسبوع</h2>
      <table><tbody>
      <?php foreach ($byWeekday as $wd => $c): ?>
        <tr><td><?= h($WD_LABELS[$wd]) ?></td>
            <td style="width:60%"><span style="display:inline-block;height:9px;border-radius:5px;background:var(--gold);width:<?= max(1, round($c / $maxWd * 100)) ?>%"></span></td>
            <td class="num"><?= n($c) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
    </section>
  </div>

  <div class="two">
    <!-- ============ tours ============ -->
    <section>
      <h2>الرحلات الأكثر مشاهدة <small><?= n($tourViews) ?> مشاهدة</small></h2>
      <?php if ($tourPages): ?>
        <table><thead><tr><th>الرحلة</th><th>المشاهدات</th></tr></thead><tbody>
        <?php foreach ($top($tourPages, 10) as $p => $c): ?>
          <tr><td class="path"><?= h($p) ?></td><td class="num"><?= n($c) ?></td></tr>
        <?php endforeach; ?>
        </tbody></table>
      <?php else: ?><p class="muted-sm">لا توجد مشاهدات لصفحات الرحلات في هذه الفترة.</p><?php endif; ?>
    </section>

    <section>
      <h2>الرحلات الأكثر جذبًا للنقر <small>من صفحات القوائم</small></h2>
      <?php if ($tourClicks): ?>
        <table><thead><tr><th>الرحلة</th><th>النقرات</th></tr></thead><tbody>
        <?php foreach ($top($tourClicks, 10) as $p => $c): ?>
          <tr><td class="path"><?= h($p) ?></td><td class="num"><?= n($c) ?></td></tr>
        <?php endforeach; ?>
        </tbody></table>
      <?php else: ?><p class="muted-sm">لا توجد نقرات على بطاقات الرحلات بعد.</p><?php endif; ?>
    </section>
  </div>

  <div class="two">
    <section>
      <h2>أكثر الصفحات مشاهدة</h2>
      <table><thead><tr><th>الصفحة</th><th>المشاهدات</th></tr></thead><tbody>
      <?php foreach ($top($pages, 12) as $p => $c): ?>
        <tr><td class="path"><?= h($p) ?></td><td class="num"><?= n($c) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
    </section>

    <section>
      <h2>صفحات الدخول <small>من أين يبدأ الزائر؟</small></h2>
      <?php if ($entryPages): ?>
        <table><thead><tr><th>الصفحة</th><th>بدايات الزيارة</th></tr></thead><tbody>
        <?php foreach ($top($entryPages, 12) as $p => $c): ?>
          <tr><td class="path"><?= h($p) ?></td><td class="num"><?= n($c) ?></td></tr>
        <?php endforeach; ?>
        </tbody></table>
      <?php else: ?><p class="muted-sm">لم تُسجَّل بعد.</p><?php endif; ?>
    </section>
  </div>

  <div class="two">
    <section>
      <h2>التفاعلات المهمّة</h2>
      <table><thead><tr><th>الحدث</th><th>عدد المرات</th></tr></thead><tbody>
      <?php foreach ($CONV_LIST as $k): ?>
        <tr><td><?= h($EVENT_LABELS[$k] ?? $k) ?></td><td class="num"><?= n($ev($k)) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
    </section>

    <section>
      <h2>مصادر الزيارات</h2>
      <table><thead><tr><th>المصدر</th><th>المشاهدات</th></tr></thead><tbody>
      <?php foreach ($top($refs, 8) as $rf => $c): ?>
        <tr><td class="path"><?= h($rf === 'direct' ? 'مباشر / محفوظ' : $rf) ?></td><td class="num"><?= n($c) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
      <?php if ($utms): ?>
        <p class="muted-sm">حملات (utm): <?php foreach ($top($utms, 6) as $u => $c): ?><span class="chip"><?= h($u) ?>: <?= n($c) ?></span><?php endforeach; ?></p>
      <?php endif; ?>
    </section>
  </div>

  <!-- ============ language / device performance ============ -->
  <section>
    <h2>أداء اللغات والأجهزة <small>أين تحدث الاهتمامات فعلًا؟</small></h2>
    <div class="two">
      <table><thead><tr><th>اللغة</th><th>مشاهدات</th><th>اهتمامات</th></tr></thead><tbody>
      <?php foreach ($langs as $ln => $c): $cv = (int)($convByLang[$ln] ?? 0); ?>
        <tr><td><?= h($LANG_LABELS[$ln] ?? $ln) ?></td><td class="num"><?= n($c) ?></td><td class="num"><?= n($cv) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
      <table><thead><tr><th>الجهاز</th><th>مشاهدات</th><th>اهتمامات</th></tr></thead><tbody>
      <?php foreach ($devices as $dv => $c): $cv = (int)($convByDev[$dv] ?? 0); ?>
        <tr><td><?= h($DEV_LABELS[$dv] ?? $dv) ?></td><td class="num"><?= n($c) ?></td><td class="num"><?= n($cv) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
    </div>
  </section>

  <!-- ============ visitors' own language: which markets are arriving ============ -->
  <section>
    <h2>لغة متصفح الزائر <small>من أي سوق يأتي الزوّار — حتى اللغات التي ليست على الموقع بعد</small></h2>
    <?php if ($browserLangs): ?>
      <table><thead><tr><th>لغة الزائر</th><th>مشاهدات</th><th>على الموقع؟</th></tr></thead><tbody>
      <?php foreach ($top($browserLangs, 15) as $bl => $c): ?>
        <tr><td><?= h($BL_LABELS[$bl] ?? $bl) ?></td><td class="num"><?= n($c) ?></td><td><?= isset($LANG_LABELS[$bl]) ? '✓' : 'لا — سوق محتمل' ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
    <?php else: ?>
      <p class="muted-sm">يبدأ التسجيل من الآن — ستظهر الأرقام مع الزيارات القادمة.</p>
    <?php endif; ?>
  </section>

  <!-- ============ what visitors search for ============ -->
  <section>
    <h2>ما يبحث عنه الزوّار <small><?= n($searchTotal) ?> عملية بحث</small></h2>
    <?php if ($searches): ?>
      <div class="two">
        <div>
          <table><thead><tr><th>الكلمة</th><th>مرات</th></tr></thead><tbody>
          <?php foreach ($top($searches, 12) as $q => $c): ?>
            <tr><td><?= h($q) ?></td><td class="num"><?= n($c) ?></td></tr>
          <?php endforeach; ?>
          </tbody></table>
        </div>
        <div>
          <?php if ($searchesEmpty): ?>
            <table><thead><tr><th>بحث بلا نتائج</th><th>مرات</th></tr></thead><tbody>
            <?php foreach ($top($searchesEmpty, 12) as $q => $c): ?>
              <tr><td><?= h($q) ?></td><td class="num"><?= n($c) ?></td></tr>
            <?php endforeach; ?>
            </tbody></table>
            <div class="note warn">كل كلمة هنا زائر دوّر على حاجة ومالقاهاش — إمّا صفحة ناقصة تستحق الكتابة، أو صفحة موجودة بمسمّى مختلف عمّا يتوقعه الناس.</div>
          <?php else: ?>
            <p class="muted-sm">كل عمليات البحث رجعت نتائج.</p>
          <?php endif; ?>
        </div>
      </div>
    <?php else: ?>
      <p class="muted-sm">لم تُسجَّل عمليات بحث بعد. يبدأ التسجيل مع أول استخدام لمربع البحث في الأعلى.</p>
    <?php endif; ?>
  </section>

  <!-- ============ what visitors ask the assistant ============ -->
  <section>
    <h2>ما يسأل عنه الزوّار <small><?= n($askedTotal) ?> سؤال للمساعد</small></h2>
    <?php if ($asked): ?>
      <div class="two">
        <div>
          <table><thead><tr><th>السؤال</th><th>مرات</th></tr></thead><tbody>
          <?php foreach ($top($asked, 15) as $q => $c): ?>
            <tr><td><?= h($q) ?></td><td class="num"><?= n($c) ?></td></tr>
          <?php endforeach; ?>
          </tbody></table>
        </div>
        <div>
          <?php if ($askedEmpty): ?>
            <table><thead><tr><th>سؤال بلا إجابة</th><th>مرات</th></tr></thead><tbody>
            <?php foreach ($top($askedEmpty, 15) as $q => $c): ?>
              <tr><td><?= h($q) ?></td><td class="num"><?= n($c) ?></td></tr>
            <?php endforeach; ?>
            </tbody></table>
            <div class="note warn">دي أهم قائمة في الصفحة. كل سطر هنا زائر كتب سؤاله بكلماته والموقع مالقاش له إجابة — فاتحوّل لواتساب بدل ما ياخد رده فورًا. أضيفي الإجابة في صفحة الأسئلة أو في صفحة الرحلة المناسبة والسؤال ده هيتردّ عليه لوحده بعد كده.</div>
          <?php else: ?>
            <p class="muted-sm">كل الأسئلة لقت إجابة على الموقع.</p>
          <?php endif; ?>
          <?php if ($askedLang): ?>
            <table><thead><tr><th>لغة السؤال</th><th>مرات</th></tr></thead><tbody>
            <?php foreach ($askedLang as $ln => $c): ?>
              <tr><td><?= h($LANG_LABELS[$ln] ?? $ln) ?></td><td class="num"><?= n($c) ?></td></tr>
            <?php endforeach; ?>
            </tbody></table>
          <?php endif; ?>
        </div>
      </div>
    <?php else: ?>
      <p class="muted-sm">لم يُسجَّل أي سؤال بعد. يبدأ التسجيل مع أول استخدام لزرّ المساعد أسفل يسار أي صفحة.</p>
    <?php endif; ?>
  </section>

  <!-- ============ broken links ============ -->
  <?php if ($notFound): ?>
    <section>
      <h2>روابط مكسورة زارها ناس فعلًا <small>صفحات 404</small></h2>
      <table><thead><tr><th>الرابط المطلوب</th><th>مرات</th></tr></thead><tbody>
      <?php foreach ($top($notFound, 10) as $p => $c): ?>
        <tr><td class="path"><?= h($p) ?></td><td class="num"><?= n($c) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
      <div class="note warn">هذه روابط حاول زائر فتحها ولم توجد — كل واحدة زائر ضائع. أرسليها لي وأضيف تحويلًا لها.</div>
    </section>
  <?php endif; ?>

  <!-- ============ spam filter (spamguard.php) ============ -->
  <?php
    $spam = [];
    $sf = __DIR__ . '/data/spam.jsonl';
    if (is_file($sf)) foreach (file($sf, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $ln) { $e = json_decode($ln, true); if ($e) $spam[] = $e; }
    $spamBlocked = count(array_filter($spam, fn($e) => ($e['verdict'] ?? '') === 'block'));
    $spamSuspect = count($spam) - $spamBlocked;
    $FORM_AR = ['contact' => 'تواصل', 'partner' => 'شركاء', 'review' => 'تقييم'];
  ?>
  <section>
    <h2>فلتر السبام <small><?= n($spamBlocked) ?> رسالة اتمنعت · <?= n($spamSuspect) ?> وصلت بعلامة «Possible spam»</small></h2>
    <?php if ($spam): ?>
      <table><thead><tr><th>التاريخ</th><th>الفورم</th><th>القرار</th><th>الاسم / الإيميل</th><th>الرسالة</th><th>السبب</th></tr></thead><tbody>
      <?php foreach (array_slice(array_reverse($spam), 0, 25) as $e): ?>
        <tr>
          <td class="num"><?= h(substr($e['t'] ?? '', 0, 10)) ?></td>
          <td><?= h($FORM_AR[$e['form'] ?? ''] ?? ($e['form'] ?? '')) ?></td>
          <td><?= ($e['verdict'] ?? '') === 'block' ? 'اتمنعت' : 'مشكوك فيها' ?> (<?= (int)($e['score'] ?? 0) ?>)</td>
          <td><?= h($e['name'] ?? '') ?><br><span class="muted-sm"><?= h($e['email'] ?? '') ?></span></td>
          <td class="path"><?= h(mb_substr($e['text'] ?? '', 0, 140)) ?></td>
          <td class="muted-sm"><?= h(implode('، ', $e['why'] ?? [])) ?></td>
        </tr>
      <?php endforeach; ?>
      </tbody></table>
      <div class="note">لو لقيتي رسالة حقيقية اتمنعت هنا، تقدري تردي على الإيميل المكتوب، وابعتيلي عشان أظبط الفلتر.</div>
    <?php else: ?>
      <p class="muted-sm">لسه مافيش رسايل سبام اتمسكت. الفلتر شغال على فورم التواصل وفورم الشركاء وفورم التقييمات.</p>
    <?php endif; ?>
  </section>

  <div class="note">الأرقام محسوبة محليًا من زيارات موقعك مباشرة — بدون كوكيز، وبدون تسجيل أي عنوان IP أو بيانات شخصية، وبدون أي طرف ثالث. مُعرّف الجلسة مؤقّت ويُمحى فور إغلاق التبويب. تُستثنى الزواحف الآلية. الصفحة مخفية وغير مفهرسة.</div>
<?php endif; ?>

</div></body></html>
