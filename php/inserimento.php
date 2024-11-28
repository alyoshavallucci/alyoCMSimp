<?php

require_once("caricamento.php");

$funzione = $_POST['funzione'];
$lista         = [];
$risultato     = true;
$lista_sql_vis = "";


if($funzione != "COPIA-NUOVI-COLLEGAMENTI-ALBERO" && $funzione != "COPIA-NUOVI-COLLEGAMENTI-COMPONENTE-ESISTENTE-ALBERO"){
    $risultato = creazione_elementi();
}

if($risultato && $funzione == "eventi"){
    $lista = ritorna_singolo_evento($_POST['sql_vis']); 
}

if($risultato && $funzione == "azioni"){
    $lista = ritorna_singolo_azione($_POST['sql_vis']); 
}

if($risultato && $funzione == "impostazioni"){
    $lista_sql_vis = $_POST['sql_vis'];
    $l = explode(";", $_POST['sql_vis']);
    $lista_sql = [];
    $lista_sql['tabellacollegamenti'] = $l[0];
    $lista_sql['tabella'] = $l[1];
    $lista = ritorna_singolo_impostazione($lista_sql,null); 
}

if($risultato && $funzione == "classi"){
    $lista_sql_vis = $_POST['sql_vis'];
    $l = explode(";", $_POST['sql_vis']);
    $lista_sql = [];
    $lista_sql['tabellacollegamenti'] = $l[0];
    $lista_sql['tabella'] = $l[1];
    $lista = singola_classe($lista_sql); 
}

if($risultato && $funzione == "COMPONENTI"){
    $lista_sql_vis = $_POST['sql'];
    $elemento = ritorna_elemento($_POST['sql']);
    $lista = albero_componenti($elemento['id'],$elemento['id']); 
}

if($risultato && $funzione == "GRUPPI-CLASSI-COMPONENTE"){
 
    $lista_sql['tabellacollegamenticomponente'] = explode(";", $_POST['sql_vis'])[0];
    $lista_sql['tabellacollegamenti']           = explode(";", $_POST['sql_vis'])[1];
    $lista_sql['tabellagruppiclassi']           = explode(";", $_POST['sql_vis'])[2];
    $lista_sql['tabellaclassi']                 = explode(";", $_POST['sql_vis'])[3];
    
    $lista_sql_vis = $_POST['sql_vis'];
    $lista = ritorna_singolo_gruppo($lista_sql);
}

if($funzione == "COPIA-NUOVI-COLLEGAMENTI-COMPONENTE-ESISTENTE-ALBERO"){
    $elemento = albero_componenti($_POST['id'],$_POST['id']);
    //$lista = $_POST['id_padre'];
    $id = crea_copia_collegamento_albero($elemento,$_POST['id_padre']);
    $lista = albero_componenti($id,$id);
}

if($funzione == "COPIA-NUOVI-COLLEGAMENTI-ALBERO"){
    
    $elemento = albero_componenti($_POST['id'],$_POST['id']);
    //$lista = $elemento;
    $id = crea_collegamenti_albero($elemento,$_POST['id_padre']);
    $lista = albero_componenti($id,$id);
}

$data = [
            "risultato"                => $risultato,
            $risultato ? "👌🏻":"ERRORE" => $risultato ? "ELEMENTI INSERITO CON SUCESSO":$connessione->error,
            "elemento"                 => $risultato ? $lista:[],
            "sql ins"                  => $lista_sql_ins,
            "sql vis"                  => $lista_sql_vis,
            "funzione"                 => $funzione
        ];

echo json_encode($data);

function crea_collegamenti_albero($elemento,$id_padre){
    
    $risultato = true;

    $tabella = "";
    $tabella .= $elemento['tipo'] == 'CNT' ? "alyocontenitori":"";
    $tabella .= $elemento['tipo'] == 'ICO' ? "alyoicone":""; 
    $tabella .= $elemento['tipo'] == 'TXT' ? "alyotesti":""; 
    $tabella .= $elemento['tipo'] == 'TXA' ? "alyotestiarea":""; 
    $tabella .= $elemento['tipo'] == 'LNK' ? "alyolink":"";    
    $tabella .= $elemento['tipo'] == 'BTN' ? "alyobottoni":""; 
    $tabella .= $elemento['tipo'] == 'IMG' ? "alyoimmagini":"";
    $tabella .= $elemento['tipo'] == 'MCS' ? "alyomodalitabiancascura":"";

    $sql_ins = "";
    $sql_ins .= $elemento['tipo'] == 'CNT' ? "INSERT INTO alyocontenitori     ()      VALUES (); ":"";
    $sql_ins .= $elemento['tipo'] == 'ICO' ? "INSERT INTO alyoicone     (valore)      VALUES (''); ":""; 
    $sql_ins .= $elemento['tipo'] == 'TXT' ? "INSERT INTO alyotesti     (valore)      VALUES (''); ":""; 
    $sql_ins .= $elemento['tipo'] == 'TXA' ? "INSERT INTO alyotestiarea (valore)      VALUES (''); ":""; 
    $sql_ins .= $elemento['tipo'] == 'LNK' ? "INSERT INTO alyolink      (valore,tipo) VALUES ('',''); ":"";    
    $sql_ins .= $elemento['tipo'] == 'BTN' ? "INSERT INTO alyobottoni   ()            VALUES (); ":""; 
    $sql_ins .= $elemento['tipo'] == 'IMG' ? "INSERT INTO alyoimmagini  (valore,tipo) VALUES ('',''); ":"";
    $sql_ins .= $elemento['tipo'] == 'MCS' ? "INSERT INTO alyomodalitabiancascura  () VALUES (); ":"";
    
    $sql_ins .= "INSERT INTO alyocollegamenti (tipo,id_componente,id_padre,posizione) ".
                "SELECT '".$elemento['tipo']."',MAX(cmp.id),'".$id_padre."',CASE WHEN EXISTS(SELECT * FROM alyocollegamenti WHERE id_padre = '".$id_padre."') THEN (SELECT Max(posizione) FROM alyocollegamenti WHERE id_padre = '".$id_padre."')+1 ELSE 0 END AS posizione FROM ".$tabella." AS cmp";
    
    $sql_ins = explode(";", $sql_ins);

    foreach($sql_ins as $sql){
        if($result = $GLOBALS['connessione']->query($sql) === false){
            $risultato = false;
        }
    } 

    $sql = "SELECT * FROM alyocollegamenti ORDER BY id DESC LIMIT 1";
    $nuovo_collegamento = ritorna_elemento($sql);
    
    foreach($elemento['classi'] as $collegamnetoclasse){

        $sql2 = "";
        $sql2 = "INSERT INTO alyocollegamentigruppiclassicomponente (tipo,id_componente,id_padre,posizione) ".
                "SELECT '".$collegamnetoclasse['tipo']."',".$collegamnetoclasse['componente']['id'].",'".$nuovo_collegamento['tipo'].$nuovo_collegamento['id_componente']."',CASE WHEN EXISTS(SELECT * FROM alyocollegamentigruppiclassicomponente WHERE id_padre = '".$nuovo_collegamento['tipo'].$nuovo_collegamento['id_componente']."') THEN (SELECT Max(posizione) FROM alyocollegamentigruppiclassicomponente WHERE id_padre = '".$nuovo_collegamento['tipo'].$nuovo_collegamento['id_componente']."')+1 ELSE 0 END AS posizione";
        
        if($result = $GLOBALS['connessione']->query($sql2) === false){
            $risultato = false;
        }
    }
    

    if($risultato && ($elemento['tipo'] == "CNT" || $elemento['tipo'] == "BTN" || $elemento['tipo'] == "LNK")){
        foreach($elemento['lista'] as $elemento2){
            $risultato = crea_collegamenti_albero($elemento2,$nuovo_collegamento['tipo'].$nuovo_collegamento['id_componente']);
        }
    }

    if($risultato){return $nuovo_collegamento['id'];}
    
    return $risultato;
}

function crea_copia_collegamento_albero($elemento,$id_padre){
    
    $risultato = true;

    $sql_ins = "INSERT INTO alyocollegamenti (tipo,id_componente,id_padre,posizione) ".
               "SELECT '".$elemento['tipo']."',".$elemento['id_componente'].",'".$id_padre."',CASE WHEN EXISTS(SELECT * FROM alyocollegamenti WHERE id_padre = '".$id_padre."') THEN (SELECT Max(posizione) FROM alyocollegamenti WHERE id_padre = '".$id_padre."')+1 ELSE 0 END AS posizione ";
    
    $sql_ins = explode(";", $sql_ins);

    foreach($sql_ins as $sql){
        if($result = $GLOBALS['connessione']->query($sql) === false){
            $risultato = false;
        }
    } 

    if($risultato){
        $sql = "SELECT * FROM alyocollegamenti ORDER BY id DESC LIMIT 1";
        $nuovo_collegamento = ritorna_elemento($sql);
        return $nuovo_collegamento['id'];
    }

    return $risultato;
}

function creazione_elementi(){

    $risultato  = true;
    $lista_sql_ins = explode(";", $_POST['sql_ins']);

    foreach($lista_sql_ins as $sql){
        if($result = $GLOBALS['connessione']->query($sql) === false){
            $risultato = false;
        }
    } 
    return $risultato;
}

$connessione->close();

?>