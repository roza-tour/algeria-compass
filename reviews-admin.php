<?php
// Algeria Compass — review moderation (simple admin).
// ─────────────────────────────────────────────────────────────────────────
//  HOW TO USE
//  1. Create your password HASH (never store the plaintext), once:
//        php -r "echo password_hash('your-strong-pass', PASSWORD_DEFAULT), PHP_EOL;"
//     Put the printed hash in ONE of:
//        • the REVIEWS_ADMIN_HASH environment variable, or
//        • a file  ../.reviews_admin_hash  (ABOVE public_html — not web-served), or
//        • data/.admin_hash  (already blocked from the web by data/.htaccess).
//     Until a hash is set, login is disabled (fail-closed).
//  2. Visit https://algeriacompass.com/reviews-admin.php and log in.
//  3. Each pending review has [Approve] (publishes it — it then appears on the
//     site within a minute) and [Reject] (deletes it). Approved reviews are
//     listed too, each with [Remove].
//  Nothing is ever published automatically — only what you Approve here.
// ─────────────────────────────────────────────────────────────────────────

$PENDING  = __DIR__ . '/data/reviews-pending.jsonl';
$APPROVED = __DIR__ . '/reviews-approved.json';

// Admin password hash — read from env or a file OUTSIDE the tree. Never hardcoded.
function admin_hash(): string {
  $env = getenv('REVIEWS_ADMIN_HASH');
  if (is_string($env) && $env !== '') return $env;
  foreach ([__DIR__ . '/../.reviews_admin_hash', __DIR__ . '/data/.admin_hash'] as $f) {
    if (is_file($f)) { $h = trim((string) file_get_contents($f)); if ($h !== '') return $h; }
  }
  return '';
}

// Per-IP login throttle (brute-force guard): 5 attempts / 15 min.
function login_file(): string {
  return __DIR__ . '/data/.login-' . md5(substr($_SERVER['REMOTE_ADDR'] ?? '0', 0, 45)) . '.json';
}
function login_allowed(): bool {
  $now = time(); $f = login_file();
  $hits = is_file($f) ? (json_decode((string) @file_get_contents($f), true) ?: []) : [];
  $hits = array_filter($hits, fn($t) => $t > $now - 900);
  return count($hits) < 5;
}
function login_record_fail(): void {
  $f = login_file(); $now = time();
  $hits = is_file($f) ? (json_decode((string) @file_get_contents($f), true) ?: []) : [];
  $hits = array_values(array_filter($hits, fn($t) => $t > $now - 900));
  $hits[] = $now;
  if (!is_dir(__DIR__ . '/data')) @mkdir(__DIR__ . '/data', 0755, true);
  @file_put_contents($f, json_encode($hits), LOCK_EX);
}

// Harden the session cookie BEFORE starting the session.
session_set_cookie_params([
  'lifetime' => 0, 'path' => '/', 'secure' => true,
  'httponly' => true, 'samesite' => 'Strict',
]);
session_start();
if (empty($_SESSION['login_tok'])) $_SESSION['login_tok'] = bin2hex(random_bytes(16));

// --- auth ---
if (isset($_POST['login'])) {
  $hash  = admin_hash();
  $tokOk = hash_equals($_SESSION['login_tok'] ?? '', (string)($_POST['ltok'] ?? ''));
  if ($hash === '') {
    $_SESSION['login_err'] = 'Admin login is not configured on the server yet.';
  } elseif ($tokOk && login_allowed() && password_verify((string)($_POST['pass'] ?? ''), $hash)) {
    session_regenerate_id(true);            // prevent session fixation
    $_SESSION['rev_ok'] = true;
    $_SESSION['tok'] = bin2hex(random_bytes(16));
  } else {
    login_record_fail();
    $_SESSION['login_err'] = login_allowed() ? 'Login failed.' : 'Too many attempts — wait a few minutes.';
  }
  header('Location: reviews-admin.php'); exit;
}
if (isset($_GET['logout'])) { session_destroy(); header('Location: reviews-admin.php'); exit; }
$authed = !empty($_SESSION['rev_ok']);

function h($s){ return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
function read_pending($f){ $out=[]; if(is_file($f)){ foreach(file($f, FILE_IGNORE_NEW_LINES|FILE_SKIP_EMPTY_LINES) as $l){ $j=json_decode($l,true); if($j) $out[]=$j; } } return $out; }
function read_approved($f){ if(is_file($f)){ $j=json_decode(file_get_contents($f),true); if(isset($j['reviews'])) return $j; } return ['updated'=>null,'reviews'=>[]]; }
function write_approved($f,$data){ $data['updated']=gmdate('c'); file_put_contents($f, json_encode($data, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES)); }
function write_pending($f,$rows){ $out=''; foreach($rows as $r){ $out.=json_encode($r, JSON_UNESCAPED_UNICODE)."\n"; } file_put_contents($f,$out, LOCK_EX); }

// --- actions ---
if ($authed && $_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['action'])) {
  if (!hash_equals($_SESSION['tok'] ?? '', $_POST['tok'] ?? '')) { http_response_code(400); exit('bad token'); }
  $id = $_POST['id'] ?? '';
  $pending = read_pending($PENDING);
  $approved = read_approved($APPROVED);

  if ($_POST['action']==='approve') {
    foreach ($pending as $k=>$r) if ($r['id']===$id) {
      $approved['reviews'][] = [
        'id'=>$r['id'], 'name'=>$r['name'], 'country'=>$r['country'],
        'tour'=>$r['tour'], 'rating'=>(int)$r['rating'], 'comment'=>$r['comment'],
        'date'=>$r['date'],
      ];
      unset($pending[$k]); break;
    }
    write_approved($APPROVED, $approved);
    write_pending($PENDING, array_values($pending));
  } elseif ($_POST['action']==='reject') {
    $pending = array_values(array_filter($pending, fn($r)=>$r['id']!==$id));
    write_pending($PENDING, $pending);
  } elseif ($_POST['action']==='remove') {
    $approved['reviews'] = array_values(array_filter($approved['reviews'], fn($r)=>$r['id']!==$id));
    write_approved($APPROVED, $approved);
  }
  header('Location: reviews-admin.php'); exit;
}

$pending  = $authed ? read_pending($PENDING) : [];
$approved = $authed ? read_approved($APPROVED) : ['reviews'=>[]];
$tok = $_SESSION['tok'] ?? '';
$stars = fn($n)=>str_repeat('★',(int)$n).str_repeat('☆',5-(int)$n);
?><!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow">
<title>Review moderation — Algeria Compass</title>
<style>
  body{font:16px/1.5 system-ui,Segoe UI,sans-serif;background:#0B3D2E;color:#13231d;margin:0}
  .wrap{max-width:780px;margin:0 auto;padding:1.5rem}
  h1{color:#fff;font-size:1.3rem} a{color:#C19333}
  .card{background:#fff;border-radius:12px;padding:1rem 1.1rem;margin:0 0 .9rem;box-shadow:0 4px 14px rgba(0,0,0,.18)}
  .stars{color:#C19333;letter-spacing:2px} .muted{color:#6b6b63;font-size:.85rem}
  .row{display:flex;gap:.6rem;align-items:center;flex-wrap:wrap;justify-content:space-between}
  button{font:inherit;border:0;border-radius:8px;padding:.5rem .9rem;cursor:pointer;font-weight:700}
  .ok{background:#1c7a4f;color:#fff}.no{background:#b23a2a;color:#fff}.rm{background:#eee;color:#333}
  input[type=password]{font:inherit;padding:.6rem;border:1px solid #ccc;border-radius:8px;width:100%;max-width:280px}
  .empty{color:#fff;opacity:.8} .sec{color:#fff;margin:1.4rem 0 .6rem;font-size:1.05rem;border-top:1px solid rgba(255,255,255,.2);padding-top:1rem}
  form.inline{display:inline}
</style></head><body><div class="wrap">
<h1>Review moderation</h1>
<?php if(!$authed): ?>
  <?php $err = $_SESSION['login_err'] ?? ''; unset($_SESSION['login_err']); ?>
  <div class="card"><form method="post">
    <p><strong>Enter the admin password</strong></p>
    <?php if($err): ?><p class="muted" role="alert" style="color:#b23a2a"><?=h($err)?></p><?php endif; ?>
    <input type="hidden" name="ltok" value="<?=h($_SESSION['login_tok'] ?? '')?>">
    <input type="password" name="pass" autofocus placeholder="password" autocomplete="current-password">
    <p><button class="ok" name="login" value="1">Log in</button></p>
  </form></div>
<?php else: ?>
  <p><a href="?logout=1">Log out</a></p>
  <div class="sec">Pending — awaiting your approval (<?=count($pending)?>)</div>
  <?php if(!$pending): ?><p class="empty">No pending reviews right now.</p><?php endif; ?>
  <?php foreach($pending as $r): ?>
    <div class="card">
      <div class="row"><strong><?=h($r['name'])?></strong><span class="stars"><?=$stars($r['rating'])?></span></div>
      <div class="muted"><?=h($r['country'])?> · <?=h($r['tour'])?> · <?=h($r['date'])?></div>
      <p><?=nl2br(h($r['comment']))?></p>
      <?php // private verification contact — admin-eyes only, never copied into reviews-approved.json
        $em = trim((string)($r['email'] ?? '')); $wa = trim((string)($r['whatsapp'] ?? '')); ?>
      <div class="muted">Verify via:
        <?php if($em): ?> <a href="mailto:<?=h($em)?>"><?=h($em)?></a><?php endif; ?>
        <?php if($em && $wa): ?> · <?php endif; ?>
        <?php if($wa): ?> <a href="https://wa.me/<?=h(preg_replace('/\D/','',$wa))?>" target="_blank" rel="noopener">WhatsApp <?=h($wa)?></a><?php endif; ?>
        <?php if(!$em && !$wa): ?> — (none given)<?php endif; ?>
      </div>
      <div class="row">
        <span class="muted">IP <?=h($r['ip']??'')?></span>
        <span>
          <form class="inline" method="post"><input type="hidden" name="tok" value="<?=h($tok)?>"><input type="hidden" name="id" value="<?=h($r['id'])?>"><button class="ok" name="action" value="approve">Approve</button></form>
          <form class="inline" method="post" onsubmit="return confirm('Reject and delete this review?')"><input type="hidden" name="tok" value="<?=h($tok)?>"><input type="hidden" name="id" value="<?=h($r['id'])?>"><button class="no" name="action" value="reject">Reject</button></form>
        </span>
      </div>
    </div>
  <?php endforeach; ?>

  <div class="sec">Published — live on the site (<?=count($approved['reviews'])?>)</div>
  <?php if(!$approved['reviews']): ?><p class="empty">Nothing published yet.</p><?php endif; ?>
  <?php foreach($approved['reviews'] as $r): ?>
    <div class="card">
      <div class="row"><strong><?=h($r['name'])?></strong><span class="stars"><?=$stars($r['rating'])?></span></div>
      <div class="muted"><?=h($r['country'])?> · <?=h($r['tour'])?> · <?=h($r['date'])?></div>
      <p><?=nl2br(h($r['comment']))?></p>
      <form class="inline" method="post" onsubmit="return confirm('Remove this published review?')"><input type="hidden" name="tok" value="<?=h($tok)?>"><input type="hidden" name="id" value="<?=h($r['id'])?>"><button class="rm" name="action" value="remove">Remove</button></form>
    </div>
  <?php endforeach; ?>
<?php endif; ?>
</div></body></html>
