<?php
// Algeria Compass — private site-stats dashboard (self-hosted, no third party).
// Reads the anonymous hit log written by hit.php (data/hits-YYYY-MM.jsonl) and
// shows views, top pages, tracked interactions, languages, referrers and
// devices for the last 30 days. No Google, no accounts, no setup — it starts
// counting the moment hit.php goes live and simply reads those files here.
//
// NO PASSWORD (owner's choice): hidden + noindex only. To lock it later, the
// same 3-line gate used by reviews-admin.php drops straight in.

header('X-Robots-Tag: noindex, nofollow', true);
header('Referrer-Policy: no-referrer');

$DAYS = 30;
$today = new DateTimeImmutable('today', new DateTimeZone('UTC'));
$from  = $today->sub(new DateInterval('P' . ($DAYS - 1) . 'D'));
$fromStr = $from->format('Y-m-d');
$todayStr = $today->format('Y-m-d');

// Read the current and previous month files (covers any rolling 30-day window).
$dir = __DIR__ . '/data';
$files = [
  $dir . '/hits-' . $today->format('Y-m') . '.jsonl',
  $dir . '/hits-' . $today->sub(new DateInterval('P1M'))->format('Y-m') . '.jsonl',
];

$views = 0; $views7 = 0; $viewsToday = 0;
$byDay = []; $pages = []; $events = []; $devices = []; $refs = []; $langs = [];
for ($d = clone $from; $d <= $today; $d = $d->add(new DateInterval('P1D'))) $byDay[$d->format('Y-m-d')] = 0;
$sevenAgo = $today->sub(new DateInterval('P6D'))->format('Y-m-d');
$hasData = false;

foreach ($files as $f) {
  if (!is_file($f)) continue;
  $fh = fopen($f, 'r');
  if (!$fh) continue;
  while (($line = fgets($fh)) !== false) {
    $r = json_decode($line, true);
    if (!is_array($r)) continue;
    $date = $r['t'] ?? '';
    if ($date < $fromStr || $date > $todayStr) continue;   // outside the window
    $hasData = true;
    $ty = $r['ty'] ?? '';
    if ($ty === 'view') {
      $views++;
      if (isset($byDay[$date])) $byDay[$date]++;
      if ($date >= $sevenAgo) $views7++;
      if ($date === $todayStr) $viewsToday++;
      $p = $r['p'] ?? '/'; $pages[$p] = ($pages[$p] ?? 0) + 1;
      $dev = $r['dev'] ?? 'desktop'; $devices[$dev] = ($devices[$dev] ?? 0) + 1;
      $rf = $r['ref'] ?? 'direct'; $refs[$rf] = ($refs[$rf] ?? 0) + 1;
      $ln = $r['ln'] ?? 'en'; $langs[$ln] = ($langs[$ln] ?? 0) + 1;
    } else {
      $events[$ty] = ($events[$ty] ?? 0) + 1;
    }
  }
  fclose($fh);
}

arsort($pages); arsort($refs); arsort($devices); arsort($langs);
$topPages = array_slice($pages, 0, 12, true);
$topRefs  = array_slice($refs, 0, 8, true);

$ev = fn(string $k): int => (int)($events[$k] ?? 0);
$EVENT_LABELS = [
  'whatsapp_click' => 'نقرات واتساب',
  'inquiry_submit' => 'إرسال نموذج حجز',
  'cta_plan'       => 'زر «خطّط رحلتك»',
  'book_intent'    => 'نية الحجز (فتح الحجز)',
  'plan_click'     => 'زر التخطيط العائم',
];
$CONV = ['whatsapp_click', 'inquiry_submit', 'book_intent', 'cta_plan', 'plan_click'];
$LANG_LABELS = ['en' => 'إنجليزي', 'fr' => 'فرنسي', 'it' => 'إيطالي', 'es' => 'إسباني', 'de' => 'ألماني'];
$DEV_LABELS  = ['mobile' => 'موبايل', 'desktop' => 'كمبيوتر', 'tablet' => 'تابلت'];

function h($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
function n($v) { return number_format((float)$v); }
$maxDay = max(1, $byDay ? max($byDay) : 1);
$bookingReqs = $ev('inquiry_submit') + $ev('book_intent');
?><!doctype html>
<html lang="ar" dir="rtl"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>إحصائيات الموقع — Algeria Compass</title>
<style>
  :root{--emerald:#0B3D2E;--gold:#B88A2E;--gold-bright:#D9B45A;--ink:#22303a;--dim:#6b7280;--line:#e7e2d6;--bg:#F7F1E6;--card:#fff}
  *{box-sizing:border-box}
  body{font:16px/1.6 "Segoe UI",Tahoma,system-ui,sans-serif;background:var(--bg);color:var(--ink);margin:0}
  .wrap{max-width:1000px;margin:0 auto;padding:1.4rem clamp(.9rem,3vw,1.8rem) 3rem}
  header.top{display:flex;flex-wrap:wrap;gap:.6rem;align-items:baseline;justify-content:space-between;margin-bottom:.3rem}
  h1{color:var(--emerald);font-size:clamp(1.4rem,3vw,1.9rem);margin:0}
  .sub{color:var(--dim);font-size:.9rem;margin:.1rem 0 1.4rem}
  .grid{display:grid;gap:.9rem}
  .tiles{grid-template-columns:repeat(4,1fr)}
  .tile{background:var(--card);border:1px solid var(--line);border-top:3px solid var(--gold);border-radius:12px;padding:1.1rem 1rem;box-shadow:0 4px 14px rgba(11,61,46,.05)}
  .tile b{display:block;font-size:1.9rem;color:var(--emerald);font-weight:800;line-height:1.1}
  .tile span{display:block;color:var(--dim);font-size:.82rem;margin-top:.25rem}
  .tile .mini{color:var(--gold);font-size:.78rem;font-weight:700;margin-top:.4rem}
  section{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:1.1rem 1.2rem;margin-top:1.1rem;box-shadow:0 4px 14px rgba(11,61,46,.05)}
  h2{color:var(--emerald);font-size:1.05rem;margin:0 0 .9rem;display:flex;align-items:center;gap:.5rem}
  h2::before{content:"";width:8px;height:8px;background:var(--gold);transform:rotate(45deg);display:inline-block}
  table{width:100%;border-collapse:collapse}
  th,td{text-align:right;padding:.5rem .3rem;border-bottom:1px solid var(--line);font-size:.92rem}
  th{color:var(--dim);font-weight:600;font-size:.8rem}
  td.num{font-weight:700;color:var(--emerald);white-space:nowrap;text-align:left;font-variant-numeric:tabular-nums}
  .path{color:var(--ink);word-break:break-all;direction:ltr;text-align:left;font-family:ui-monospace,monospace;font-size:.85rem}
  .bar-wrap{display:flex;align-items:flex-end;gap:2px;height:120px;margin-top:1rem;padding-top:.5rem;border-top:1px solid var(--line)}
  .bar{flex:1;background:linear-gradient(180deg,var(--gold-bright),var(--gold));border-radius:2px 2px 0 0;min-height:2px;position:relative}
  .bar:hover{background:var(--emerald)}
  .bar em{position:absolute;top:-1.3rem;left:50%;transform:translateX(-50%);font-style:normal;font-size:.62rem;color:var(--dim);opacity:0;white-space:nowrap}
  .bar:hover em{opacity:1}
  .bar-x{display:flex;justify-content:space-between;color:var(--dim);font-size:.7rem;margin-top:.3rem}
  .two{display:grid;grid-template-columns:1fr 1fr;gap:1.1rem}
  .chip{display:inline-block;background:#f3ecdd;color:var(--gold);font-weight:700;border-radius:999px;padding:.15rem .6rem;font-size:.78rem;margin:0 0 .3rem .3rem}
  .note{background:#fff8ec;border:1px solid #ecdcb8;border-radius:10px;padding:.8rem 1rem;color:#6b5a34;font-size:.86rem;margin-top:1.1rem}
  .empty{background:var(--card);border:1px dashed var(--line);border-radius:12px;padding:2rem 1.2rem;text-align:center;color:var(--dim);margin-top:1rem}
  @media(max-width:760px){.tiles{grid-template-columns:1fr 1fr}.two{grid-template-columns:1fr}}
</style></head><body><div class="wrap">

<header class="top">
  <h1>📊 إحصائيات الموقع</h1>
  <span class="sub">Algeria Compass · آخر <?= $DAYS ?> يومًا · إحصاء ذاتي على خادمك (بدون جوجل)</span>
</header>

<?php if (!$hasData): ?>
  <div class="empty">
    <p style="font-size:1.05rem;color:var(--ink)">لسه مفيش بيانات — العدّاد بيبدأ يشتغل أول ما يترفع على الخادم.</p>
    <p>بعد رفع التحديث، افتحي أي صفحة في الموقع مرة أو اتنين، وبعدها حدّثي الصفحة دي وهتلاقي الأرقام بدأت.</p>
  </div>
<?php else: ?>
  <div class="grid tiles">
    <div class="tile"><b><?= n($views) ?></b><span>مشاهدات الصفحات (<?= $DAYS ?> يوم)</span><span class="mini">اليوم: <?= n($viewsToday) ?></span></div>
    <div class="tile"><b><?= n($views7) ?></b><span>مشاهدات آخر 7 أيام</span></div>
    <div class="tile"><b><?= n($ev('whatsapp_click')) ?></b><span>نقرات واتساب</span></div>
    <div class="tile"><b><?= n($bookingReqs) ?></b><span>طلبات حجز / اهتمام</span></div>
  </div>

  <section>
    <h2>المشاهدات اليومية</h2>
    <div class="bar-wrap">
      <?php foreach ($byDay as $date => $c): $hpc = max(2, round($c / $maxDay * 100));
        $lbl = substr($date, 8, 2) . '/' . substr($date, 5, 2); ?>
        <div class="bar" style="height:<?= $hpc ?>%"><em><?= h($lbl) ?>: <?= n($c) ?></em></div>
      <?php endforeach; ?>
    </div>
    <div class="bar-x">
      <span><?= h(substr($fromStr,8,2).'/'.substr($fromStr,5,2)) ?></span>
      <span>إجمالي <?= $DAYS ?> يوم: <?= n($views) ?> مشاهدة</span>
      <span><?= h(substr($todayStr,8,2).'/'.substr($todayStr,5,2)) ?></span>
    </div>
  </section>

  <div class="two">
    <section>
      <h2>أكثر الصفحات مشاهدة</h2>
      <table><thead><tr><th>الصفحة</th><th>المشاهدات</th></tr></thead><tbody>
      <?php foreach ($topPages as $p => $c): ?>
        <tr><td class="path"><?= h($p) ?></td><td class="num"><?= n($c) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
    </section>

    <section>
      <h2>التفاعلات المهمّة</h2>
      <table><thead><tr><th>الحدث</th><th>عدد المرات</th></tr></thead><tbody>
      <?php foreach ($CONV as $k): ?>
        <tr><td><?= h($EVENT_LABELS[$k] ?? $k) ?></td><td class="num"><?= n($ev($k)) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
      <p style="color:var(--dim);font-size:.78rem;margin:.7rem 0 0">الأحداث التي يتتبّعها الموقع فعليًا: نقرات واتساب، إرسال النماذج، وأزرار التخطيط والحجز.</p>
    </section>

    <section>
      <h2>مصادر الزيارات</h2>
      <table><thead><tr><th>المصدر</th><th>المشاهدات</th></tr></thead><tbody>
      <?php foreach ($topRefs as $rf => $c): $label = $rf === 'direct' ? 'مباشر / محفوظ' : $rf; ?>
        <tr><td class="path"><?= h($label) ?></td><td class="num"><?= n($c) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
    </section>

    <section>
      <h2>اللغات والأجهزة</h2>
      <p>
      <?php foreach ($langs as $ln => $c): ?>
        <span class="chip"><?= h($LANG_LABELS[$ln] ?? $ln) ?>: <?= n($c) ?></span>
      <?php endforeach; ?>
      </p>
      <p style="margin-top:.6rem">
      <?php foreach ($devices as $dv => $c): ?>
        <span class="chip"><?= h($DEV_LABELS[$dv] ?? $dv) ?>: <?= n($c) ?></span>
      <?php endforeach; ?>
      </p>
    </section>
  </div>

  <div class="note">الأرقام محسوبة محليًا من زيارات موقعك مباشرة — بدون كوكيز، وبدون تسجيل أي بيانات شخصية أو عناوين IP، وبدون أي طرف ثالث. تُستثنى الزواحف الآلية. الصفحة مخفية وغير مفهرسة.</div>
<?php endif; ?>

</div></body></html>
