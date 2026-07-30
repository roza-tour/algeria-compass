<?php
// Algeria Compass — private site-stats dashboard (GA4 Data API).
// ─────────────────────────────────────────────────────────────────────────
//  WHAT THIS IS
//  A hidden, no-login page that reads LIVE numbers from your Google Analytics
//  4 property (views, top pages, WhatsApp clicks, booking enquiries, countries,
//  devices, sources) and shows them in one simple Arabic dashboard.
//
//  It talks to Google server-to-server with a "service account". Your secret
//  key file lives OUTSIDE the web folder and is never sent to the browser —
//  the page only ever shows finished numbers.
//
//  ONE-TIME SETUP (see the on-screen steps if this is not configured yet):
//    1. Google Analytics → Admin → Property Settings → copy the PROPERTY ID
//       (a number like 123456789 — NOT the "G-..." measurement id).
//    2. Google Cloud Console → create/pick a project → enable
//       "Google Analytics Data API".
//    3. Create a Service Account → Keys → Add key → JSON → download.
//    4. Copy the service-account email, then in GA4 → Admin →
//       Property access management → add that email as "Viewer".
//    5. On the server, save the two secrets ABOVE the web folder:
//         ~/.ga_property_id            (just the number)
//         ~/.ga_service_account.json   (the downloaded JSON), chmod 600
//    6. Reload this page.
//
//  NO PASSWORD: per the owner's choice this page has no login. It is hidden
//  (noindex + not linked anywhere). To lock it later, the same 3-line gate
//  used by reviews-admin.php can be dropped in — ask and it's a minute's work.
// ─────────────────────────────────────────────────────────────────────────

header('X-Robots-Tag: noindex, nofollow', true);
header('Referrer-Policy: no-referrer');

// ---- read the two secrets from OUTSIDE the web root (env or file) ----
function first_file(array $paths): string {
  foreach ($paths as $f) if (is_file($f)) { $s = trim((string) file_get_contents($f)); if ($s !== '') return $s; }
  return '';
}
$PROPERTY_ID = getenv('GA_PROPERTY_ID') ?: first_file([__DIR__ . '/../.ga_property_id', __DIR__ . '/data/.ga_property_id']);
$SA_RAW      = getenv('GA_SERVICE_ACCOUNT_JSON') ?: first_file([__DIR__ . '/../.ga_service_account.json', __DIR__ . '/data/.ga_service_account.json']);

$CONFIGURED = ($PROPERTY_ID !== '' && $SA_RAW !== '');
$FATAL = '';      // hard error message (Arabic) to show instead of data
$DATA = [];       // fetched report results keyed by name

// ============================ GA4 DATA API =================================
function b64url(string $d): string { return rtrim(strtr(base64_encode($d), '+/', '-_'), '='); }

// Exchange the service-account key for a short-lived OAuth access token,
// cached in the web-blocked data/ folder so we don't re-auth on every reload.
function ga_access_token(array $sa): string {
  $cacheFile = __DIR__ . '/data/.ga_token.json';
  if (is_file($cacheFile)) {
    $c = json_decode((string) file_get_contents($cacheFile), true);
    if (is_array($c) && ($c['exp'] ?? 0) > time() + 60 && !empty($c['token'])) return $c['token'];
  }
  $now = time();
  $jwtHeader = b64url(json_encode(['alg' => 'RS256', 'typ' => 'JWT']));
  $jwtClaim  = b64url(json_encode([
    'iss'   => $sa['client_email'],
    'scope' => 'https://www.googleapis.com/auth/analytics.readonly',
    'aud'   => 'https://oauth2.googleapis.com/token',
    'iat'   => $now,
    'exp'   => $now + 3600,
  ]));
  $signingInput = $jwtHeader . '.' . $jwtClaim;
  $sig = '';
  if (!openssl_sign($signingInput, $sig, $sa['private_key'], OPENSSL_ALGO_SHA256)) {
    throw new RuntimeException('فشل توقيع الطلب — تأكّدي أن ملف مفتاح حساب الخدمة صحيح وكامل.');
  }
  $jwt = $signingInput . '.' . b64url($sig);

  [$body, $code] = http_post(
    'https://oauth2.googleapis.com/token',
    http_build_query([
      'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      'assertion'  => $jwt,
    ]),
    ['Content-Type: application/x-www-form-urlencoded']
  );
  $j = json_decode($body, true);
  if ($code !== 200 || empty($j['access_token'])) {
    $msg = $j['error_description'] ?? $j['error'] ?? ('رمز الاستجابة ' . $code);
    throw new RuntimeException('تعذّر تسجيل الدخول إلى جوجل: ' . $msg);
  }
  $token = $j['access_token'];
  @mkdir(__DIR__ . '/data', 0755, true);
  @file_put_contents($cacheFile, json_encode(['token' => $token, 'exp' => $now + (int)($j['expires_in'] ?? 3600)]), LOCK_EX);
  return $token;
}

function http_post(string $url, string $body, array $headers): array {
  $ch = curl_init($url);
  curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $body,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 20,
    CURLOPT_SSL_VERIFYPEER => true,
  ]);
  $res = curl_exec($ch);
  if ($res === false) { $e = curl_error($ch); curl_close($ch); throw new RuntimeException('خطأ شبكة أثناء الاتصال بجوجل: ' . $e); }
  $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);
  return [$res, $code];
}

// Run up to 5 reports in one round-trip (GA4 batchRunReports).
function ga_batch(string $propertyId, string $token, array $requests): array {
  $url = 'https://analyticsdata.googleapis.com/v1beta/properties/' . rawurlencode($propertyId) . ':batchRunReports';
  [$body, $code] = http_post($url, json_encode(['requests' => $requests]),
    ['Authorization: Bearer ' . $token, 'Content-Type: application/json']);
  $j = json_decode($body, true);
  if ($code !== 200) {
    $msg = $j['error']['message'] ?? ('رمز الاستجابة ' . $code);
    throw new RuntimeException('طلب البيانات فشل: ' . $msg);
  }
  return $j['reports'] ?? [];
}

// Report request builders --------------------------------------------------
function rpt(array $metrics, array $dims = [], array $extra = []): array {
  $r = ['dateRanges' => [['startDate' => '30daysAgo', 'endDate' => 'today']],
        'metrics' => array_map(fn($m) => ['name' => $m], $metrics)];
  if ($dims) $r['dimensions'] = array_map(fn($d) => ['name' => $d], $dims);
  return array_merge($r, $extra);
}
$ORDER_BY_FIRST_METRIC_DESC = fn(string $m) => ['orderBys' => [['metric' => ['metricName' => $m], 'desc' => true]]];

// Read helpers over a report result ---------------------------------------
function metric0(array $report, int $i = 0): float {
  return (float)($report['rows'][0]['metricValues'][$i]['value'] ?? 0);
}
function rows(array $report): array { return $report['rows'] ?? []; }
function dim(array $row, int $i = 0): string { return (string)($row['dimensionValues'][$i]['value'] ?? ''); }
function met(array $row, int $i = 0): float { return (float)($row['metricValues'][$i]['value'] ?? 0); }

if ($CONFIGURED) {
  try {
    $sa = json_decode($SA_RAW, true);
    if (!is_array($sa) || empty($sa['client_email']) || empty($sa['private_key'])) {
      throw new RuntimeException('ملف حساب الخدمة غير صالح — تأكّدي أنه ملف JSON الكامل الذي نزّلتِه من جوجل.');
    }
    if (!function_exists('curl_init')) throw new RuntimeException('إضافة cURL غير مفعّلة على الخادم — فعّليها من cPanel (PHP Extensions).');
    if (!function_exists('openssl_sign')) throw new RuntimeException('إضافة OpenSSL غير مفعّلة على الخادم.');

    $token = ga_access_token($sa);

    // Two batches (GA4 allows 5 reports per batch).
    $reqA = [
      'sum30'  => rpt(['screenPageViews', 'totalUsers', 'sessions', 'engagedSessions']),
      'today'  => rpt(['screenPageViews', 'totalUsers'], [], ['dateRanges' => [['startDate' => 'today', 'endDate' => 'today']]]),
      'sum7'   => rpt(['screenPageViews', 'totalUsers'], [], ['dateRanges' => [['startDate' => '7daysAgo', 'endDate' => 'today']]]),
      'trend'  => rpt(['screenPageViews'], ['date'], ['dateRanges' => [['startDate' => '29daysAgo', 'endDate' => 'today']], 'orderBys' => [['dimension' => ['dimensionName' => 'date']]]]),
      'pages'  => rpt(['screenPageViews'], ['pagePath'], array_merge($ORDER_BY_FIRST_METRIC_DESC('screenPageViews'), ['limit' => 12])),
    ];
    $reqB = [
      'events'   => rpt(['eventCount'], ['eventName'], array_merge($ORDER_BY_FIRST_METRIC_DESC('eventCount'), ['limit' => 25])),
      'countries'=> rpt(['totalUsers'], ['country'], array_merge($ORDER_BY_FIRST_METRIC_DESC('totalUsers'), ['limit' => 10])),
      'devices'  => rpt(['totalUsers'], ['deviceCategory'], $ORDER_BY_FIRST_METRIC_DESC('totalUsers')),
      'channels' => rpt(['sessions'], ['sessionDefaultChannelGroup'], array_merge($ORDER_BY_FIRST_METRIC_DESC('sessions'), ['limit' => 8])),
    ];
    $keysA = array_keys($reqA); $keysB = array_keys($reqB);
    $resA = ga_batch($PROPERTY_ID, $token, array_values($reqA));
    $resB = ga_batch($PROPERTY_ID, $token, array_values($reqB));
    foreach ($keysA as $i => $k) $DATA[$k] = $resA[$i] ?? [];
    foreach ($keysB as $i => $k) $DATA[$k] = $resB[$i] ?? [];
  } catch (Throwable $e) {
    $FATAL = $e->getMessage();
  }
}

// ---- friendly Arabic labels for our tracked custom events ----
$EVENT_LABELS = [
  'whatsapp_click' => 'نقرات واتساب',
  'inquiry_submit' => 'إرسال نموذج حجز',
  'cta_plan'       => 'زر «خطّط رحلتك»',
  'book_intent'    => 'نية الحجز (فتح الحجز)',
  'plan_click'     => 'زر التخطيط العائم',
];
$CONVERSION_EVENTS = ['whatsapp_click', 'inquiry_submit', 'book_intent', 'cta_plan', 'plan_click'];

function h($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
function n($v) { return number_format((float)$v); }
$eventCount = function (string $name) use ($DATA): int {
  foreach (rows($DATA['events'] ?? []) as $r) if (dim($r) === $name) return (int) met($r);
  return 0;
};

// summary figures
$v30 = $CONFIGURED && !$FATAL ? metric0($DATA['sum30'] ?? [], 0) : 0;
$u30 = $CONFIGURED && !$FATAL ? metric0($DATA['sum30'] ?? [], 1) : 0;
$s30 = $CONFIGURED && !$FATAL ? metric0($DATA['sum30'] ?? [], 2) : 0;
$eng30 = $CONFIGURED && !$FATAL ? metric0($DATA['sum30'] ?? [], 3) : 0;
$vToday = $CONFIGURED && !$FATAL ? metric0($DATA['today'] ?? [], 0) : 0;
$uToday = $CONFIGURED && !$FATAL ? metric0($DATA['today'] ?? [], 1) : 0;
$v7 = $CONFIGURED && !$FATAL ? metric0($DATA['sum7'] ?? [], 0) : 0;
$engRate = $s30 > 0 ? round($eng30 / $s30 * 100) : 0;
?><!doctype html>
<html lang="ar" dir="rtl"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>إحصائيات الموقع — Algeria Compass</title>
<style>
  :root{--emerald:#0B3D2E;--emerald2:#0A4D38;--gold:#B88A2E;--gold-bright:#D9B45A;--ink:#22303a;--dim:#6b7280;--line:#e7e2d6;--bg:#F7F1E6;--card:#fff}
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
  .bar-wrap{display:flex;align-items:flex-end;gap:2px;height:120px;margin-top:.4rem;padding-top:.5rem;border-top:1px solid var(--line)}
  .bar{flex:1;background:linear-gradient(180deg,var(--gold-bright),var(--gold));border-radius:2px 2px 0 0;min-height:2px;position:relative}
  .bar:hover{background:var(--emerald)}
  .bar em{position:absolute;top:-1.3rem;left:50%;transform:translateX(-50%);font-style:normal;font-size:.62rem;color:var(--dim);opacity:0;white-space:nowrap}
  .bar:hover em{opacity:1}
  .bar-x{display:flex;justify-content:space-between;color:var(--dim);font-size:.7rem;margin-top:.3rem}
  .two{display:grid;grid-template-columns:1fr 1fr;gap:1.1rem}
  .chip{display:inline-block;background:#f3ecdd;color:var(--gold);font-weight:700;border-radius:999px;padding:.15rem .6rem;font-size:.78rem}
  .note{background:#fff8ec;border:1px solid #ecdcb8;border-radius:10px;padding:.8rem 1rem;color:#6b5a34;font-size:.86rem;margin-top:1.1rem}
  ol.setup{line-height:1.9} ol.setup code{background:#0b3d2e;color:#e9dcbf;padding:.1rem .4rem;border-radius:5px;direction:ltr;display:inline-block;font-size:.85rem}
  .err{background:#fdecea;border:1px solid #f5c6c0;color:#8a2318;border-radius:10px;padding:1rem 1.1rem;margin-top:1rem}
  @media(max-width:760px){.tiles{grid-template-columns:1fr 1fr}.two{grid-template-columns:1fr}}
</style></head><body><div class="wrap">

<header class="top">
  <h1>📊 إحصائيات الموقع</h1>
  <span class="sub">Algeria Compass · آخر 30 يومًا · تحديث لحظي من Google Analytics</span>
</header>

<?php if (!$CONFIGURED): ?>
  <section>
    <h2>الإعداد لمرة واحدة</h2>
    <p>الصفحة جاهزة، وينقصها بس ربطها بحساب Google Analytics بتاعك عن طريق «حساب خدمة» (Service Account). اتبعي الخطوات دي مرة واحدة، وبعدها الأرقام هتظهر تلقائيًا:</p>
    <ol class="setup">
      <li>افتحي <b>Google Analytics ← الإدارة (Admin) ← إعدادات الموقع (Property Settings)</b> وانسخي <b>معرّف الموقع (Property ID)</b> — رقم زي <code>123456789</code> (مش الكود اللي بيبدأ بـ <code>G-</code>).</li>
      <li>افتحي <b>console.cloud.google.com</b> ← أنشئي مشروعًا (أو اختاري واحدًا) ← فعّلي واجهة <b>«Google Analytics Data API»</b>.</li>
      <li>من <b>IAM &amp; Admin ← Service Accounts</b> أنشئي حساب خدمة ← <b>Keys ← Add key ← JSON</b> ← نزّلي الملف.</li>
      <li>انسخي <b>إيميل حساب الخدمة</b> (شكله <code>...@...iam.gserviceaccount.com</code>)، وارجعي لـ GA4 ← <b>Property access management</b> وأضيفيه بصلاحية <b>Viewer</b>.</li>
      <li>ارفعي السرّين على الخادم <b>فوق</b> مجلد الموقع (يعني مش قابلين للوصول من النت):
        <br><code>~/.ga_property_id</code> فيه الرقم بس
        <br><code>~/.ga_service_account.json</code> ملف JSON اللي نزّلتيه، وبعدها <code>chmod 600 ~/.ga_service_account.json</code></li>
      <li>حدّثي الصفحة دي.</li>
    </ol>
    <div class="note">السرّان بيتقروا من خارج مجلد الموقع فقط، وعمرهم ما بيتبعتوا للمتصفح — الصفحة بتعرض الأرقام النهائية بس. قوليلي «جاهز» وأنا أديكي الأوامر الجاهزة للصق على الخادم.</div>
  </section>

<?php elseif ($FATAL): ?>
  <div class="err"><b>تعذّر جلب البيانات:</b><br><?= h($FATAL) ?></div>
  <div class="note">لو دي أول مرة: تأكّدي إن إيميل حساب الخدمة اتضاف كـ Viewer في GA4، وإن «Google Analytics Data API» مفعّلة، وإن <code>~/.ga_property_id</code> فيه الرقم الصحيح.</div>

<?php else: ?>
  <!-- summary tiles -->
  <div class="grid tiles">
    <div class="tile"><b><?= n($v30) ?></b><span>مشاهدات الصفحات (30 يوم)</span><span class="mini">اليوم: <?= n($vToday) ?></span></div>
    <div class="tile"><b><?= n($u30) ?></b><span>زوّار مختلفون (30 يوم)</span><span class="mini">اليوم: <?= n($uToday) ?></span></div>
    <div class="tile"><b><?= n($eventCount('whatsapp_click')) ?></b><span>نقرات واتساب (30 يوم)</span></div>
    <div class="tile"><b><?= n($eventCount('inquiry_submit') + $eventCount('book_intent')) ?></b><span>طلبات حجز / اهتمام (30 يوم)</span></div>
  </div>

  <!-- daily trend -->
  <section>
    <h2>المشاهدات اليومية (آخر 30 يومًا)</h2>
    <?php
      $trendRows = rows($DATA['trend'] ?? []);
      $max = 1; foreach ($trendRows as $r) $max = max($max, met($r));
      $firstD = $trendRows ? dim($trendRows[0]) : '';
      $lastD  = $trendRows ? dim($trendRows[count($trendRows) - 1]) : '';
      $mmdd = fn($d) => strlen($d) === 8 ? substr($d, 6, 2) . '/' . substr($d, 4, 2) : $d;
    ?>
    <div class="bar-wrap">
      <?php foreach ($trendRows as $r): $val = met($r);
        $hpc = max(2, round($val / $max * 100)); ?>
        <div class="bar" style="height:<?= $hpc ?>%"><em><?= h($mmdd(dim($r))) ?>: <?= n($val) ?></em></div>
      <?php endforeach; ?>
    </div>
    <div class="bar-x">
      <span><?= h($mmdd($firstD)) ?></span>
      <span>الإجمالي الأسبوعي: <?= n($v7) ?> · معدّل التفاعل: <?= $engRate ?>%</span>
      <span><?= h($mmdd($lastD)) ?></span>
    </div>
  </section>

  <div class="two">
    <!-- top pages -->
    <section>
      <h2>أكثر الصفحات مشاهدة</h2>
      <table><thead><tr><th>الصفحة</th><th>المشاهدات</th></tr></thead><tbody>
      <?php foreach (rows($DATA['pages'] ?? []) as $r): ?>
        <tr><td class="path"><?= h(dim($r)) ?></td><td class="num"><?= n(met($r)) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
    </section>

    <!-- key interactions -->
    <section>
      <h2>التفاعلات المهمّة</h2>
      <table><thead><tr><th>الحدث</th><th>عدد المرات</th></tr></thead><tbody>
      <?php foreach ($CONVERSION_EVENTS as $ev): $c = $eventCount($ev); ?>
        <tr><td><?= h($EVENT_LABELS[$ev] ?? $ev) ?></td><td class="num"><?= n($c) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
      <p style="color:var(--dim);font-size:.78rem;margin:.7rem 0 0">هذه هي الأحداث التي يتتبّعها الموقع فعليًا: نقرات واتساب، إرسال النماذج، وأزرار التخطيط والحجز.</p>
    </section>

    <!-- countries -->
    <section>
      <h2>الدول</h2>
      <table><thead><tr><th>الدولة</th><th>الزوّار</th></tr></thead><tbody>
      <?php foreach (rows($DATA['countries'] ?? []) as $r): ?>
        <tr><td><?= h(dim($r)) ?></td><td class="num"><?= n(met($r)) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
    </section>

    <!-- sources + devices -->
    <section>
      <h2>مصادر الزيارات</h2>
      <table><thead><tr><th>المصدر</th><th>الجلسات</th></tr></thead><tbody>
      <?php foreach (rows($DATA['channels'] ?? []) as $r): ?>
        <tr><td><?= h(dim($r)) ?></td><td class="num"><?= n(met($r)) ?></td></tr>
      <?php endforeach; ?>
      </tbody></table>
      <h2 style="margin-top:1.1rem">الأجهزة</h2>
      <p>
      <?php foreach (rows($DATA['devices'] ?? []) as $r):
        $dev = ['mobile'=>'موبايل','desktop'=>'كمبيوتر','tablet'=>'تابلت'][dim($r)] ?? dim($r); ?>
        <span class="chip"><?= h($dev) ?>: <?= n(met($r)) ?></span>
      <?php endforeach; ?>
      </p>
    </section>
  </div>

  <div class="note">الأرقام حيّة من Google Analytics 4 وتخصّ آخر 30 يومًا (بعض القيم قد تتأخر حتى 24–48 ساعة كالمعتاد في GA4). هذه الصفحة مخفية وغير مفهرسة؛ لإضافة كلمة مرور لاحقًا، الأمر يستغرق دقيقة.</div>
<?php endif; ?>

</div></body></html>
