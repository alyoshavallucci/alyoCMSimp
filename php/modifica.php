<?php
    require_once("configurazione.php");
    
    $sql = $_POST['sql'];
    
    $risposta = $connessione->query($sql);
    $data = [
        "stato"     => $risposta ? "ELEMENTO MODIFICATO CON SUCESSO":"ERRORE: ".$connessione->error,
        "sql" => $sql,
        "risposta"  => $risposta
    ];
    echo json_encode($data);

?>