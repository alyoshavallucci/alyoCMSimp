<?php

    $cfg['Servers'][$i]['host'] = '127.0.0.1:3307';
    $host = "89.46.111.114";
    $user = "Sql1677870";
    $password = "Alyosha44!";
    $database = "Sql1677870_1";

    $connessione = new mysqli($host,$user,$password,$database);

    if($connessione === false){
        die("errore di connessione: ".$connessione->connect_error);
    }

    echo "CONESSIONE AVVENUTA CON SUCESSO ".$connessione;

    $connessione->close(); 

?>
