import { Component, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import { faPlus, faMinus, faBars, faGripVertical, faXmark, faTrash, faClone, faArrowUpFromBracket, faPhone, faArrowDownWideShort, faCircleChevronLeft, faRightLeft, faImage, faListUl, faFolder, faChevronLeft, faFileCode, faHome, faGear, faListOl, faIcons,faCircleDot, faEye, faA, faUser, faCalendarDays, faLocationDot, faFontAwesome, faGlobe, faCar, faEnvelope, faUtensils, faBriefcase, faBuilding, faMapLocationDot, faGraduationCap, faSchool, faCheckToSlot, faEarthEurope, faAppleAlt, faLaptopCode, faFont, faBrain, faUserTie, faDiagramProject, faNoteSticky, faEquals,faEyeSlash, faBrush } from '@fortawesome/free-solid-svg-icons'
import { AlyoService } from './alyo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  alyonomesito:  any;
  alyoiconesito: any;
  alyofonts:     any;
  alyocolore:    any;
  alyolingua:    any;

  alyocontenitore2: any
  alyowool:         any = this;

  elemento_hover:   any = [];

  lista_bottoni:    any = [];
  lista_colori:     any = [];
  lista_componenti: any = [];
  

  evento: any = [
    {tipo:  "0",    nome: "Nessun Elemento"},
    {tipo:  "CLK",  nome: "Click"},
    {tipo:  "DCLK", nome: "Doppio Click"},
    {tipo:  "CLKP", nome: "Click Prolungato"},
  ]

  azione: any = [
    {tipo:  "0",    nome: "Nessun Elemento"},
    {tipo:  "CLR",  nome: "Colorazione"},
    {tipo:  "DCLR", nome: "Decolorazione"},
    {tipo:  "CLRD", nome: "Colorazione e decolorazione"},
    {tipo:  "CMP",  nome: "Comparsa"},
    {tipo:  "SCMP", nome: "Scomparsa"},
    {tipo:  "CMPS", nome: "Comparsa e scoparsa"},
  ]


  lista_eventi:    any = []

  pc:               any = [];
  pannello           = false;
  pannello_eventi    = false;
  selezionato        = true;
  azione_selezionato: any;

  velocita: any = "10000";

  elemento: any = [];
  elemento_selezionato: any = {};
  componente: any = [];

  sezione_panello_eventi = 0;
  evento_selezionato: any;
  elemento_evento_selezionato: any; 

  percorso = {
    true:  "./../",
    false: "https://www.alyowool.com/"
  }

  sfondi: any = {
                  true:  "alyocurriculum/assets/immagini/sito/sfondo.gif",
                  false: "alyocurriculum/assets/immagini/sito/sfondofluo.gif"                 
                }
              
  colori_esadecimali = {"bianco":"ffffff",nero:"000000","rosso": "ff0000","verde":"00ff00","blu":"0000ff","rosavivo":"FF007F","giallo":"FFFF00","viola":"800080","marrone":"964B00","arancione":"FF6600","turchese":"30D5C8","orchidea":"DA70D6","giallofluo":"e2f705","rosafluo":"f50b86","arancionefluo":"ff6f00","verdefluo":"a3f307","azzurrofluo":"05f9e2","grigio5":"F7F7F7","grigio10":"EFEFEF" ,"grigio15":"8F8F8F","grigio20":"D2D2D2","grigio25":"C0C0C0","grigio30":"B2B2B2", "grigio35":"A2A2A2", "grigio40":"8F8F8F", "grigio50":"808080", "grigio60":"5F5F5F", "grigio70":"4F4F4F",  "grigio75":"404040", "grigio80":"2F2F2F", "grigioasparago":"465945", "grigioardesiascuro":"2F4F4F", "grigioardesiachiaro":"778899", "grigiocenere":"E4E5E0",  "grigiotopo":"646B63"}
  colori: any        = ["bianco","nero","rosso","verde","blu","rosavivo","giallo","viola","marrone","arancione","turchese","orchidea","giallofluo","rosafluo","arancionefluo","verdefluo","azzurrofluo","grigio5","grigio10" ,"grigio15","grigio20","grigio25" ,"grigio30" , "grigio35" , "grigio40" , "grigio50" , "grigio60" , "grigio70" ,  "grigio75" , "grigio80" , "grigioasparago", "grigioardesiascuro" , "grigioardesiachiaro" , "grigiocenere" ,  "grigiotopo"];
  fa: any            = {fa: ['a','home','piu','meno','lista','listanumeri','griglia','cestino',"copia","condividi","telefono","x","ordine","indietro","scambio","scambio","cartella","indietro","css",'impostazioni','icone','cerchiopunto','occhio','occhiochiuso',"utente","calendario","locazione","nazione","internet","macchina","email","ristorante","lavoro","azienda","indirizzo","istruzione","scuola","lingua","mela","software","font","voto","capacita","progetto","referente","nota","evento","colore"],
  "a":{nome: "a",valore: faA},"":{nome:"",valore:""},"home":{nome:"home",valore:faHome}, 
  piu: {nome: "piu",valore: faPlus}, meno: {nome: "meno",valore: faMinus}, 
  lista: {nome: "lista",valore: faBars},listanumeri: {nome: "listanumeri",valore: faListOl},
  griglia: {nome: "griglia",valore: faGripVertical},cestino: {nome: "cestino",valore:faTrash}, 
  copia: {nome: "copia",valore:faClone}, condividi: {nome: "condividi",valore: faArrowUpFromBracket}, 
  telefono: {nome: "telefono",valore:faPhone}, x: {nome: "x",valore: faXmark}, 
  ordine: {nome: "ordine",valore: faArrowDownWideShort}, indietro: {nome: "indietro",valore: faCircleChevronLeft}, 
  scambio: {nome: "scambio",valore: faRightLeft}, immagine: {nome: "immagine",valore: faImage}, 
  listaul: {nome: "Lista",valore: faListUl}, cartella: {nome: "Cartella", valore: faFolder},
  inditero: {nome: "indietro",valore: faChevronLeft},css:{nome: "css",valore: faFileCode},
  impostazioni:{nome: "Impostazioni",valore: faGear},icone:{nome: "icone",valore: faIcons},
  cerchiopunto:{nome: "cerchiopunto",valore: faCircleDot},
  occhio:{nome: "occhio",valore: faEye},
  occhiochiuso:{nome: "occhiochiuso",valore: faEyeSlash},
  utente: {nome: "utente",valore: faUser}, 
  calendario: {nome: "calendario",valore: faCalendarDays},
  locazione: {nome: "locazione",valore: faLocationDot}, 
  nazione: {nome: "nazione",valore: faFontAwesome}, 
  internet: {nome: "internet",valore: faGlobe},
  macchina: {nome: "macchina",valore: faCar},
  email: {nome: "email",valore: faEnvelope},  
  ristorante: {nome: "ristorante",valore: faUtensils}, 
  lavoro:  {nome: "lavoro",valore: faBriefcase},
  azienda: {nome: "azienda",valore: faBuilding}, 
  indirizzo: {nome: "indirizzo",valore: faMapLocationDot}, 
  istruzione: {nome: "istruzione",valore: faGraduationCap}, 
  scuola: {nome: "scuola",valore: faSchool}, 
  voto: {nome: "voto",valore: faCheckToSlot}, 
  lingua: {nome: "lingua",valore: faEarthEurope}, 
  mela: {nome: "mela",valore: faAppleAlt}, 
  software: {nome: "software",valore: faLaptopCode},
  font: {nome: "font",valore: faFont},
  capacita: {nome: "capacita",valore: faBrain}, 
  referente: {nome: "referente",valore: faUserTie}, 
  progetto: {nome: "progetto",valore: faDiagramProject},
  nota: {nome: "nota",valore: faNoteSticky},
  evento: {nome:  "evento",valore: faEquals},
  colore: {nome:  "colore",valore: faBrush}

}

  classe: any = {
      
    col:                 {nome: "📱 Colonna",        valore: "col",                },
    colsm:               {nome: "🖥️ Colonna",        valore: "col-sm",             },
  
    padding:             {nome: "Padding",           valore: "padding",            },
    margine:             {nome: "Margine",           valore: "padding",            },
    larghezza:           {nome: "Larghezza",         valore: "larghezza",          }, 
    altezza:             {nome: "Altezza",           valore: "altezza",            },
  
    bordorotondo:        {nome: "Bordo Rotondo",     valore: "bordo-rotondo",      },
    ombra:               {nome: "Ombra",             valore: "ombra",              },
                          
    testograndezza:      {nome: "Testo Grandeza",    valore: "testo",              },
    testodxsx:           {nome: "Testo Dx-Cx-Sx-Gx", valore: "testo",              },
    testoAa:             {nome: "Testo ma-MA-Ma",    valore: "testo",              },
    testograssetto:      {nome: "Testo No-Gr",       valore: "testo",              },

    trasparente:         {nome: "Trasaprenza",       valore: "trasparente",                                 
                          normale:     {nome: "Trasparente",           valore: "trasparente"},
                          hover:       {nome: "Trasp. Hover",      valore: "trasparente-hover"},
                          selezionato: {nome: "Trasp. Selezionato",valore: "trasparente"}
                          },

    sfocato:             {nome: "Sfocato",           valore: "sfocato",            
                          normale:     {nome: "Sfocato",           valore: "sfocato"},
                          hover:       {nome: "Sfocato hover",      valore: "sfocato-hover"},
                          selezionato: {nome: "Sfocato Selezionato",valore: "sfocato"}
                          },

    colore:              {nome: "Colore",            valore: "",                                             
                          normale:     {nome: "Colore",            valore: ""},
                          hover:       {nome: "Colore Hover",      valore: "hover"},
                          selezionato: {nome: "Colore Selezionato",valore: ""}
                          },
    testocolore:         {nome: "Testo Colore",      valore: "testo",              
                          normale:     {nome: "Testo Colore",           valore: "testo"},
                          hover:       {nome: "Test Color Hov",         valore: "testo-hover"},
                          selezionato: {nome: "Test Color Sel",         valore: "testo"}
                          },
  }
      
  constructor(private alyoservice: AlyoService){}

  ngOnInit(): void {
    
    setTimeout(() => {
      this.caricamento();
      this.lista_funzioni();
      this.intervallo();
    },200);
  }

  intervallo(){
    setInterval(() => {
      this.lista_funzioni()
    },this.velocita);
  } 

  lista_funzioni(){

    this.alyoiconesito.intervallo();
    this.alyocolore.intervallo();
    this.alyonomesito.intervallo();
    this.aggiornasfondo();
   
  }
  
  /*
    0:  col
    1:  col-
    2:  sfocato
    3:  trasparente
    4:  bordi arotondati
    5:  ombra
    6:  padding 
    7:  larghezza
    8:  altezza
    9:  Testo Px
    10: Testo Dx-Cx-Sx-Gx
    11: Testo ma-MA-Ma
    12: Testo No-Gr
  */

  caricamento(){

      for(var colore of this.colori){  this.lista_colori.push({nome: colore,valore: colore});}

      this.pc =  {

        col:              {elemento: this.classe.col,                           valori: [this.creazione_valori(11,1,  [""])]},
        colsm:            {elemento: this.classe.colsm,                           valori: [this.creazione_valori(11,1,  [""])]},
 
        padding:          {elemento: this.classe.padding,                       valori: [this.creazione_valori(50,5,  ["px",""])]},
        margine:          {elemento: this.classe.margine,                       valori: [this.creazione_valori(50,5,  ["px",""])]},
  
        larghezza:        {elemento: this.classe.larghezza,                      valori: [this.creazione_valori(500,50,  ["px",""])]},
        altezza:          {elemento: this.classe.altezza,                        valori: [this.creazione_valori(500,50, ["px",""])]},
   
        ombra:            {elemento: this.classe.ombra,                          valori: [this.creazione_valori(90,10, [""])]},
        bordorotondo:     {elemento: this.classe.bordorotondo,                   valori: [this.creazione_valori(50,5,  ["px",""])]},
  
        testograndezza:           {elemento: this.classe.testograndezza,                valori: [this.creazione_valori(100,1,  ["px",""])]},
        testodxsx:                {elemento: this.classe.testodxsx,                     valori: [[{nome: "",valore: ""},{nome: "Sinistro",valore:"sinistro"},{nome: "Destro",valore: "destro"},{nome: "Centro",valore:"centro"},{nome: "Giustificato",valore:"giustificato"}]]},
        testoAa:                  {elemento: this.classe.testoAa,                        valori: [[{nome: "",valore: ""},{nome: "minuscolo",valore:"minuscolo"},{nome: "maiuscolo",valore:"maiuscolo"},{nome: "1 Letteremaiuscole",valore:"1letteremaiuscole"}]]},
        testograssetto:           {elemento: this.classe.testograssetto,                 valori: [[{nome: "",valore: ""},{nome: "grassetto",valore:"grassetto"}]]},

        trasparente:              {elemento: this.classe.trasparente.normale,               valori: [this.creazione_valori(100,10, [""])]},
        trasparentehover:         {elemento: this.classe.trasparente.hover,                 valori: [this.creazione_valori(100,10,[""])]},
        trasparenteselezionato:   {elemento: this.classe.trasparente.selezionato,           valori: [this.creazione_valori(100,10,[""])]},

        sfocatonormale:      {elemento: this.classe.sfocato.normale,                         valori: [this.creazione_valori(50,10, ["px"])]},
        sfocatohover:        {elemento: this.classe.sfocato.hover,                           valori: [this.creazione_valori(50,10,["px"])]},
        sfocatoselezionato:  {elemento: this.classe.sfocato.selezionato,                     valori: [this.creazione_valori(50,10, ["px"])]},
 
        colore:              {elemento: this.classe.colore.normale,                          valori: [[{nome: "",valore: ""}],[{nome: "Multicolore",valore:"mc"}],this.creazionelistaduecolori(),this.lista_colori]},
        colorehover:         {elemento: this.classe.colore.hover,                            valori: [[{nome: "",valore: ""}],[{nome: "Multicolore",valore:"mc"}],this.creazionelistaduecolori(),this.lista_colori]},
        coloreselezionato:   {elemento: this.classe.colore.selezionato,                      valori: [[{nome: "",valore: ""}],[{nome: "Multicolore",valore:"mc"}],this.creazionelistaduecolori(),this.lista_colori]},

        testocolore:            {elemento: this.classe.testocolore.normale,                       valori: [[{nome: "",valore: ""}],[{nome: "Multicolore",valore:"mc"}],this.creazionelistaduecolori(),this.lista_colori]},
        testocolorehover:       {elemento: this.classe.testocolore.hover,                         valori: [[{nome: "",valore: ""}],[{nome: "Multicolore",valore:"mc"}],this.creazionelistaduecolori(),this.lista_colori]},
        testocoloreselezionato: {elemento: this.classe.testocolore.selezionato,                   valori: [[{nome: "",valore: ""}],[{nome: "Multicolore",valore:"mc"}],this.creazionelistaduecolori(),this.lista_colori]},

      }

      this.componente = {
        CNT: {nome: "contenitore",tabella: "alyocontenitori",attributi: [{nome: "valore",valore: ""}]                         ,classi: [this.pc.col,this.pc.colsm,this.pc.margine,this.pc.padding,this.pc.larghezza,this.pc.altezza,this.pc.bordorotondo,this.pc.ombra,this.pc.trasparente,this.pc.trasparentehover,this.pc.trasparenteselezionato,this.pc.sfocatonormale,this.pc.sfocatohover,this.pc.sfocatoselezionato,this.pc.colore,this.pc.colorehover,this.pc.coloreselezionato]},
        ICO: {nome: "icona"      ,tabella: "alyoicone",      attributi: [{nome: "valore",valore: ""}]                         ,classi: [this.pc.col,this.pc.colsm,this.pc.margine,this.pc.padding,this.pc.larghezza,this.pc.altezza,this.pc.bordorotondo,this.pc.ombra,this.pc.trasparente,this.pc.trasparentehover,this.pc.trasparenteselezionato,this.pc.sfocatonormale,this.pc.sfocatohover,this.pc.sfocatoselezionato,this.pc.colore,this.pc.colorehover,this.pc.coloreselezionato,this.pc.testocolore,this.pc.testocolorehover,this.pc.testocoloreselezionato,this.pc.testograndezza]},
        TXT: {nome: "testo"      ,tabella: "alyotesti",      attributi: [{nome: "valore",valore: ""}]                         ,classi: [this.pc.col,this.pc.colsm,this.pc.margine,this.pc.padding,this.pc.larghezza,this.pc.altezza,this.pc.bordorotondo,this.pc.ombra,this.pc.trasparente,this.pc.trasparentehover,this.pc.trasparenteselezionato,this.pc.sfocatonormale,this.pc.sfocatohover,this.pc.sfocatoselezionato,this.pc.colore,this.pc.colorehover,this.pc.coloreselezionato,this.pc.testocolore,this.pc.testocolorehover,this.pc.testocoloreselezionato,this.pc.testograndezza,this.pc.testodxsx,this.pc.testoAa,this.pc.testograssetto]},
        TXA: {nome: "Testo Area" ,tabella: "alyotestiarea",  attributi: [{nome: "valore",valore: ""}]                         ,classi: [this.pc.col,this.pc.colsm,this.pc.margine,this.pc.padding,this.pc.larghezza,this.pc.altezza,this.pc.bordorotondo,this.pc.ombra,this.pc.trasparente,this.pc.trasparentehover,this.pc.trasparenteselezionato,this.pc.sfocatonormale,this.pc.sfocatohover,this.pc.sfocatoselezionato,this.pc.colore,this.pc.colorehover,this.pc.coloreselezionato,this.pc.testocolore,this.pc.testocolorehover,this.pc.testocoloreselezionato,this.pc.testograndezza,this.pc.testodxsx,this.pc.testoAa,this.pc.testograssetto]},
        LNK: {nome: "link"       ,tabella: "alyolink",       attributi: [{nome: "valore",valore: ""},{nome: "tipo",valore: 0}],classi: [this.pc.col,this.pc.colsm,this.pc.margine,this.pc.padding,this.pc.larghezza,this.pc.altezza,this.pc.bordorotondo,this.pc.ombra,this.pc.trasparente,this.pc.trasparentehover,this.pc.trasparenteselezionato,this.pc.sfocatonormale,this.pc.sfocatohover,this.pc.sfocatoselezionato,this.pc.colore,this.pc.colorehover,this.pc.coloreselezionato]},
        IMG: {nome: "immagine"   ,tabella: "alyoimmagini",   attributi: [{nome: "valore",valore: ""},{nome: "tipo",valore: 0}],classi: [this.pc.col,this.pc.colsm,this.pc.margine,this.pc.larghezza,this.pc.altezza,this.pc.bordorotondo,this.pc.ombra,this.pc.testodxsx]},
        BTN: {nome: "Bottone"    ,tabella: "alyobottoni",    attributi: [{nome: "valore",valore: ""},{nome: "tipo",valore: 0}],classi: [this.pc.col,this.pc.colsm,this.pc.margine,this.pc.padding,this.pc.larghezza,this.pc.altezza,this.pc.bordorotondo,this.pc.ombra,this.pc.trasparente,this.pc.trasparentehover,this.pc.trasparenteselezionato,this.pc.sfocatonormale,this.pc.sfocatohover,this.pc.sfocatoselezionato,this.pc.colore,this.pc.colorehover,this.pc.coloreselezionato]},
        CMP: {nome: "contenitore",tabella: "alyocomponenti", attributi: [{nome: "tipo"  ,valore: 0}]                          ,classi: [this.pc.col,this.pc.colsm,this.pc.margine,this.pc.padding,this.pc.larghezza,this.pc.altezza,this.pc.bordorotondo,this.pc.ombra,this.pc.trasparente,this.pc.trasparentehover,this.pc.trasparenteselezionato,this.pc.sfocatonormale,this.pc.sfocatohover,this.pc.sfocatoselezionato,this.pc.colore,this.pc.colorehover,this.pc.coloreselezionato]},
      }

      var formdate = new FormData();
      formdate.append("opzione","albero");
      formdate.append("padre","403");
      
      this.alyoservice.alyo_caricamento(formdate).subscribe(dati => {

        //this.s("DATI HOME: ",dati)
    
        this.elemento = this.creazione(dati[0])
        this.carica_eventi();

        //this.elemento_selezionato = this.lista_componenti.filter((ele: any)=>{ return ele.tipo=="BTN" })[0];
        //this.pannello_eventi = true;
        //this.s("this.elemento: ",this.elemento)
      
      })

  }

  creazione(elemento: any){

    elemento['selezionato']=false;
    elemento.classe = elemento.classe.split(",");
    elemento.effetti = elemento.effetti.split(",");
    this.lista_componenti.push(elemento)

    if(elemento.tipo == "BTN"){elemento['eventi_2'] = [];}
    try{ 
      for(var i=0; i<elemento.lista_componenti.length; i++){ 
        elemento.lista_componenti[i] = this.creazione(elemento.lista_componenti[i]);   
      } 
    }
    catch{}

    return elemento;
  }

  carica_eventi(){

    var lista_bottoni = this.lista_componenti.filter((ele: any)=>{ return ele.tipo=="BTN" })
    //this.s("lista_bottoni",lista_bottoni)

    var condizione = "alyoeventi.id_componente = '"+lista_bottoni[0].id+"' ";
    for(var i=1; i<lista_bottoni.length; i++){
      lista_bottoni[i]['eventi_2']=[]
      condizione += "OR alyoeventi.id_componente = '"+lista_bottoni[i].id+"' ";
    }

    var formdate = new FormData();
    //var sql = "SELECT alyoeventi.id, alyoeventi.tipo, alyoeventi.id_componente, alyoazioni.id, alyoazioni.tipo, alyoazioni.id_componente FROM alyoeventi INNER JOIN alyoazioni ON alyoeventi.id == alyoazioni.id_evento";
    var sql = "SELECT * FROM alyoeventi WHERE "+condizione;
    //this.s("SQL: ",sql)
    formdate.append("opzione","selezione");
    formdate.append("sql",sql);
    
    this.alyoservice.alyo_caricamento(formdate).subscribe(dati => {

      //this.s("DATI HOME: ",dati)

      var sql_azioni = ""
      for(var ele of dati){

        var evento = {
          id:           ele.id, 
          tipo:         this.evento.find((elem: any) =>           { return elem.tipo == ele.tipo }),
          elemento:     this.lista_componenti.find((elem: any) => { return elem.id == ele.id_componente }), 
          lista_azioni: [],
          pannello:     false
        }

        var elem = this.lista_componenti.find((elem: any) => { return elem.id == ele.id_componente })
        elem['eventi_2'].push(evento);

        sql_azioni = sql_azioni+ "alyoazioni.id_evento = "+ele.id+" OR "
      }

      sql_azioni = sql_azioni.slice(0, -4);

      //this.s("sql_azioni: ",sql_azioni)

      var formdate = new FormData();
      var sql = "SELECT * FROM alyoazioni WHERE "+sql_azioni;

      //this.s("SQL: ",sql)
      formdate.append("opzione","selezione");
      formdate.append("sql",sql);
      
      this.alyoservice.alyo_caricamento(formdate).subscribe(dati2 => {

        this.s("DATI2 HOME: ",dati2)
    
        for(var ele of dati2){
          for(var ele2 of lista_bottoni){
            var evento2 = ele2.eventi_2.find((elem2: any)=>{return elem2.id == ele.id_evento })

            if(evento2){
              var azione = {
                id:           ele.id, 
                tipo:         this.azione.find((elem: any) =>           { return elem.tipo == ele.tipo }),
                elemento:     this.lista_componenti.find((elem: any) => { return elem.id == ele.id_componente }), 
                id_evento:    ele.id_evento,
                pannello:     false
              }
              evento2.lista_azioni.push(azione);
            }
          }
        }

        //this.s("lista_bottoni: ",lista_bottoni)
      })

      
    })

  }

  inserimento(attributi: any){

    this.s("attributi: ",attributi)
    var formdate = new FormData();

    if(attributi.tabella == "alyoeventi"){
      
      if(attributi.funzione == "nuovo"){
     
        var tipo = this.evento[0].tipo;
        var id_componente = this.elemento_selezionato.id;
        var sql = "INSERT INTO alyoeventi (tipo,id_componente) VALUES ("+tipo+","+id_componente+")";
        formdate.append("sql",sql);
        this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
          
          this.s("DATI: ",dati)
          if(dati.response){
            var evento = {id: dati.id, tipo: this.evento[0], elemento: this.elemento_selezionato, pannello: false, lista_azioni: []}
            this.elemento_selezionato.eventi_2.push(evento)
          }

          //this.s("this.elemento_selezionato.eventi_2: ",this.elemento_selezionato.eventi_2)
               
        });
      }
    }

    if(attributi.tabella == "alyoazioni"){
      
      var tipo = this.azione[0].tipo;
      var id_componente = this.lista_componenti[0].id;
      var id_evento = attributi.elemento_evento.id

      var sql = "INSERT INTO "+attributi.tabella+" (tipo,id_componente,id_evento) VALUES ("+tipo+","+id_componente+","+id_evento+")";
      //this.s("sql: ",sql)
      formdate.append("sql",sql);
      this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
        
        this.s("DATI: ",dati)
        if(dati.response){
          var azione = {id: dati.id, tipo: this.azione[0],elemento: this.elemento_selezionato,id_componente: attributi.elemento_evento.id, pannello: false}
          attributi.elemento_evento.lista_azioni.push(azione)
        }

        //this.s("this.elemento_selezionato.eventi_2: ",this.elemento_selezionato.eventi_2)
             
      });
    }

    //this.s("this.elemento_selezionato: ",this.elemento_selezionato)
  }

  convertiarraystringa(funzione: any,elemento: any){

    if(funzione == "join"){
      return elemento[0].join(",")+"|"+elemento[1].join(",");
    }else{
      return [elemento.split("|")[0].split(","),elemento.split("|")[1].split(",")]
    }
  }

  creazionelistaduecolori()
  { 
    //this.s("this.alyocolore: ",this.alyocolore)
    var array: any = []
    for (var key in this.alyocolore.fisso) {
      array.push({nome: key, valore: key})
    }
    return array;
  }

  creazione_valori(fine: any,intervallo: any,unitadimisura: any){
    var array: any = []

    array.push({nome: "",valore: ""})
    for(var unita of unitadimisura){
      for(var valore of this.range(fine,intervallo)){
        array.push({nome: valore+" "+unita,valore: valore+unita}) 
      }
    }
    return array; 
  }

  range(fine: any,intervallo: any){
    return Array((fine/intervallo)+1).fill(intervallo).map((x,i)=>(i)*x);
  }
  
  aggiornasfondo(){
    $('body').css('background-image', 'url('+this.percorso.false+this.sfondi[""+this.alyocolore.modalitachiara+""] + ')');
    $('.alyo-sfondo').css('background-image', 'url('+this.percorso.false+this.sfondi[""+this.alyocolore.modalitachiara+""] + ')');
  }

  // lingua(){
  //   this.lista_sezioni[1].label=this.alyolingua.lingue[this.alyolingua.lingua].traduzioni.sezione2;
  //   this.lista_sezioni[2].label=this.alyolingua.lingue[this.alyolingua.lingua].traduzioni.impostazioni;
  // }

  bottoneselezionato(pannello: any,lista: any,elemento: any){

    if(pannello=="classi"){
      for(var elemento2 of lista){
        elemento2.selezionato = false;
      }
      elemento.selezionato = true;
    }
  }

  modifica(attributi: any){

    this.alyowool.s("attributi: ",attributi)

    if(attributi.tabella == "alyocontenitori"){
      
      var provisorio = attributi.valore
      provisorio[attributi.posizione] = attributi.elemento
      provisorio = attributi.valore
      
      var formdate = new FormData();
      formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+provisorio.join(',')+"' WHERE id = "+attributi.id);
  
      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        //this.alyowool.s("dati: ",dati)
        if(dati.response){   
          attributi.valore[attributi.posizione] = attributi.elemento;
        } 
      });
    }

    if(attributi.tabella == "alyoeventi"){

      var provisorio = attributi.elemento.tipo
      var sql = "UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+provisorio+"' WHERE id = "+attributi.elemento_evento.id
      
      // this.s("provisorio: ",provisorio)
      // this.s("sql: ",sql)

      var formdate = new FormData();
      formdate.append("sql",sql);
  
      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        this.s("DATI: ",dati)
        if(dati.response){   
          attributi.elemento_evento[attributi.attributo] = attributi.elemento;
        } 
      });
      
    
      // elemento2.evento.selettore = elemento3; 
    }

    if(attributi.tabella == "alyoazioni"){

      var sql = "";
      if(attributi.attributo == "tipo"){
        var provisorio = attributi.elemento.tipo
        sql = "UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+provisorio+"' WHERE id = "+attributi.elemento_azione.id
      }

      if(attributi.attributo == "id_componente"){
        var provisorio = attributi.elemento.id
        sql = "UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+provisorio+"' WHERE id = "+this.azione_selezionato.id
      }

      //this.s("provisorio: ",provisorio)
      //this.s("sql: ",sql)

      var formdate = new FormData();
      formdate.append("sql",sql);
  
      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        //this.s("DATI: ",dati);

        if(dati.response){  
          if(attributi.attributo == "tipo")         {attributi.elemento_azione[attributi.attributo] = attributi.elemento}
          if(attributi.attributo == "id_componente"){this.azione_selezionato.elemento = attributi.elemento}   
        } 
      });
      
    }   
  }

  s(intestazione: any, testo: any){
    console.log();
    console.log(intestazione);
    console.log(testo);
    console.log();
  }

}
