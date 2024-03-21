<?php

$funzione = $_POST['funzione'];
$attributo = $_POST['attributo'];

if ($funzione == 'caricalistacartelle')
    $percorso = $_POST['percorso'];
    $listafile = glob("../assets/immagini/icone/*.*");
    echo json_encode($listafile);

?>
