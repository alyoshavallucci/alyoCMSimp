<?php

$funzione   = $_POST['funzione'];


if ($funzione == 'caricalistafilecartelle'){
    

    $percorso = $_POST['percorso'];
    $estensioni = $_POST['estensioni'];
    
    $data = [];
    
    $estensioni = explode(",", $estensioni);

    foreach(glob($percorso.'*') as $file){
       $estensione = pathinfo($file, PATHINFO_EXTENSION);
       if(in_array($estensione, $estensioni)){
            array_push($data, $file);
       }
       if(is_dir($file)) { 
   	    array_push($data, $file);
       }
    }
    
    echo json_encode($data);
}

if ($funzione == 'caricalistafilecartellealbero'){
    
    $percorsi   = $_POST['percorsi'];
    $estensioni = $_POST['estensioni'];
    
    $data = [];
    $percorsi = explode(",", $percorsi);
    
    foreach($percorsi as $percorso){
        $campo = [];
        $campo['nome'] = $percorso;
        $campo['lista'] = costruzione($percorso);
        array_push($data, $campo);
    }
    echo json_encode($data); 
    
}


if ($funzione == 'inserimento'){   
    

    $percorso = $_POST['percorso'];
    $nuovofile = $_POST['nuovofile'];

    if (false === rename($_FILES['file']['tmp_name'], $percorso.$nuovofile)) {
        $log .= "[FILE: ".$percorso.$nuovofile." NON INSERITO CON SUCESSO ]";
    }
    else{$log .= "[FILE: ".$percorso.$nuovofile." INSERITO CON SUCESSO ]";}
    
    $data = [
         "messaggio" => "[LOG = $log]\n'",
         "risposta" => true
    ];
    echo json_encode($data);
}

    
function costruzione($percorso) {

    $data = [];
   
    $estensioni = explode(",", $GLOBALS["estensioni"]);
 
    foreach(glob($percorso.'*') as $file){
       $estensione = pathinfo($file, PATHINFO_EXTENSION);
       $campo = [];
       if(in_array($estensione, $estensioni)){
          $campo['nome'] = $percorso;
          array_push($data, $file);
       }
       if(is_dir($file)) { 
          $campo['nome'] = $file."/";
          $campo['lista'] = costruzione($file."/");
   	      array_push($data, $campo);
       }
    }
    return $data;
}


?>