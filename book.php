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

 $data = '<tr>
            <td>' . $_POST['task'] . '</td>
            <td>' . $_POST['from'] . '</td>
            <td>' . $_POST['to'] . '</td>
            <td>' . $_POST['isDone']. '</td>
          </tr>';

  $pusher->trigger('app', 'on-click', $data);
?>