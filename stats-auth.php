<?php
// Password hash for stats.php (bcrypt). Never the password itself.
// Served by PHP, so a browser requesting this file gets an empty page.
// To change the password, replace the string below with the output of:
//   php -r "echo password_hash('new-password', PASSWORD_BCRYPT, ['cost'=>12]), PHP_EOL;"
// An environment variable STATS_HASH or a file ../.stats_hash (above the
// web root) takes precedence if present.
return '$2y$12$FU.Ewl2TpftKOaXjilCvuOvBfiqXRpScs6VbMWLs7o4hkweASN8t6';
