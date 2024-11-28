<?php

require_once("configurazione.php");
$opzione = $_POST['opzione'];

// CARICMANETO ALBERO COMPONENTI
if($opzione === "ALBERO_COMPONENTI"){
  $id_padre = $_POST['padre'];
  echo json_encode(albero_componenti($id_padre,$id_padre)); 
}

// CARICMANETO LISTA COMPONENTI
if($opzione === "LISTA_COMPONENTI"){
  $id_padre = $_POST['padre'];
  $lista_componenti = [];
  $lista = lista_componenti($id_padre,$id_padre);
  echo json_encode($lista_componenti); 
}

// CARICMANETO LISTA COMPONENTI
if($opzione === "ALBERO_COMPONENTI_VISIBILI"){
  $id_padre = $_POST['padre'];
  $lista_componenti = [];
  $lista = lista_componenti_visibili($id_padre,$id_padre);
  echo json_encode($lista_componenti); 
}

// CARICMANETO ALBERO CLASSI
if($opzione === "ALBERO_CLASSI"){
  $lista_sql['tabellacollegamenti'] = explode(";", $_POST['sql_vis'])[0];
  $lista_sql['tabellagruppiclassi'] = explode(";", $_POST['sql_vis'])[1];
  $lista_sql['tabellaclassi']       = explode(";", $_POST['sql_vis'])[2];
  echo json_encode(albero_classi($lista_sql,$_POST['id_padre']));
}

if($opzione === "singoloelemento"){
  echo json_encode(ritorna_elemento($_POST['sql']));
}

/* ------------------------------------------------------
  FUNZIONI DI COSTRUZIONI ALBERI E LISTE 
---------------------------------------------------------*/

// -------------- COMPONENTI ---------------------
function lista_componenti($id_padre,$id_antenato) {
    
  $collegamenti_provisorio = $id_padre == $id_antenato ? ritorna_elementi("SELECT * FROM alyocollegamenti WHERE id = ".$id_padre):
                            ritorna_elementi("SELECT * FROM alyocollegamenti WHERE id_padre = '".$id_padre."'  ORDER BY posizione");
  global $lista_componenti;

  $collegamenti = [];
  foreach ($collegamenti_provisorio as $collegamento) {
    
    if($collegamento['tipo'] == "CNT"){
      $sql = "SELECT * FROM alyocontenitori WHERE id=".$collegamento['id_componente'];
      $collegamento['componente'] = ritorna_elemento($sql);
      $collegamento['lista'] = [];
    }
  
    if($collegamento['tipo'] == "ICO"){
      $sql = "SELECT * FROM alyoicone WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
    }
  
    if($collegamento['tipo'] == "TXT"){
      $sql = "SELECT * FROM alyotesti WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
    }
  
    if($collegamento['tipo'] == "TXA"){
      $sql = "SELECT * FROM alyotestiarea WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
    }
  
    if($collegamento['tipo'] == "BTN"){
      $sql = "SELECT * FROM alyobottoni WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $collegamento['lista'] = [];
      $collegamento['selezionato'] = false;
      $lista_sql = "SELECT * FROM alyocollegamentieventi  WHERE id_padre = '".$collegamento['tipo'].$collegamento['id_componente']."'";
      $collegamento['eventi'] = ritorna_lista_eventi($lista_sql);
    }
  
    if($collegamento['tipo'] == "LNK"){
      $sql = "SELECT * FROM alyolink WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $collegamento['lista'] = [];
    }
  
    if($collegamento['tipo'] == "IMG"){
      $sql = "SELECT * FROM alyoimmagini WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $elemento = ritorna_elemento($sql);
    }

    if($collegamento['tipo'] == "MCS"){
      $sql = "SELECT * FROM alyomodalitabiancascura WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $elemento = ritorna_elemento($sql);
    }
    
    if($collegamento['tipo'] == "FRM"){
      $sql = "SELECT * FROM alyoiframe WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $elemento = ritorna_elemento($sql);
    }



    //-----------CARICAMENTO CLASSI-----------
    $lista_sql = [];
    $lista_sql['tabellacollegamenticomponente'] = "SELECT * FROM alyocollegamentigruppiclassicomponente WHERE id_padre = '".$collegamento['tipo'].$collegamento['id_componente']."'";
    $lista_sql['tabellacollegamenti'] = "SELECT * FROM alyocollegamentigruppiclassinegozio WHERE id_padre = ";
    $lista_sql['tabellagruppiclassi'] = "SELECT * FROM alyogruppiclassinegozio WHERE id = ";
    $lista_sql['tabellaclassi']       = "SELECT * FROM alyoclassi WHERE id = ";
    $collegamento['classi'] = ritorna_lista_gruppi($lista_sql);

    //-----------CARICAMENTO IMPOSTAZIONI-----------
    $lista_sql = [];
    $lista_sql['tabellacollegamenti'] = "SELECT * FROM alyocollegamentiimpostazionicomponenti WHERE id_padre = ";
    $lista_sql['tabella']             = "SELECT * FROM alyoimpostazionicomponenti WHERE id = ";
    $collegamento['impostazioni'] = ritorna_lista_impostazioni($lista_sql,$collegamento['tipo'].$collegamento['id_componente']);
 
    if($collegamento['tipo'] == 'CNT' || $collegamento['tipo'] == 'LNK' || $collegamento['tipo'] == 'BTN'){
      $collegamento['lista'] = lista_componenti($collegamento['tipo'].$collegamento['id_componente'],'0');
    }

    array_push($collegamenti, $collegamento);
    array_push($lista_componenti, $collegamento);
    
  }
  return $collegamenti;
}

function lista_componenti_visibili($id_padre,$id_antenato) {
    
  if($id_padre == $id_antenato){
      $sql = "SELECT * FROM alyocollegamenti AS ac WHERE EXISTS (SELECT * FROM alyocollegamentiimpostazionicomponenti AS acic INNER JOIN alyoimpostazionicomponenti AS aic ON acic.id_componente = aic.id WHERE CONCAT(ac.tipo,ac.id_componente) = acic.id_padre && acic.tipo = 'VSB') ";
      $collegamenti_provisorio = ritorna_elementi($sql);}
  else{
      $sql = "SELECT * FROM alyocollegamenti WHERE id_padre = '".$id_padre."'  ORDER BY posizione";
      $collegamenti_provisorio = ritorna_elementi($sql);
  }
  
  global $lista_componenti;

  $collegamenti = [];
  foreach ($collegamenti_provisorio as $collegamento) {
    
    if($collegamento['tipo'] == "CNT"){
      $sql = "SELECT * FROM alyocontenitori WHERE id=".$collegamento['id_componente'];
      $collegamento['componente'] = ritorna_elemento($sql);
      $collegamento['lista'] = [];
    }
  
    if($collegamento['tipo'] == "ICO"){
      $sql = "SELECT * FROM alyoicone WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
    }
  
    if($collegamento['tipo'] == "TXT"){
      $sql = "SELECT * FROM alyotesti WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
    }
  
    if($collegamento['tipo'] == "TXA"){
      $sql = "SELECT * FROM alyotestiarea WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
    }
  
    if($collegamento['tipo'] == "BTN"){
      $sql = "SELECT * FROM alyobottoni WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $collegamento['lista'] = [];
      $collegamento['selezionato'] = false;
      $lista_sql = "SELECT * FROM alyocollegamentieventi  WHERE id_padre = '".$collegamento['tipo'].$collegamento['id_componente']."'";
      $collegamento['eventi'] = ritorna_lista_eventi($lista_sql);
    }
  
    if($collegamento['tipo'] == "LNK"){
      $sql = "SELECT * FROM alyolink WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $collegamento['lista'] = [];
    }
  
    if($collegamento['tipo'] == "IMG"){
      $sql = "SELECT * FROM alyoimmagini WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $elemento = ritorna_elemento($sql);
    }

    if($collegamento['tipo'] == "MCS"){
      $sql = "SELECT * FROM alyomodalitabiancascura WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $elemento = ritorna_elemento($sql);
    }
    
    if($collegamento['tipo'] == "FRM"){
      $sql = "SELECT * FROM alyoiframe WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $elemento = ritorna_elemento($sql);
    }

    //-----------CARICAMENTO CLASSI-----------
    $lista_sql = [];
    $lista_sql['tabellacollegamenticomponente'] = "SELECT * FROM alyocollegamentigruppiclassicomponente WHERE id_padre = '".$collegamento['tipo'].$collegamento['id_componente']."'";
    $lista_sql['tabellacollegamenti'] = "SELECT * FROM alyocollegamentigruppiclassinegozio WHERE id_padre = ";
    $lista_sql['tabellagruppiclassi'] = "SELECT * FROM alyogruppiclassinegozio WHERE id = ";
    $lista_sql['tabellaclassi']       = "SELECT * FROM alyoclassi WHERE id = ";
    $collegamento['classi'] = ritorna_lista_gruppi($lista_sql);

    //-----------CARICAMENTO IMPOSTAZIONI-----------
    $lista_sql = [];
    $lista_sql['tabellacollegamenti'] = "SELECT * FROM alyocollegamentiimpostazionicomponenti WHERE id_padre = ";
    $lista_sql['tabella']             = "SELECT * FROM alyoimpostazionicomponenti WHERE id = ";
    $collegamento['impostazioni'] = ritorna_lista_impostazioni($lista_sql,$collegamento['tipo'].$collegamento['id_componente']);
 
    if($collegamento['tipo'] == 'CNT' || $collegamento['tipo'] == 'LNK' || $collegamento['tipo'] == 'BTN'){
      $collegamento['lista'] = lista_componenti_visibili($collegamento['tipo'].$collegamento['id_componente'],'0');
    }

    array_push($collegamenti, $collegamento);
    if($id_padre == $id_antenato){array_push($lista_componenti, $collegamento);}
    
  }
  return $collegamenti;
}

function albero_componenti($id_padre,$id_antenato) {
    
  if($id_padre == $id_antenato){$collegamenti_provisorio = ritorna_elementi("SELECT * FROM alyocollegamenti WHERE id = ".$id_padre);}
  else{

      // $sql = "SELECT * FROM alyocollegamenti WHERE id_padre = '".$id_padre."'";
      $sql = "SELECT ac.id,ac.posizione,ac.tipo,ac.id_componente,ac.id_padre "
            ."FROM alyocollegamenti AS ac WHERE NOT EXISTS (SELECT * FROM alyocollegamentiimpostazionicomponenti AS acic WHERE CONCAT(ac.tipo,ac.id_componente) = acic.id_padre && acic.tipo = 'VSB') && ac.id_padre = '".$id_padre."' "
            ."UNION "
            ."SELECT ac.id,ac.posizione,ac.tipo,ac.id_componente,ac.id_padre "
            ."FROM alyocollegamenti AS ac WHERE EXISTS (SELECT * FROM alyocollegamentiimpostazionicomponenti AS acic INNER JOIN alyoimpostazionicomponenti AS aic ON acic.id_componente = aic.id WHERE CONCAT(ac.tipo,ac.id_componente) = acic.id_padre && acic.tipo = 'VSB' && aic.valore = 'SI') && ac.id_padre = '".$id_padre."' ORDER BY posizione";
      $collegamenti_provisorio = ritorna_elementi($sql);
  }

  $collegamenti = [];
  foreach ($collegamenti_provisorio as $collegamento) {
    
    if($collegamento['tipo'] == "CNT"){
      $sql = "SELECT * FROM alyocontenitori WHERE id=".$collegamento['id_componente'];
      $collegamento['componente'] = ritorna_elemento($sql);
      $collegamento['lista'] = [];
    }
  
    if($collegamento['tipo'] == "ICO"){
      $sql = "SELECT * FROM alyoicone WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
    }
  
    if($collegamento['tipo'] == "TXT"){
      $sql = "SELECT * FROM alyotesti WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
    }
  
    if($collegamento['tipo'] == "TXA"){
      $sql = "SELECT * FROM alyotestiarea WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
    }
  
    if($collegamento['tipo'] == "BTN"){
      $sql = "SELECT * FROM alyobottoni WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $collegamento['lista'] = [];
      $collegamento['selezionato'] = false;
      $lista_sql = "SELECT * FROM alyocollegamentieventi  WHERE id_padre = '".$collegamento['tipo'].$collegamento['id_componente']."'";
      $collegamento['eventi'] = ritorna_lista_eventi($lista_sql);
    }
  
    if($collegamento['tipo'] == "LNK"){
      $sql = "SELECT * FROM alyolink WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $collegamento['lista'] = [];
    }
  
    if($collegamento['tipo'] == "IMG"){
      $sql = "SELECT * FROM alyoimmagini WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $elemento = ritorna_elemento($sql);
    }

    if($collegamento['tipo'] == "MCS"){
      $sql = "SELECT * FROM alyomodalitabiancascura WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $elemento = ritorna_elemento($sql);
    }
    
    if($collegamento['tipo'] == "FRM"){
      $sql = "SELECT * FROM alyoiframe WHERE id=".$collegamento['id_componente'];
      $elemento = ritorna_elemento($sql);
      $collegamento['componente'] = $elemento;
      $elemento = ritorna_elemento($sql);
    }

    //-----------CARICAMENTO CLASSI-----------
    $lista_sql = [];
    $lista_sql['tabellacollegamenticomponente'] = "SELECT * FROM alyocollegamentigruppiclassicomponente WHERE id_padre = '".$collegamento['tipo'].$collegamento['id_componente']."'";
    $lista_sql['tabellacollegamenti'] = "SELECT * FROM alyocollegamentigruppiclassinegozio WHERE id_padre = ";
    $lista_sql['tabellagruppiclassi'] = "SELECT * FROM alyogruppiclassinegozio WHERE id = ";
    $lista_sql['tabellaclassi']       = "SELECT * FROM alyoclassi WHERE id = ";
    $collegamento['classi'] = ritorna_lista_gruppi($lista_sql);

    //-----------CARICAMENTO IMPOSTAZIONI-----------
    $lista_sql = [];
    $lista_sql['tabellacollegamenti'] = "SELECT * FROM alyocollegamentiimpostazionicomponenti WHERE id_padre = ";
    $lista_sql['tabella']             = "SELECT * FROM alyoimpostazionicomponenti WHERE id = ";
    $collegamento['impostazioni'] = ritorna_lista_impostazioni($lista_sql,$collegamento['tipo'].$collegamento['id_componente']);
 
    if($collegamento['tipo'] == 'CNT' || $collegamento['tipo'] == 'LNK' || $collegamento['tipo'] == 'BTN'){
      $collegamento['lista'] = albero_componenti($collegamento['tipo'].$collegamento['id_componente'],'0');
    }

    array_push($collegamenti, $collegamento);
  }

  return $id_padre == $id_antenato ? $collegamenti[0]:$collegamenti;
}


// -------------- EVENTI ---------------------
function ritorna_lista_eventi($lista_sql){
  return lista_eventi($lista_sql,">1");
}

function ritorna_singolo_evento($lista_sql){
  return lista_eventi($lista_sql,"1");
}

function lista_eventi($lista_sql,$numero) {

  $collegamenti_provisori = ritorna_elementi($lista_sql);

  $collegamenti = []; // COLLEGAMENTO GRUPPO CLASSE COMPONENTE
  foreach($collegamenti_provisori as $collegamento) {
    $collegamento['pannello'] = false;
    $collegamento['lista'] = lista_azioni("SELECT * FROM alyocollegamentiazioni WHERE id_padre = ".$collegamento['id'],'>1');
    array_push($collegamenti, $collegamento);
  }
  
  return $numero == '>1' ? $collegamenti:$collegamenti[0];

}

// -------------- AZIONI ---------------------
function ritorna_lista_azioni($lista_sql){
  return lista_azioni($lista_sql,">1");
}

function ritorna_singolo_azione($lista_sql){
  return lista_azioni($lista_sql,"1");
}

function lista_azioni($lista_sql,$numero) {

  $collegamenti_provisori = ritorna_elementi($lista_sql);

  $collegamenti = []; // COLLEGAMENTO azione COMPONENTE
  foreach($collegamenti_provisori as $collegamento) {
    $collegamento['pannello'] = false;
    array_push($collegamenti, $collegamento);
  }
  
  return $numero == '>1' ? $collegamenti:$collegamenti[0];

}

// -------------- IMPOSTAZIONI ---------------------

function ritorna_lista_impostazioni($lista_sql,$id_padre){
  return albero_impostazioni($lista_sql,$id_padre,">1");
}

function ritorna_singolo_impostazione($lista_sql,$id_padre){
  return albero_impostazioni($lista_sql,$id_padre,"1");
}

function albero_impostazioni($lista_sql,$id_padre,$numero){
  
  $id_padre != null ? $collegamenti_provisori = ritorna_elementi($lista_sql['tabellacollegamenti']."'".$id_padre."'"):
  $collegamenti_provisori = ritorna_elementi($lista_sql['tabellacollegamenti']);

  $collegamenti = [];
  foreach($collegamenti_provisori as $collegamento) {
    
    $collegamento['componente'] = ritorna_elemento($lista_sql['tabella'].$collegamento['id_componente']);
    
    $tipo = $collegamento['tipo'];
    if($tipo == "VIS" || $tipo == "CLR" ){
      $collegamento['pannello'] = false;      
    }

    //if($collegamento['tipo'] == "GVIS"){
    //   $collegamento['componente'] = ritorna_elemento($lista_sql['tabellagruppiclassi'].$collegamento['id_componente']);
    //   $lista_sql['tabellacollegamenti'] = $lista_sql['tabellacollegamenti'].$collegamento['id'];
    //   $collegamento['lista'] = albero_classi($lista_sql,$collegamento['id']);
    //}

    unset($collegamento['id_componente']);
    array_push($collegamenti, $collegamento);
  }

  return $numero == '>1' ? $collegamenti:$collegamenti[0];
}

// -------------- CLASSI ---------------------

function ritorna_lista_gruppi($lista_sql){
  return lista_gruppi($lista_sql,">1");
}

function ritorna_singolo_gruppo($lista_sql){
  return lista_gruppi($lista_sql,"1");
}

function lista_gruppi($lista_sql,$numero) {

  $collegamenti_provisori = ritorna_elementi($lista_sql['tabellacollegamenticomponente']);

  $collegamenti = []; // COLLEGAMENTO GRUPPO CLASSE COMPONENTE
  foreach($collegamenti_provisori as $collegamento) {
    
    $sql = '';
    $componente_collegato = ritorna_elemento("SELECT * FROM alyocollegamentigruppiclassinegozio WHERE id = ".$collegamento['id_componente']);
    
    if($componente_collegato['tipo'] == 'CLS'){
      $sql = "SELECT * FROM alyoclassi WHERE id = ".$componente_collegato['id_componente'];
    }

    if($componente_collegato['tipo'] != 'CLS'){
      $sql = "SELECT * FROM alyogruppiclassinegozio WHERE id = ".$componente_collegato['id_componente'];
    }

    $componente           = ritorna_elemento($sql);
    $componente_collegato["componente"] = $componente;

    $componente_collegato["tipo"] != "CLS" ? $componente_collegato["lista"] = albero_classi($lista_sql,$componente_collegato["id"]):'';
    $collegamento["componente"] = $componente_collegato;

    unset($componente_collegato['id_componente']);
    unset($collegamento['id_componente']);
    array_push($collegamenti, $collegamento);
  }
  
  return $numero == '>1' ? $collegamenti:$collegamenti[0];

}

function albero_classi($lista_sql,$id_padre) {
    
  $collegamenti_provisori = ritorna_elementi($lista_sql['tabellacollegamenti'].$id_padre."  ORDER BY id DESC");

  $collegamenti = [];
  foreach ($collegamenti_provisori as $collegamento) {
    
    if($collegamento['tipo'] == "CLS"){
       $collegamento['componente'] = ritorna_elemento($lista_sql['tabellaclassi'].$collegamento['id_componente']);
    }else{
      $collegamento['componente'] = ritorna_elemento($lista_sql['tabellagruppiclassi'].$collegamento['id_componente']);
      $collegamento['lista'] = albero_classi($lista_sql,$collegamento['id']);
    }

    unset($collegamento['id_componente']);
    array_push($collegamenti, $collegamento);
  }

  return $collegamenti;

}

function singola_classe($lista_sql) {
    
  $collegamento = ritorna_elemento($lista_sql['tabellacollegamenti']);
  $collegamento['componente'] = ritorna_elemento($lista_sql['tabella']);
  $collegamento['tipo'] != "CLS" ? $collegamento['lista'] = []:'';

  return $collegamento;
}

// -------------- ELEMENTI ---------------------
function ritorna_elementi($sql){
  if($result = $GLOBALS['connessione']->query($sql)){
    $lista = [];
    if($result->num_rows > 0){
      while($elemento = $result->fetch_array(MYSQLI_ASSOC)){array_push($lista, $elemento);}
    }
    return $lista;
  }else{return "ERRORE: ".$GLOBALS['connessione']->error;}
}

function ritorna_elemento($sql){
  if($result = $GLOBALS['connessione']->query($sql)){
    return $result->num_rows > 0 ? $result->fetch_array(MYSQLI_ASSOC):[];  
  }else{return [];}
}



?>