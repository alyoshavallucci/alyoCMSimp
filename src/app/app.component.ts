import { Component, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import { faPlus, faMinus, faBars, faGripVertical, faXmark, faTrash, faClone, faArrowUpFromBracket, faPhone, faArrowDownWideShort, faCircleChevronLeft, faRightLeft, faImage, faListUl, faFolder, faChevronLeft, faFileCode, faHome, faGear, faListOl, faIcons,faCircleDot, faEye, faA, faUser, faCalendarDays, faLocationDot, faFontAwesome, faGlobe, faCar, faEnvelope, faUtensils, faBriefcase, faBuilding, faMapLocationDot, faGraduationCap, faSchool, faCheckToSlot, faEarthEurope, faAppleAlt, faLaptopCode, faFont, faBrain, faUserTie, faDiagramProject, faNoteSticky } from '@fortawesome/free-solid-svg-icons'
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
  lista_componenti: any = []

  pc:               any = [];
  pannello = false;
  pannello_eventi   = false;
  selezionato       = true;

  velocita: any = "10000";

  elemento: any = [];
  elemento_selezionato: any = {};
  componente: any = []

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
  fa: any            = {fa: ['a','home','piu','meno','lista','listanumeri','griglia','cestino',"copia","condividi","telefono","x","ordine","indietro","scambio","scambio","cartella","indietro","css",'impostazioni','icone','cerchiopunto','occhio',"utente","calendario","locazione","nazione","internet","macchina","email","ristorante","lavoro","azienda","indirizzo","istruzione","scuola","lingua","mela","software","font","voto","capacita","progetto","referente","nota"],
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
  cerchiopunto:{nome: "cerchiopunto",valore: faCircleDot},occhio:{nome: "occhio",valore: faEye},
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
  nota: {nome: "nota",valore: faNoteSticky}

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
    
        this.lista_bottoni.push("")
        this.elemento = this.creazione(dati[0])
        this.elemento = this.assegnazione(this.elemento)

        //this.s("this.lista_componenti: ",this.lista_componenti)
      
      })

  }

  creazione(elemento: any){

    this.lista_componenti.push(elemento)

    elemento.classe = elemento.classe.split(",");
    elemento.eventi = elemento.eventi.split(",");
    if(elemento.tipo == "BTN"){this.lista_bottoni.push(elemento);elemento['selezionato']=this.selezionato; this.selezionato=false;}
    try{ 
      for(var i=0; i<elemento.lista_componenti.length; i++){ 
        elemento.lista_componenti[i] = this.creazione(elemento.lista_componenti[i]);   
      } 
    }
    catch{}

    return elemento;
  }

  assegnazione(elemento: any){
    
    if(elemento.eventi[0] != 0){
      //this.alyowool.s("this.lista_bottoni.find((elemento: any) => {return elemento.id}): ",this.lista_bottoni.find((ele: any) => {return ele.id == elemento.eventi[0]}))
      elemento.eventi[0] = this.lista_bottoni.find((ele: any) => {return ele.id == elemento.eventi[0]})
    }

    if(elemento.eventi[1] != 0){
      //this.alyowool.s("this.lista_bottoni.find((elemento: any) => {return elemento.id}): ",this.lista_bottoni.find((ele: any) => {return ele.id == elemento.eventi[1]}))
      elemento.eventi[1] = this.lista_bottoni.find((ele: any) => {return ele.id == elemento.eventi[1]})
    }

    try{ 
      for(var i=0; i<elemento.lista_componenti.length; i++){ 
        elemento.lista_componenti[i] = this.assegnazione(elemento.lista_componenti[i]);   
      } 
    }
    catch{}

    return elemento;
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

    if(attributi.funzione == "classe"){
      
      var provisorio = attributi.valore
      provisorio[attributi.posizione] = attributi.elemento
      provisorio = attributi.valore
      
      var formdate = new FormData();
      formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+provisorio.join(',')+"' WHERE id = "+attributi.id);
  
      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        this.alyowool.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
        if(dati.response){   
          attributi.valore[attributi.posizione] = attributi.elemento;
        } 
      });
    }

    if(attributi.funzione == "eventi"){

      var provisorio = this.elemento_selezionato.eventi
      provisorio[attributi.posizione] = attributi.valore != '' ? attributi.valore:0

      var valori = [this.elemento_selezionato.eventi[0].id != undefined ? this.elemento_selezionato.eventi[0].id:0
                   ,this.elemento_selezionato.eventi[1].id != undefined ? this.elemento_selezionato.eventi[1].id:0]
      valori[attributi.posizione] = attributi.valore != '' ? attributi.valore.id:0


      var formdate = new FormData();
      formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+valori.join(',')+"' WHERE id = "+this.elemento_selezionato.id);

      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {

        //this.alyowool.s("dati: ",dati)
        if(dati.response){   
          this.elemento_selezionato.eventi[attributi.posizione] = attributi.valore;
        } 
      });
    }

    // if(attributi.tabella == "alyoicone"){
    //   var provisorio = this.elemento.classe
    //   provisorio[attributi.posizione]=attributi.elemento;
    //   var formdate = new FormData();
    //   formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+attributi.id);

    //   this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
    //     this.alyowool.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
    //     if(dati.response){   
    //       this.elemento_selezionato.componente["valore"] = attributi.valore;
    //     } 
    //   });
    // }
    
  }

  s(intestazione: any, testo: any){
    console.log();
    console.log(intestazione);
    console.log(testo);
    console.log();
  }



}
