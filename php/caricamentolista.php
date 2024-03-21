<?php

$percorso = $_POST['percorso'];

$path = '/path/to/directory';
 
$files = array_diff(scandir($path), array('.', '..'));
print_r($files);


$data = [
     "messaggio" => "[LOG = $files]\n'",
     "response" => true
];
echo json_encode($data);

?>
