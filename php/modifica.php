<?php
require_once("configurazione.php");

$sql = $_POST['sql'];

if($connessione->query($sql) === true){
    $data = [
         "messaggio" => "ELEMENTO MODIFICATO CON SUCESSO: [SQL = $sql]\n'",
         "response" => true
    ];
    echo json_encode($data);
}else{
    $data = [
        "messaggio" => "ERRORE:  [SQL = $sql]\n".$connessione->error,
        "response" => false
   ];
   echo json_encode($data);
 }

?>
