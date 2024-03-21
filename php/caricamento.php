<?php


require_once("configurazione.php");
$opzione = $_POST['opzione'];
//$opzione = "albero";
//$opzione = "selezione";

if($opzione === "albero"){
   $padre = $_POST['padre']; 
   echo json_encode(costruzione($padre)); 
}

if($opzione === "selezione"){
  $sql = $_POST['sql'];
  if($result = $connessione->query($sql)){
  
      if($result->num_rows > 0){
  
          $data = [];
          while($row = $result->fetch_array(MYSQLI_ASSOC)){
              array_push($data, $row);
          }
  
          echo json_encode($data);
      }else {
          echo json_encode($data);
            }
  }else{
          echo "Errore durante creazione tabella: ".$connessione->error;
       }
}


$connessione->close();
function costruzione($padre) {
  
  $sql = "SELECT * FROM alyocontenitori WHERE id_padre = ".$padre." ORDER BY posizione";
  
  if($result = $GLOBALS['connessione']->query($sql)){
          
    if($result->num_rows > 0){
  
        $data = [];
        while($row = $result->fetch_array(MYSQLI_ASSOC)){

          
          $campo = [];
          $campo['id']               = $row['id'];
          $campo['posizione']        = $row['posizione'];
          $campo['classe']           = $row['classe'];
          $campo['tipo']             = $row['tipo'];
          $campo['id_componente']    = $row['id_componente'];
          $campo['livello']          = $row['livello'];
          $campo['id_padre']         = $row['id_padre'];

          $tabella = "";

          if($campo['tipo'] == 'ICO'){$tabella = "alyoicone";       }

          if($campo['tipo'] == 'TXT'){$tabella = "alyotesti";       }
          
          if($campo['tipo'] == 'TXA'){$tabella = "alyotestiarea";   }

          if($campo['tipo'] == 'LNK'){$tabella = "alyolink";        }
          
          if($campo['tipo'] == 'BTN'){$tabella = "alyobottoni";        }

          if($campo['tipo'] == 'IMG'){$tabella = "alyoimmagini";    }

          if($campo['tipo'] != 'CNT'){
            $sql2 = "SELECT * FROM ".$tabella." WHERE id = ".$row['id_componente']; 
            if($risultati2 = $GLOBALS['connessione']->query($sql2)){
              $data2 = [];
              if($risultati2->num_rows > 0){
                while($colonna2 = $risultati2->fetch_array(MYSQLI_ASSOC)){
                  $campo['componente'] = $colonna2;
                }
              }
            }
          }

          if($campo['tipo'] == 'CNT' || $campo['tipo'] == 'LNK' || $campo['tipo'] == 'BTN'){
            $campo['lista_componenti'] = costruzione($row['id']);
          }

          array_push($data, $campo);
        }
  
        return $data;
    }else {
        return [];
          }
  }else{
        return [];
     }

}


?>