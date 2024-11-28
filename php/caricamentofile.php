<?php
    $percorso = $_POST['percorso'];
    $nuovo_file = $_POST['nuovo_file'];
    $vecchio_file = $_POST['vecchio_file'];
    
    $log = "";
    if (!is_dir($percorso)) {
        mkdir($percorso, 0777, true);
        $log .= "[CARTELLA ".$percorso." CREATA]";
    }
    
    $trovato = false;
    if (true === file_exists($percorso.$vecchio_file)) {
        if (false === unlink($percorso.$vecchio_file)) {
            $log .= "[VECCHIO FILE: ".$vecchio_file." NON CANCELLATO]";
        }
        else{$log .= "[VECCHIO FILE: ".$vecchio_file." CANCELLATO]";}
    }
    

    if (false === rename($_FILES['file']['tmp_name'], $percorso.$nuovo_file)) {
        $log .= "[NUOVO FILE: ".$nuovo_file." NON SPOSTATO NELLA CARTELLA".$percorso."]";
    }
    else{$log .= "[NUOVO FILE: ".$nuovo_file." SPOSTATO NELLA CARTELLA".$percorso."]";}
    
    $data = [
         "messaggio" => "[LOG = $log]\n'",
         "risposta" => true
    ];
    echo json_encode($data);

?>