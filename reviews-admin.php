<?php
// Algeria Compass — review moderation (simple admin).
// ─────────────────────────────────────────────────────────────────────────
//  HOW TO USE
//  1. Change ADMIN_PASS below to your own secret (then save & re-upload).
//  2. Visit https://algeriacompass.com/reviews-admin.php and log in.
//  3. Each pending review has [Approve] (publishes it — it then appears on the
//     site within a minute) and [Reject] (deletes it). Approved reviews are
//     listed too, each with [Remove].
//  Nothing is ever published automatically — only what you Approve here.
// ─────────────────────────────────────────────────────────────────────────
const ADMIN_PASS = 'CHANGE-ME-please';            // <-- set your own password

$PENDING  = __DIR__ . '/data/reviews-pending.jsonl';
$APPROVED = __DIR__ . '/reviews-approved.json';

session_start();

// --- auth ---
if (isset($_POST['login'])) {
  if (hash_equals(ADMIN_PASS, (string)($_POST['pass'] ?? ''))) {
    $_SESSION['rev_ok'] = true;
    $_SESSION['tok'] = bin2hex(random_bytes(16));
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
  <div class="card"><form method="post">
    <p><strong>Enter the admin password</strong></p>
    <input type="password" name="pass" autofocus placeholder="password">
    <p><button class="ok" name="login" value="1">Log in</button></p>
    <p class="muted">Set your password in <code>reviews-admin.php</code> (the <code>ADMIN_PASS</code> line).</p>
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
