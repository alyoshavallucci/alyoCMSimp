<?php

require_once("configurazione.php");

$tabella = $_POST['tabella'];
$attributo = $_POST['attributo'];
$valore = $_POST['valore'];

$sql = "SELECT * FROM $tabella WHERE $attributo LIKE '%$valore%' ";


if ($result = $connessione->query($sql)) {

             if($result->num_rows > 0)
             {
                 $data = [];
                 while($row = $result->fetch_array(MYSQLI_ASSOC)){

                    if($tabella == "brano"){
                      $tmp;
                      $tmp['id']     = $row['id'];
                      $tmp['titolo'] = $row['titolo'];
                      $tmp['testo']  = $row['testo'];
                      $tmp['nuovo']  = $row['nuovo'];
                    }

                    if($tabella == "frase"){
                      $tmp;
                      $tmp['id']   = $row['id'];
                      $tmp['testo'] = $row['testo'];
                    }

                    array_push($data, $tmp);
                 }
                 echo json_encode($data);
             }
             else
             {
                $data = [
                  "messaggio" => "ERRORE: [ tabella: $tabella, attributo = $attributo, valore = $valore ] \n".$connessione->error,
                  "response" => false
                ];
                 echo json_encode($data);
             }

 }
 else {
     $data = [
         "messaggio" => "ERRORE: [ tabella: $tabella, attributo = $attributo, valore = $valore ] \n".$connessione->error,
         "response" => false
     ];
     echo json_encode($data);
 }

?>
