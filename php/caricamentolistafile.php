<?php

$percorso = $_POST['percorso'];
$listafile = glob("../assets/immagini/icone/*.*");
echo json_encode($listafile);

?>
