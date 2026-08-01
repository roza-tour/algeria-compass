<?php
// Algeria Compass — private behaviour dashboard (self-hosted, no third party).
// Reads the anonymous hit log written by hit.php (data/hits-YYYY-MM.jsonl) and
// answers the questions that actually change decisions: which tours pull
// people in, how far they read, where they arrive from, when they browse, and
// where they drop out of the booking funnel.
//
// NO PASSWORD (owner's choice): hidden + noindex only. To lock it later, the
// same 3-line gate used by reviews-admin.php drops straight in.

date_default_timezone_set('Africa/Algiers');
header('X-Robots-Tag: noindex, nofollow', true);
header('Referrer-Policy: no-referrer');

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
$entryPages = []; $tourClicks = []; $notFound = []; $utms = [];
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

arsort($pages); arsort($refs); arsort($devices); arsort($langs);
arsort($entryPages); arsort($tourClicks); arsort($notFound); arsort($utms);

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
];
$CONV_LIST = ['whatsapp_click', 'inquiry_submit', 'book_intent', 'cta_plan', 'plan_click'];
$LANG_LABELS = ['en' => 'إنجليزي', 'fr' => 'فرنسي', 'it' => 'إيطالي', 'es' => 'إسباني', 'de' => 'ألماني'];
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
  <span class="sub">Algeria Compass · إحصاء ذاتي على خادمك · بتوقيت الجزائر</span>
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

  <div class="note">الأرقام محسوبة محليًا من زيارات موقعك مباشرة — بدون كوكيز، وبدون تسجيل أي عنوان IP أو بيانات شخصية، وبدون أي طرف ثالث. مُعرّف الجلسة مؤقّت ويُمحى فور إغلاق التبويب. تُستثنى الزواحف الآلية. الصفحة مخفية وغير مفهرسة.</div>
<?php endif; ?>

</div></body></html>
