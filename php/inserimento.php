<?php
require_once("configurazione.php");

$sql = $_POST['sql'];

if($result = $connessione->query($sql) === true){
    
    $id = $connessione->insert_id;
    
    $data = [
        "messaggio" => "ELEMENTO INSERITO CON SUCESSO: { QUERY: '$sql' }",
        "id" => $id,
        "response" => true
    ];
    echo json_encode($data); 
    
}else{
    $data = [
        "messaggio" => "ERRORE: { QUERY: '$sql' }\n".$connessione->error,
        "response" => false
   ];
   echo json_encode($data);
   }

?>