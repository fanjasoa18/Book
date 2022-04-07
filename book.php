<?php
  require __DIR__ . '/vendor/autoload.php';

  $options = array(
    'cluster' => 'ap2',
    'useTLS' => true
  );
  $pusher = new Pusher\Pusher(
    '2c1bfaa7922092be00bb',
    'e539015641a19d680534',
    '1376546',
    $options
  );

 $text = $_POST['text'];

  $pusher->trigger('app', 'on-click', $text);
?>