<?php
    require_once("configurazione.php");
    
    $messaggio = $_POST['messaggio'];
    $lista_sql_ins = explode(";", $_POST['sql_ins']);
    $risultato = true;

    foreach($lista_sql_ins as $sql){
        if($result = $connessione->query($sql) === false){
            $risultato = false;
        }
    }

    $data = [
        "risultato" => $risultato,
        $risultato ? "👌🏻 ":"ERRORE: " => $risultato ? $messaggio:$connessione->error,
        "sql ins" => $lista_sql_ins,
    ];
    echo json_encode($data);

?>