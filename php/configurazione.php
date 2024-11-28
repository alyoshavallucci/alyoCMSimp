<?php

 $host = "31.11.39.146";
 $user = "Sql1752471";
 $password = "Alyoshavallucci44!";
 $database = "Sql1752471_1";

 $connessione = new mysqli($host,$user,$password,$database);

 if($connessione === false){
     die("errore di connessione: ".$connessione->connect_error);
 }

?>