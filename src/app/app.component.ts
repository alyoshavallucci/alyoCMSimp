import { Component } from '@angular/core';
import * as $ from 'jquery';
import { faPlus, faMinus, faBars, faGripVertical, faXmark, faTrash, faClone, faArrowUpFromBracket, faPhone, faArrowDownWideShort, faCircleChevronLeft, faRightLeft, faImage, faListUl, faFolder, faChevronLeft, faFileCode, faHome, faGear, faListOl, faIcons,faCircleDot, faEye, faA, faUser, faCalendarDays, faLocationDot, faFontAwesome, faGlobe, faCar, faEnvelope, faUtensils, faBriefcase, faBuilding, faMapLocationDot, faGraduationCap, faSchool, faCheckToSlot, faEarthEurope, faAppleAlt, faLaptopCode, faFont, faBrain, faUserTie, faDiagramProject, faNoteSticky, faEquals,faEyeSlash, faBrush, faBox, faCircle, faCircleCheck, faFilePen, faFileLines, faArrowUpShortWide, faTextHeight, faLink } from '@fortawesome/free-solid-svg-icons'
import { AlyoService } from './alyo.service';
import { CdkDragDrop, moveItemInArray,} from '@angular/cdk/drag-drop';

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

  //-----------------------alyo sviluppo ----------------
  
  id_padre = "1";
  percorso_cartella = "alyosviluppo/"; // ./
  percorso_php      = "./../../" // ./php/ *percorso dei file alla posizione indeitro del padre ( alyowool );

  //-----------------------alyo sviluppo IMPOSTAZIONI ----------------

  // id_padre = "1";
  // percorso_cartella = "alyosviluppo/";  // ./../
  // percorso_php      = "./../../../" // ./php/ *percorso dei file alla posizione indeitro del padre ( alyowool );

  //-----------------------sito normale----------------
  
  // id_padre = "408";
  // //percorso_cartella = "";
  // percorso_cartella = "alyocms/";
  // percorso_php     = "./../" // ./php/ *percorso dei file alla posizione indeitro del padre ( alyowool );

  percorso_sito     = "https://www.alyowool.com/"+this.percorso_cartella;
  percorso_alyowool = "https://www.alyowool.com/";


  //--------------------------------------------------------

  sezione:                  string = "NEGOZIO"
  ordine:                   string = "CRE";
  sezione_selezionata:      string = "CSS";

  tipi_componenti:         any = [
    {tipo: "CNT",nome: "Contenitori" ,classi: "alyo-altezza-300px" },
    {tipo: "ICO",nome: "Icone"       ,classi: "alyo-altezza-100px" },
    {tipo: "TXT",nome: "Testi"       ,classi: "alyo-altezza-100px" },
    {tipo: "TXA",nome: "Testi Area"  ,classi: "alyo-altezza-300px" },
    {tipo: "BTN",nome: "Bottoni"     ,classi: "alyo-altezza-300px" },
    {tipo: "LNK",nome: "Link"        ,classi: "alyo-altezza-300px" },
    {tipo: "IMG",nome: "Immagini"    ,classi: "alyo-altezza-200px" },
    {tipo: "MCS",nome: "Modalita Chiara Scura"    ,classi: "alyo-altezza-200px" },
    {tipo: "FRM",nome: "Iframe"    ,classi: "alyo-altezza-200px" },
  ]

  tipi_link:         any = [
    {tipo: "URL" ,nome: "🌐 Url"     ,valore: ""},
    {tipo: "EML" ,nome: "📧 Email"   ,valore: "mailto:"},
    {tipo: "TEL" ,nome: "📱 Telefono",valore: "tel:"},
    {tipo: "WHAP",nome: "💬 Whatsapp",valore: "https://wa.me/"},
  ]

  tipi_immagini:     any = [
    {tipo: "CRM",nome: "⬆️ Caricamento"},
    {tipo: "URL",nome: "🌐 Url  "      }
  ]

  tipi_classi: any = [
    {tipo: "GCLS",nome: "Gruppi Classe"        },
    {tipo: "GCLN",nome: "Colonna  Componente"  },
    {tipo: "CHI" ,nome: "Modalita Chiaro"      },
    {tipo: "SCU" ,nome: "Modalita Scura"       },
    {tipo: "SLZ" ,nome: "Selezionato"          },
    {tipo: "NSLZ",nome: "Non Selezionato"      },
    {tipo: "MCLR",nome: "Multi Colore"         },
  ]

  tipi_sino: any = [
    {tipo: "SI",nome: "Si"  },
    {tipo: "NO",nome: "No"  },
  ]

  tipi_impostazioni_componenti: any = [
    {tipo: "VSB",nome: "Visibile", predifinito: "SI"},
    {tipo: "CLR",nome: "Colorato", predifinito: "NO"}
  ]

  //alyocollegamento2:  any
  alyo:               any = this;

  lista_componenti_sito:            any = [];
  lista_componenti:            any = [];
  lista_componenti_visibili:   any = [];
  lista_gruppi_classi:         any = {id: 0,lista: []};
  lista_gruppi_classi_negozio: any = {id: 0,lista: []};

  tipi_eventi: any = [
    {tipo:  "0",    nome: "Nessun Elemento"},
    {tipo:  "CLK",  nome: "Click"},
    {tipo:  "DCLK", nome: "Doppio Click"},
    {tipo:  "CLKP", nome: "Click Prolungato"},
  ];

  tipi_azioni: any = [
    {tipo:  "0",     nome: "Nessun Elemento"},
    {tipo:  "CLR",   nome: "Colorazione"},
    {tipo:  "DCLR",  nome: "Decolorazione"},
    {tipo:  "CLRD",  nome: "Colorazione e decolorazione"},
    {tipo:  "CMP",   nome: "Comparsa"},
    {tipo:  "SCMP",  nome: "Scomparsa"},
    {tipo:  "CMPS",  nome: "Comparsa e scoparsa"},
    {tipo:  "ET-1",nome: "Escludi Tutti -1"},
  ]

  tipo_visualizzazione: boolean = true;
  elimina:          boolean = false;

  pannello              = false;
  pannello_impostazioni = false;
  // pannello_tipi         = false;

  selezionato           = false;
  azione_selezionato: any;
  cestino = false;
  velocita: any = "10000";

  elemento:             any = {};
  elemento_selezionato: any = {};
  elemento_selezionato2: any = {};
  
  sfondi: any = {
                  true:  this.percorso_sito+"assets/immagini/sfondi/sfondo.gif",
                  false: this.percorso_sito+"assets/immagini/sfondi/sfondofluo.gif"                 
                }
              
  colori_esadecimali = {"bianco":"ffffff",nero:"000000","rosso": "ff0000","verde":"00ff00","blu":"0000ff","rosavivo":"FF007F","giallo":"FFFF00","viola":"800080","marrone":"964B00","arancione":"FF6600","turchese":"30D5C8","orchidea":"DA70D6","giallofluo":"e2f705","rosafluo":"f50b86","arancionefluo":"ff6f00","verdefluo":"a3f307","azzurrofluo":"05f9e2","grigio5":"F7F7F7","grigio10":"EFEFEF" ,"grigio15":"8F8F8F","grigio20":"D2D2D2","grigio25":"C0C0C0","grigio30":"B2B2B2", "grigio35":"A2A2A2", "grigio40":"8F8F8F", "grigio50":"808080", "grigio60":"5F5F5F", "grigio70":"4F4F4F",  "grigio75":"404040", "grigio80":"2F2F2F", "grigioasparago":"465945", "grigioardesiascuro":"2F4F4F", "grigioardesiachiaro":"778899", "grigiocenere":"E4E5E0",  "grigiotopo":"646B63"}
  colori: any        = ["bianco","nero","rosso","verde","blu","rosavivo","giallo","viola","marrone","arancione","turchese","orchidea","giallofluo","rosafluo","arancionefluo","verdefluo","azzurrofluo","grigio5","grigio10" ,"grigio15","grigio20","grigio25" ,"grigio30" , "grigio35" , "grigio40" , "grigio50" , "grigio60" , "grigio70" ,  "grigio75" , "grigio80" , "grigioasparago", "grigioardesiascuro" , "grigioardesiachiaro" , "grigiocenere" ,  "grigiotopo"];
  fa: any            = {fa: ['a','home','piu','meno','lista','listanumeri','griglia','cestino',"copia","condividi","telefono","x","ordine","ordinedecrescente","indietro1","scambio","scambio","cartella","indietro2","css",'impostazioni','icone','cerchiopunto','occhio','occhiochiuso',"utente","calendario","locazione","nazione","internet","macchina","email","ristorante","lavoro","azienda","indirizzo","istruzione","scuola","lingua","mela","software","font","voto","capacita","progetto","referente","nota","evento","colore","contenitore","b1","b2","modifica","nuovo","testo","link"],
  "a":{nome: "a",valore: faA},"":{nome:"",valore:""},"home":{nome:"home",valore:faHome}, 
  piu: {nome: "piu",valore: faPlus}, meno: {nome: "meno",valore: faMinus}, 
  lista: {nome: "lista",valore: faBars},listanumeri: {nome: "listanumeri",valore: faListOl},
  griglia: {nome: "griglia",valore: faGripVertical},cestino: {nome: "cestino",valore:faTrash}, 
  copia: {nome: "copia",valore:faClone}, condividi: {nome: "condividi",valore: faArrowUpFromBracket}, 
  telefono: {nome: "telefono",valore:faPhone}, x: {nome: "x",valore: faXmark}, 
  ordine: {nome: "ordine",valore: faArrowDownWideShort}, 
  ordinedecrescente: {nome: "ordinedecrescente",valore: faArrowUpShortWide},
  indietro1: {nome: "indietro",valore: faCircleChevronLeft}, 
  scambio: {nome: "scambio",valore: faRightLeft}, immagine: {nome: "immagine",valore: faImage}, 
  listaul: {nome: "Lista",valore: faListUl}, cartella: {nome: "Cartella", valore: faFolder},
  indietro2: {nome: "indietro",valore: faChevronLeft},css:{nome: "css",valore: faFileCode},
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
  colore: {nome:  "colore",valore: faBrush},
  contenitore: {nome:  "contenitore",valore: faBox},
  b1: {nome:  "b1",valore: faCircle},
  b2: {nome:  "b2",valore: faCircleCheck},
  modifica: {nome: "modifica", valore: faFilePen},
  nuovo: {nome: "nuovo", valore: faFileLines},
  testo: {nome: "testo", valore: faTextHeight},
  testoarea: {nome: "testoarea", valore: faFileLines},
  link: {nome: "link",valore: faLink}
}

constructor(private alyoservice: AlyoService){}

ngOnInit(): void { 
  setTimeout(() => {
    this.caricamento();
    this.lista_funzioni();
    this.intervallo();
  },200);
}



  //-------- FUNZIONI ELEMENTARI (CARICAMENTO,INSERIMENTO,MODIFICA,CANCELLAZIONE)------------------------

  caricamento(){

    /*
      IMPOSTAZIONI:
        NEGOZIO
        NEGOZIO-GRUPPI-CLASSI
        GRUPPI-CLASSI, 
        
      COMPONENTE:
        COMPONENTE
        NEGOZIO-SELEZIONE

    */

    this.caricamento_componenti();

  }

  impostazioni_iniziale(elemento:any){
    
    this.s("elemento.id: ",elemento.id)
    if(elemento.id == 1){
      this.elemento_selezionato = elemento; 
      this.pannello = true; 
      this.sezione_selezionata = "AGG";
      this.sezione = "ESISTENTE";
      this.caricamento_lista_componenti();
    }

    if(elemento.tipo == "CNT" || elemento.tipo == "BTN" || elemento.tipo == "LNK"){
      for(var ele of elemento.lista){
        this.impostazioni_iniziale(ele);
      }
    }
  }



  inserimento(attributi: any){

    this.s("attributi: ",attributi)
    var formdate = new FormData();

    //---------ELEMENTI---------
    if(attributi.funzione == "alyocollegamenti"){

      var sql_ins = "";
      sql_ins += attributi.tabella2 == 'alyocontenitori'             ? "INSERT INTO alyocontenitori          ()            VALUES ();":"";
      sql_ins += attributi.tabella2 == 'alyoicone'                   ? "INSERT INTO alyoicone                (valore)      VALUES ('');":""; 
      sql_ins += attributi.tabella2 == 'alyotesti'                   ? "INSERT INTO alyotesti                (valore)      VALUES ('');":""; 
      sql_ins += attributi.tabella2 == 'alyotestiarea'               ? "INSERT INTO alyotestiarea            (valore)      VALUES ('');":""; 
      sql_ins += attributi.tabella2 == 'alyolink'                    ? "INSERT INTO alyolink                 (valore,tipo) VALUES ('','');":"";    
      sql_ins += attributi.tabella2 == 'alyobottoni'                 ? "INSERT INTO alyobottoni              ()            VALUES ();":""; 
      sql_ins += attributi.tabella2 == 'alyoimmagini'                ? "INSERT INTO alyoimmagini             (valore,tipo) VALUES ('','');":"";
      sql_ins += attributi.tabella2 == 'alyomodalitabiancascura'     ? "INSERT INTO alyomodalitabiancascura  ()            VALUES ();":"";
      sql_ins += attributi.tabella2 == 'alyoiframe'                  ? "INSERT INTO alyoiframe               (valore)      VALUES ('');":"";

      sql_ins +=" INSERT INTO alyocollegamenti (tipo,id_componente,id_padre,posizione) "+
                "SELECT '"+attributi.tipo+"',MAX(cmp.id),'"+attributi.id_padre+"',CASE WHEN EXISTS(SELECT * FROM alyocollegamenti WHERE id_padre = '"+attributi.id_padre+"') THEN (SELECT Max(posizione) FROM alyocollegamenti WHERE id_padre = '"+attributi.id_padre+"')+1 ELSE 0 END AS posizione FROM "+attributi.tabella2+" AS cmp";
      
      var sql = "SELECT id FROM alyocollegamenti ORDER BY id DESC LIMIT 1";

      this.s("sql_ins: ",sql_ins)
      this.s("sql: ",sql)

      formdate.append("sql_ins",sql_ins);
      formdate.append("sql",sql);   
      formdate.append("funzione","COMPONENTI"); 
      this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
        
        this.s("DATI: ",dati)
        if(dati.risultato){
          this.elemento_selezionato.lista.push(dati.elemento);
        }  
        //this.s("this.elemento_selezionato: ",this.elemento_selezionato.lista)
      });
          
    }

    if(attributi.funzione == "alyocopianuovicollegamenti"){

      formdate.append("id",attributi.id);  
      formdate.append("id_padre",attributi.id_padre); 
      formdate.append("funzione","COPIA-NUOVI-COLLEGAMENTI-ALBERO"); 

      this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
        
        this.s("DATI: ",dati)
        if(dati.risultato){
          this.elemento_selezionato.lista.push(dati.elemento);
        }  

      });
    }

    if(attributi.funzione == "alyocreanuovocollegamentocomponenteesistente"){

      formdate.append("id",attributi.id);  
      formdate.append("id_padre",attributi.id_padre); 
      formdate.append("funzione","COPIA-NUOVI-COLLEGAMENTI-COMPONENTE-ESISTENTE-ALBERO"); 

      this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
        
        this.s("DATI: ",dati)
        if(dati.risultato){
          this.elemento_selezionato.lista.push(dati.elemento);
        }  

      });
    }

    //---------EVENTI----------
    if(attributi.funzione == "alyoeventi"){
      
      var sql_ins ="INSERT INTO "+attributi.tabellacollegamento+" (tipo,id_padre,posizione) "+
                   "SELECT '"+attributi.tipo+"','"+attributi.id_padre+"',CASE WHEN EXISTS(SELECT * FROM "+attributi.tabellacollegamento+" WHERE id_padre = '"+attributi.id_padre+"') THEN (SELECT Max(posizione) FROM "+attributi.tabellacollegamento+" WHERE id_padre = '"+attributi.id_padre+"')+1 ELSE 0 END AS posizione";

      var sql_vis = "SELECT * FROM "+attributi.tabellacollegamento+" ORDER BY id DESC LIMIT 1";
      
      this.s("sql_ins: ",sql_ins);
      this.s("sql_ins: ",sql_vis);
      formdate.append("sql_ins",sql_ins);
      formdate.append("sql_vis",sql_vis);   
      formdate.append("funzione","eventi"); 
      
      this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
        this.s("DATI: ",dati)
        if(dati.risultato){
          attributi.padre[attributi.attributo].push(dati.elemento);
        }  
      });
      
    }

    //---------AZIONI----------
    if(attributi.funzione == "alyoazioni"){
  
      var sql_ins = "INSERT INTO "+attributi.tabellacollegamento+" (tipo,id_componente,id_padre,posizione) "+
                    "SELECT '"+attributi.tipo+"',"+attributi.id_componente+","+attributi.id_padre+",CASE WHEN EXISTS(SELECT * FROM "+attributi.tabellacollegamento+" WHERE id_padre = "+attributi.id_padre+") THEN (SELECT Max(posizione) FROM "+attributi.tabellacollegamento+" WHERE id_padre = "+attributi.id_padre+")+1 ELSE 0 END AS posizione";

      var sql_vis = "SELECT * FROM "+attributi.tabellacollegamento+" ORDER BY id DESC LIMIT 1";
      
      this.s("sql_ins: ",sql_ins);
      this.s("sql_ins: ",sql_vis);
      formdate.append("sql_ins",sql_ins);
      formdate.append("sql_vis",sql_vis);   
      formdate.append("funzione","azioni"); 
      
      this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
        this.s("DATI: ",dati)
        if(dati.risultato){
          attributi.padre[attributi.attributo].push(dati.elemento);
        }  
      });
      
    }

    //---------CLASSI----------
    if(attributi.funzione == "alyogruppiclassi"){

      var sql_ins  = "INSERT INTO "+attributi.tabella+" (valore) VALUES ('');";
          sql_ins += "INSERT INTO "+attributi.tabellacollegamento+" (tipo,id_componente,id_padre,posizione) "+
                     "SELECT '"+attributi.tipo+"',MAX(cmp.id),"+attributi.id_padre+",CASE WHEN EXISTS(SELECT * FROM "+attributi.tabellacollegamento+" WHERE id_padre = "+attributi.id_padre+") THEN (SELECT Max(posizione) FROM "+attributi.tabellacollegamento+" WHERE id_padre = "+attributi.id_padre+")+1 ELSE 0 END AS posizione FROM "+attributi.tabella+" AS cmp";
      
      var sql_vis = "SELECT id,posizione,tipo,id_padre FROM "+attributi.tabellacollegamento+" ORDER BY id DESC LIMIT 1;SELECT * FROM "+attributi.tabella+" ORDER BY id DESC LIMIT 1";

      //this.s("sql_ins: ",sql_ins)
      formdate.append("sql_ins",sql_ins);
      formdate.append("sql_vis",sql_vis);   
      formdate.append("funzione","classi"); 
 
      this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
      
        this.s("DATI: ",dati)
        if(dati.risultato){
          attributi.padre[attributi.attributo].unshift(dati.elemento);
        }  
      });

    }

    if(attributi.funzione == "alyoclassi"){

      var sql_ins = "INSERT INTO "+attributi.tabella+" (nome,valore) VALUES ('','');";
          sql_ins +="INSERT INTO "+attributi.tabellacollegamento+" (tipo,id_componente,id_padre,posizione) "+
                    "SELECT '"+attributi.tipo+"',MAX(cmp.id),"+attributi.id_padre+",CASE WHEN EXISTS(SELECT * FROM "+attributi.tabellacollegamento+" WHERE id_padre = "+attributi.id_padre+") THEN (SELECT Max(posizione) FROM "+attributi.tabellacollegamento+" WHERE id_padre = "+attributi.id_padre+")+1 ELSE 0 END AS posizione FROM "+attributi.tabella+" AS cmp";
      
      var sql_vis = "SELECT id,posizione,tipo,id_padre FROM "+attributi.tabellacollegamento+" ORDER BY id DESC LIMIT 1;SELECT * FROM "+attributi.tabella+" ORDER BY id DESC LIMIT 1";

      //this.s("sql_ins: ",sql_ins)
      formdate.append("sql_ins",sql_ins);
      formdate.append("sql_vis",sql_vis);   
      formdate.append("funzione","classi"); 
 
      this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
      
        //this.s("DATI: ",dati)
        if(dati.risultato){
          attributi.padre[attributi.attributo].unshift(dati.elemento);
        }  
      });
    }

    if(attributi.funzione == "alyocollegamentigruppiclassi"){

      //this.s("attributi.padre:  ",attributi.padre)
      var elemento_collegamento = this.ritorna_ele(attributi.padre[attributi.attributo],'id',attributi.id_componente,['componente'])
      if(elemento_collegamento){
        this.funzione_elimina({funzione: 'alyocollegamentigruppiclassi',tabellacollegamento: 'alyocollegamentigruppiclassinegozio',id: elemento_collegamento.id,padre: attributi.padre,attributo: 'lista'})
      }else{
        var sql_ins = "";
        sql_ins +="INSERT INTO "+attributi.tabellacollegamento+" (tipo,id_componente,id_padre,posizione) "+
                  "SELECT     '"+attributi.tipo+"',"+attributi.id_componente+","+attributi.id_padre+",CASE WHEN EXISTS(SELECT * FROM "+attributi.tabellacollegamento+" WHERE id_padre = "+attributi.id_padre+") THEN (SELECT Max(posizione) FROM "+attributi.tabellacollegamento+" WHERE id_padre = "+attributi.id_padre+")+1 ELSE 0 END AS posizione";
        
        var sql_vis = "SELECT id,posizione,tipo,id_padre FROM "+attributi.tabellacollegamento+" ORDER BY id DESC LIMIT 1;SELECT * FROM "+attributi.tabella+" WHERE id = "+attributi.id_componente;
  
        this.s("sql_ins: ",sql_ins.split(';'))
        formdate.append("sql_ins",sql_ins);
        formdate.append("sql_vis",sql_vis);   
        formdate.append("funzione","classi"); 
    
        this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
        
          this.s("DATI: ",dati)
          if(dati.risultato){
            attributi.padre[attributi.attributo].unshift(dati.elemento);
          }  
        });
      }
    
    }

    if(attributi.funzione == "alyocollegamentigruppiclassicomponente"){

      var elemento_collegamento = this.ritorna_ele(attributi.padre.classi,'id',attributi.id_componente,['componente'])

      if(elemento_collegamento){
        this.funzione_elimina({funzione: 'alyocollegamentigruppiclassi',tabellacollegamento: 'alyocollegamentigruppiclassicomponente',id: elemento_collegamento.id,padre: attributi.padre,attributo: 'classi'})
      }else{
        var sql_ins = "";
        sql_ins += "INSERT INTO "+attributi.tabellacollegamento+" (tipo,id_componente,id_padre,posizione) "+
                   "SELECT     '"+attributi.tipo+"',"+attributi.id_componente+",'"+attributi.id_padre+"',CASE WHEN EXISTS(SELECT * FROM "+attributi.tabellacollegamento+" WHERE id_padre = "+attributi.id_padre+") THEN (SELECT Max(posizione) FROM "+attributi.tabellacollegamento+" WHERE id_padre = "+attributi.id_padre+")+1 ELSE 0 END AS posizione";

        var sql_vis = "SELECT * FROM alyocollegamentigruppiclassicomponente ORDER BY id DESC LIMIT 1;"+
                      "SELECT * FROM alyocollegamentigruppiclassinegozio WHERE id_padre = ;"+
                      "SELECT * FROM alyogruppiclassinegozio WHERE id = ;"+
                      "SELECT * FROM alyoclassi WHERE id = ";

        //this.s("sql_ins: ",sql_vis)
        formdate.append("sql_ins",sql_ins);
        formdate.append("sql_vis",sql_vis);   
        formdate.append("funzione","GRUPPI-CLASSI-COMPONENTE"); 
    
        this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
        
          this.s("DATI: ",dati)
          if(dati.risultato){
            attributi.padre[attributi.attributo].unshift(dati.elemento);
          }  
        });
      }
    
    }

    if(attributi.funzione == "alyoimpostazionicomponenti"){

      //this.s("attributi.padre:  ",attributi.padre)
      var elemento_collegamento = this.ritorna_ele(attributi.padre[attributi.attributo],'tipo',attributi.tipo,[])
      if(elemento_collegamento){
        this.funzione_elimina({funzione: 'alyoimpostazionicomponenti',tabellacollegamento: 'alyocollegamentiimpostazionicomponenti',id: elemento_collegamento.id,padre: attributi.padre,attributo: attributi.attributo})
      }else{
        
        var sql_ins =  "INSERT INTO "+attributi.tabella+" (valore) VALUES ('"+attributi.predifinito+"');";
            sql_ins += "INSERT INTO "+attributi.tabellacollegamento+" (tipo,id_componente,id_padre,posizione) "+
                       "SELECT '"+attributi.tipo+"',MAX(cmp.id),'"+attributi.id_padre+"',CASE WHEN EXISTS(SELECT * FROM "+attributi.tabellacollegamento+" WHERE id_padre = '"+attributi.id_padre+"') THEN (SELECT Max(posizione) FROM "+attributi.tabellacollegamento+" WHERE id_padre = '"+attributi.id_padre+"')+1 ELSE 0 END AS posizione FROM "+attributi.tabella+" AS cmp";
    
        var sql_vis = "SELECT id,posizione,tipo,id_padre FROM "+attributi.tabellacollegamento+" ORDER BY id DESC LIMIT 1;SELECT * FROM "+attributi.tabella+" ORDER BY id DESC LIMIT 1";
  
        //this.s("sql_ins: ",sql_ins.split(';'))
        formdate.append("sql_ins",sql_ins);
        formdate.append("sql_vis",sql_vis);   
        formdate.append("funzione","impostazioni"); 
    
        this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
        
          this.s("DATI: ",dati)
          if(dati.risultato){
            attributi.padre[attributi.attributo].unshift(dati.elemento);
          }  
        });
      }
    
    }

  }

  modifica(attributi: any){

    //this.s("attributi: ",attributi)
    if(attributi.funzione == "alyocontenitori"){

      if(attributi.attributo == 'effetti'){

        var formdate = new FormData();
        var sql = "UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+this.elemento_selezionato.id;
        formdate.append("sql",sql);
        // // this.s("sql: ",sql)
        this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
          // // // this.s("DATI: ",dati)
          if(dati.response){   
            this.elemento_selezionato.effetti = attributi.valore;
          } 
        });
      }else{
        var provisorio = attributi.valore
        provisorio[attributi.posizione] = attributi.elemento
        provisorio = attributi.valore
        
        var formdate = new FormData();
        formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+provisorio.join(',')+"' WHERE id = "+attributi.id);
    
        this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
          //// // // this.s("DATI: ",dati)
          if(dati.response){   
            attributi.valore[attributi.posizione] = attributi.elemento;
          } 
        });
      }
    
    }

    if(attributi.funzione == "alyoicone"){
  
      var formdate = new FormData();
      formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+attributi.id);

      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        this.s("DATI: ",dati)
        if(dati.risposta){   
          this.elemento_selezionato.componente.valore = attributi.valore;
        } 
      });
    }

    if(attributi.funzione == "alyoimmagini"){
  
      var formdate = new FormData();
      formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+this.elemento_selezionato.componente.id);

      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        this.alyo.s("DATI:",dati)
        if(dati.risposta){ 
          this.elemento_selezionato.componente.valore  = "";
          this.elemento_selezionato.componente.tipo = attributi.valore;
        } 
      });
    }

    if(attributi.funzione == "alyolink"){

      var formdate = new FormData();
      formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+this.elemento_selezionato.componente.id);
  
      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        this.s("DATI: ",dati)
        if(dati.risposta){   
          this.elemento_selezionato.componente.tipo =  attributi.valore;
        } 
      });
      
    } 

    if(attributi.funzione == "alyocollegamentieventi"){

      var sql = "UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+attributi.id;
      
      var formdate = new FormData();
      formdate.append("sql",sql);
  
      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        this.s("DATI: ",dati)
        if(dati.risposta){   
          this.s("attributi.elemento.tipo: ",attributi.elemento.tipo);
          attributi.elemento.tipo = attributi.valore
        } 
      });
      
    
      // elemento2.evento.selettore = elemento3; 
    }

    if(attributi.funzione == "alyocollegamentiazioni"){

      var sql = "UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+attributi.id;
      
      var formdate = new FormData();
      formdate.append("sql",sql);
  
      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        this.s("DATI: ",dati)
        if(dati.risposta){   
          //this.s("attributi.elemento.tipo: ",attributi.elemento.tipo);
          attributi.elemento[attributi.attributo] = attributi.valore
        } 
      });
      
  
    }

    if(attributi.funzione == "alyocollegamentigruppiclassinegozio"){

      var sql = "UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+attributi.elemento.id;
      var formdate = new FormData();
      formdate.append("sql",sql);
  
      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        
        this.s("DATI: ",dati);
        if(dati.risposta){  
          attributi.elemento[attributi.attributo] = attributi.valore;
        } 
      });
      
    } 

    if(attributi.funzione == "alyoimpostazionicomponenti"){

      sql = "UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+attributi.id;
     
      var formdate = new FormData();
      formdate.append("sql",sql);
  
      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        
        //this.s("DATI: ",dati);
        if(dati.risposta){  
          attributi.elemento.valore = attributi.valore;
        } 
      });
      
    } 

    if(attributi.funzione == "alyoimpostazionivisibilitacomponenti"){

      sql = "UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+attributi.id;
     
      var formdate = new FormData();
      formdate.append("sql",sql);
  
      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        
        this.s("DATI: ",dati);
        if(dati.risposta){ 

          var imp2 = this.ritorna_ele(attributi.elemento.impostazioni,'tipo','VSB',[])
          imp2.componente.valore = attributi.valore;
          
          if(attributi.valore == 'SI'){
            this.caricamento_elemento(attributi.elemento.id,'ALBERO_COMPONENTI')
          }else{
            var ele = this.ritorna_elemento_albero(this.elemento,'id',attributi.elemento.id) 
            this.elimina_elemento(ele)
          }

        } 
      });
      
    } 
    
  }

  funzione_elimina(attributi: any){

    //this.s("FUNZIONE ELIMINA attributi: ",attributi); 
    var formdate = new FormData();
    if(attributi.funzione == "alyocollegamenti"){
      
      var sql_ins  = "DELETE FROM "+attributi.tabella+" WHERE id = "+attributi.id;
      var messaggio = "ELEMENTI ELIMINATI CON SUCCESSO"
      
      formdate.append("sql_ins",sql_ins);
      formdate.append("messaggio",messaggio);

      this.alyoservice.alyo_sql(formdate).subscribe(dati => {
        
        this.s("DATI: ",dati);

        if(dati.risultato){
          attributi.padre.lista = attributi.padre.lista.filter((ele: any)=>{return ele.id != attributi.id});
        }
      });
    }


    if(attributi.funzione == "alyogruppiclassi"){
      
      var sql_ins  = "DELETE FROM "+attributi.tabellacollegamento+" WHERE id = "+attributi.id+"; DELETE FROM "+attributi.tabella+" WHERE id = "+attributi.id_componente;
      var messaggio = "ELEMENTI ELIMINATI CON SUCCESSO"
      
      formdate.append("sql_ins",sql_ins);
      formdate.append("messaggio",messaggio);

      this.alyoservice.alyo_sql(formdate).subscribe(dati => {
        
        //this.s("DATI: ",dati);

        if(dati.risultato){
          attributi.padre[attributi.attributo] = attributi.padre[attributi.attributo].filter((ele: any)=>{return ele.id != attributi.id});
        }
      });
    }

    if(attributi.funzione == "alyocollegamentigruppiclassi"){
      
      var sql_ins  = "DELETE FROM "+attributi.tabellacollegamento+" WHERE id = "+attributi.id;
      var messaggio = "ELEMENTO COLLEGAMENTO ELIMINATO CON SUCCESSO"
      
      formdate.append("sql_ins",sql_ins);
      formdate.append("messaggio",messaggio);
      this.alyoservice.alyo_sql(formdate).subscribe(dati => {
        
        //this.s("DATI: ",dati);

        if(dati.risultato){
          attributi.padre[attributi.attributo] = attributi.padre[attributi.attributo].filter((ele: any)=>{return ele.id != attributi.id});
        }  
        
      });
    }

    if(attributi.funzione == "alyoimpostazionicomponenti"){
      
      var sql_ins  = "DELETE FROM "+attributi.tabellacollegamento+" WHERE id = "+attributi.id;
      var messaggio = "ELEMENTO COLLEGAMENTO ELIMINATO CON SUCCESSO"
      
      formdate.append("sql_ins",sql_ins);
      formdate.append("messaggio",messaggio);
      this.alyoservice.alyo_sql(formdate).subscribe(dati => {
        
        //this.s("DATI: ",dati);

        if(dati.risultato){
          attributi.padre[attributi.attributo] = attributi.padre[attributi.attributo].filter((ele: any)=>{return ele.id != attributi.id});
        }  
        
      });
    }

  }

  //-------- ALTRE FUNZIONI ------------------------
  apri_chiudi_pannello(panello: string,sezione: string = "",stato: boolean){
     
    switch (panello) {
      case "IMPOSTAZIONI":
        if(stato){this.pannello_impostazioni = true;  this.sezione = sezione; this.caricamento_classi(this.sezione);}
        else{     this.pannello_impostazioni = false; this.lista_gruppi_classi.lista =  [];}
        break;
      case "COMPONENTE":
        if(stato){this.pannello = true; this.sezione = sezione; this.sezione_selezionata = "CSS"; this.caricamento_classi(this.sezione);}
        else{     this.pannello = false;  }
        break;
    }
  }

  caricamento_classi(sezione: string){

    this.lista_gruppi_classi.lista = [];
    var sql_vis = "";
    var id_padre = "";

    switch (sezione) {
      case "GRUPPI-CLASSI":
        sql_vis = "SELECT * FROM alyocollegamentigruppiclassi WHERE id_padre = ;SELECT * FROM alyogruppiclassi WHERE id = ;SELECT * FROM alyoclassi WHERE id = ";
        id_padre = "0";
        break;
      case "NEGOZIO":
        this.lista_gruppi_classi_negozio.lista = [];
        sql_vis = "SELECT * FROM alyocollegamentigruppiclassinegozio WHERE id_padre = ;SELECT * FROM alyogruppiclassinegozio WHERE id = ;SELECT * FROM alyoclassi WHERE id = ";
        id_padre = "0";
        break;
      case "COMPONENTE":
        sql_vis = "SELECT * FROM alyocollegamentigruppiclassicomponente WHERE id_padre = ;SELECT * FROM alyogruppiclassinegozio WHERE id = ;SELECT * FROM alyoclassi WHERE id = ";
        id_padre = "0";
        break;
      case "NEGOZIO-SELEZIONE":
        this.lista_gruppi_classi_negozio.lista = [];
        sql_vis = "SELECT * FROM alyocollegamentigruppiclassinegozio WHERE id_padre = ;SELECT * FROM alyogruppiclassinegozio WHERE id = ;SELECT * FROM alyoclassi WHERE id = ";
        id_padre = "0";
        break;

    }

    var formdate = new FormData();
    formdate.append("sql_vis",sql_vis);
    formdate.append("id_padre",id_padre);
    formdate.append("opzione","ALBERO_CLASSI");
    //this.s("SQL VIS: ",sql_vis)
    this.alyoservice.alyo_caricamento(formdate).subscribe(dati => {
      //this.s("LISTA GRUPPI CLASSI: ",dati)

      switch (sezione) {
        case "GRUPPI-CLASSI":
          this.lista_gruppi_classi.lista = dati;
          break;
        case "NEGOZIO":
          this.lista_gruppi_classi_negozio.lista = dati;
          break;
        case "NEGOZIO-SELEZIONE":
          this.lista_gruppi_classi_negozio.lista = dati;
          break;
      }


      
    })
  }

  caricamento_lista_componenti(){
    
    var formdate = new FormData();
    formdate.append("sql",'');
    formdate.append("opzione","LISTA_COMPONENTI");
    formdate.append("padre",'1');
    
    this.alyoservice.alyo_caricamento(formdate).subscribe(dati => {
      //this.s("LISTA COMPONENTI: ",dati);
      this.lista_componenti = dati;
    })
    
  }
  
  caricamento_lista_componenti_sito(){
    
    var formdate = new FormData();
    formdate.append("sql",'');
    formdate.append("opzione","LISTA_COMPONENTI");
    formdate.append("padre",this.id_padre);
    
    this.alyoservice.alyo_caricamento(formdate).subscribe(dati => {
      //this.s("LISTA COMPONENTI: ",dati);
      this.lista_componenti_sito = dati;
    })
    
  }

  caricamento_componenti(){
    
    var formdate = new FormData();
    formdate.append("sql",'');
    formdate.append("opzione","ALBERO_COMPONENTI");
    formdate.append("padre",this.id_padre);
    
    this.alyoservice.alyo_caricamento(formdate).subscribe(dati => {
      
      this.s("ALBERO COMPONENTI: ",dati);
      this.elemento = dati;
      //this.impostazioni_iniziale(this.elemento);
      
    })
    
  }

  caricamento_lista_visibili(){
    
    var formdate = new FormData();
    formdate.append("sql",'');
    formdate.append("opzione","ALBERO_COMPONENTI_VISIBILI");
    formdate.append("padre",'1');
    
    this.alyoservice.alyo_caricamento(formdate).subscribe(dati => {
      this.s("LISTA COMPONENTI VISIBILI: ",dati);
      this.lista_componenti = dati;
    })
    
  }

  caricamento_lista(padre: string, tipo: string,sql: string){
    
    var formdate = new FormData();
    formdate.append("sql",sql);
    formdate.append("opzione",tipo);
    formdate.append("padre",padre);
    
    this.alyoservice.alyo_caricamento(formdate).subscribe(dati => {

      //// this.s("DATI CARICAMENTO LISTA: ",dati);
      this.creazione2(dati);
      // this.s("lista_componenti: ",this.lista_componenti);
    })
    
  }

  ritorna_ele(lista: any,attributo1: string = 'null',attributo2: string = 'null',c: any = ''){
    
    if(lista == undefined || lista.length == 0) {return undefined};

    // this.s("FUNZIONE:","ritorna_ele")
    // this.s("lista:",lista)
    // this.s("collegamento:",collegamento)

    if(c.length == 0){
      return lista.find((ele: any)=>{return ele[attributo1] == attributo2; });
    }

    if(c.length == 1){
      return lista.find((ele: any)=>{return ele[c[0]][attributo1] == attributo2; });
    }

    if(c.length == 2){
      return lista.find((ele: any)=>{return ele[c[0]][c[1]][attributo1] == attributo2; });
    }

    if(c.length == 3){
      return lista.find((ele: any)=>{return ele[c[0]][c[1]][c[2]][attributo1] == attributo2; });
    }

    if(c.length == 4){
      return lista.find((ele: any)=>{return ele[c[0]][c[1]][c[2]][c[3]][attributo1] == attributo2; });
    }

  }

  filtro_ele(lista: any,attributo1: string = 'null',attributo2: string = 'null',c: any = []){
    
    if(lista == undefined || lista.length == 0) {return undefined};

    // this.s("FUNZIONE:","filtro_ele")
    // this.s("lista:",lista)
    // this.s("collegamento:",collegamento)

    if(c.length == 0){
      return lista.filter((ele: any)=>{return ele[attributo1] == attributo2; });
    }

    if(c.length == 1){
      return lista.filter((ele: any)=>{return ele[c[0]][attributo1] == attributo2; });
    }

    if(c.length == 2){
      return lista.filter((ele: any)=>{return ele[c[0]][c[1]][attributo1] == attributo2; });
    }

    if(c.length == 3){
      return lista.filter((ele: any)=>{return ele[c[0]][c[1]][c[2]][attributo1] == attributo2; });
    }

    if(c.length == 4){
      return lista.filter((ele: any)=>{return ele[c[0]][c[1]][c[2]][c[3]][attributo1] == attributo2; });
    }
    
    return lista;
  }

  filtro_esclusione_ele(lista: any,attributo1: string = 'null',attributo2: string = 'null',c: any = []){
    
    if(lista == undefined || lista.length == 0) {return undefined};

    // this.s("FUNZIONE:","filtro_esclusione_ele");
    // this.s("lista:",lista);
    // this.s("collegamento:",collegamento);

    if(c.length == 0){
      return lista.filter((ele: any)=>{return ele[attributo1] != attributo2; });
    }

    if(c.length == 1){
      return lista.filter((ele: any)=>{return ele[c[0]][attributo1] != attributo2; });
    }

    if(c.length == 2){
      return lista.filter((ele: any)=>{return ele[c[0]][c[1]][attributo1] != attributo2; });
    }

    if(c.length == 3){
      return lista.filter((ele: any)=>{return ele[c[0]][c[1]][c[2]][attributo1] != attributo2; });
    }

    if(c.length == 4){
      return lista.filter((ele: any)=>{return ele[c[0]][c[1]][c[2]][c[3]][attributo1] != attributo2; });
    }
    
    return lista;
    
  }

  filtro_elemento_impostazioni(lista: any,parametro1: any,parametro2: any){
    
    if(lista == undefined || lista.length == 0) {return undefined};

    // this.s("FUNZIONE:","filtro_elemento_impostazioni");
    // this.s("lista:",lista);

    var lista2 = [];
    for(var ele of lista){
      var imp = this.ritorna_ele(ele.impostazioni,parametro1.attributo,parametro1.valore,[])
      
      //this.s("imp: ",imp)
      if(imp != undefined && imp['componente'][parametro2.attributo] == parametro2.valore){
        lista2.push(ele)
      }
    }

    return lista2;

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

  creazione(elemento: any){

    //elemento.classe = elemento.classe.split(",");

    //this.lista_componenti.push(elemento);

    try{ 
      for(var i=0; i<elemento.lista_componenti.length; i++){ 
        elemento.lista_componenti[i] = this.creazione(elemento.lista_componenti[i]);   
      } 
    }
    catch{}

    return elemento;
  }

  creazione2(elemento: any){

    //elemento.classe = elemento.classe.split(",");
    //elemento.effetti = elemento.effetti.split(",");
    this.lista_componenti.push(elemento);

    try{ 
      for(var i=0; i<elemento.lista_componenti.length; i++){ 
        this.creazione2(elemento.lista_componenti[i]);   
      } 
    }
    catch{}
   
  }

  filtro_per_elemento(lista: any, elemento: any, attributo1: string, attributo2: string){
    return lista.filter((ele: any) => {return ele.id == elemento.id})
  }

  filtro(lista: any, attributo1: string, attributo2: string){
    return lista.filter((ele: any) => {return ele[attributo1] == attributo2;})
  }

  trova_elemento(lista: any, elemento: any, attributo1: string, attributo2: string){
    return lista.find((ele: any) => {return ele[attributo1] == elemento[attributo2]})
  }

  filtro_per_valore(lista: any, attributo: string, valore: any){
    return lista.filter((ele: any) => {return ele[attributo] == valore})
  }
 
  ritorna_elemento(id: string){
    return this.lista_componenti.filter((ele: any)=>{ return ele.id==id })[0];
  }

  ritorna_elemento_albero(elemento: any,attributo: string,valore: string): any{

    if(elemento['id']==valore){return elemento;}

    var ele = undefined;
    try{ 
      for(var elemento2 of elemento.lista){ 
        var ele = this.ritorna_elemento_albero(elemento2,attributo,valore);
        if(ele != undefined){return  ele}
      } 
    }
    catch{}

    return ele;
    
  }

  ritorna_elemento_albero_padre(elemento: any,valore: string): any{

    if(elemento.tipo+elemento.id_componente==valore){return elemento;}

    var ele = undefined;
    try{ 
      for(var elemento2 of elemento.lista){ 
        var ele = this.ritorna_elemento_albero_padre(elemento2,valore);
        if(ele != undefined){return  ele}
      } 
    }
    catch{}

    return ele;
    
  }

  convertiarraystringa(funzione: any,elemento: any){

    if(funzione == "join"){
      return elemento[0].join(",")+"|"+elemento[1].join(",");
    }else{
      return [elemento.split("|")[0].split(","),elemento.split("|")[1].split(",")]
    }
  }

  creavettore(lunghezza: any,valore: any){
    return [...Array(lunghezza).keys()].map(i => valore);
  }

  creazionelistaduecolori()
  { 
    //// // this.s("this.alyocolore: ",this.alyocolore)
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
    $('body').css('background-image',         'url('+this.sfondi[""+this.alyocolore.modalitachiara+""] + ')');
    $('.alyo-sfondo').css('background-image', 'url('+this.sfondi[""+this.alyocolore.modalitachiara+""] + ')');
  }

  // lingua(){
  //   this.lista_sezioni[1].label=this.alyolingua.lingue[this.alyolingua.lingua].traduzioni.sezione2;
  //   this.lista_sezioni[2].label=this.alyolingua.lingue[this.alyolingua.lingua].traduzioni.impostazioni;
  // }

  visualizzaimmagine(testo: any){
    return this.percorso_sito+testo.substr(this.percorso_alyowool.length,testo.length)
  }

  set_effetto(elemento: any,indice: number, valore: string){
    var ele = elemento.effetti.split(",");
    ele[indice] = valore;
    return ele.join(","); 
  }

  caricamento_elemento(id: string,funzione: string){

    var formdate = new FormData();
    formdate.append("opzione",funzione);
    formdate.append("padre",id);
    
    this.alyoservice.alyo_caricamento(formdate).subscribe(dati => {
      
      //this.s("AGGIUNGI ELEMENTO ALBERO COMPONENTI: ",dati);
      var padre   = this.ritorna_elemento_albero_padre(this.elemento,dati.id_padre); 
      var impostazioni = this.ritorna_ele(dati.impostazioni,'tipo','VSB',[]);
      
      if(impostazioni != undefined){impostazioni.componente.valore = 'SI';}
        var i =0;
        while (i < padre.lista.length && padre.lista[i].posizione < dati.posizione) {
          i++;
        }
        padre.lista.splice(i,0,dati);

    })

  }

  elimina_elemento(elemento: any){
    
    var padre = this.ritorna_elemento_albero_padre(this.elemento,elemento.id_padre); 

    padre.lista = padre.lista.filter((ele: any) => {return ele.id != elemento.id})
  }

  ritornoclassi(lista: any,elemento: any){
    
    if(lista == undefined){return '';}

    var lista_classi = '';
    
    for(var gruppoclassecomponente of lista){

      if(gruppoclassecomponente.componente.tipo == "CLS"){
        lista_classi += gruppoclassecomponente.componente.componente.valore+" ";
      }

      if(gruppoclassecomponente.componente.tipo != "CLS"){
        lista_classi += this.ritorna_classi_albero(gruppoclassecomponente.componente.lista,elemento);
      }

    }

    return lista_classi;
  }

  ritornoclassi2(lista: any,elemento: any){
    
    if(lista == undefined){return '';}

    var lista_classi = '';
    
    for(var gruppoclassecomponente of lista){

      if(gruppoclassecomponente.componente.tipo == "CLS"){
        lista_classi += gruppoclassecomponente.componente.componente.valore+" ";
      }

      if(gruppoclassecomponente.componente.tipo != "CLS"){
        lista_classi += this.ritorna_classi_albero2(gruppoclassecomponente.componente.lista,elemento);
      }

    }

    return lista_classi;
  }

  /*
      {tipo: "GCLS",nome: "Gruppi Classe"        },
      {tipo: "GCLN",nome: "Colonna  Componente"  },
      {tipo: "CHI" ,nome: "Modalita Chiaro"      },
      {tipo: "SCU" ,nome: "Modalita Scura"       },
      {tipo: "SLZ" ,nome: "Selezionato"          },
      {tipo: "NSLZ",nome: "Non Selezionato"      },
      {tipo: "MCLR",nome: "Multi Colore"         },
  */
  ritorna_classi_albero(lista_gruppi_classi:  any,elemento: any){
   
    if(lista_gruppi_classi == undefined){return '';}
    var lista_classi  = '';

    for(var gruppo_classe of lista_gruppi_classi){

      if(gruppo_classe.tipo == 'CLS'){
        lista_classi += gruppo_classe.componente.valore+" ";
      }

      if(gruppo_classe.tipo == 'GCLS'){
        lista_classi += this.ritorna_classi_albero(gruppo_classe.lista,elemento);
      }


      if(gruppo_classe.tipo == 'GCLN'){
        lista_classi += this.ritorna_classi_albero(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'CHI' && this.alyocolore.modalitachiara){
        lista_classi += this.ritorna_classi_albero(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'SCU' && !this.alyocolore.modalitachiara){
        lista_classi += this.ritorna_classi_albero(gruppo_classe.lista,elemento);
      }
  
      var elemento_colorato = this.ritorna_ele(elemento.impostazioni,'tipo','CLR',[]);
      //this.s("elemento_colorato.componente.valore: ",elemento_colorato.componente.valore)

      if(gruppo_classe.tipo == 'SLZ' && elemento_colorato != undefined && elemento_colorato.componente.valore == "SI"){
        lista_classi += this.ritorna_classi_albero(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'NSLZ' && elemento_colorato != undefined && elemento_colorato.componente.valore == "NO"){
        lista_classi += this.ritorna_classi_albero(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'MCLR'){
        gruppo_classe.lista ? lista_classi += gruppo_classe.lista[this.alyocolore.contatore%gruppo_classe.lista.length].componente.valore+" ":" ";
      }

    }
    return lista_classi;
  }

  ritorna_classi_albero2(lista_gruppi_classi:  any,elemento: any){

    if(lista_gruppi_classi == undefined){return '';}
    var lista_classi  = '';

    for(var gruppo_classe of lista_gruppi_classi){

      if(gruppo_classe.tipo == 'CLS'){
        lista_classi += gruppo_classe.componente.valore+" ";
      }

      if(gruppo_classe.tipo == 'GCLS'){
        lista_classi += this.ritorna_classi_albero2(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'GCLN'){
        lista_classi += this.ritorna_classi_albero2(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'CHI' && this.alyocolore.modalitachiara){
        lista_classi += this.ritorna_classi_albero2(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'SCU' && !this.alyocolore.modalitachiara){
        lista_classi += this.ritorna_classi_albero2(gruppo_classe.lista,elemento);
      }
  
      //this.s("elemento.impostazioni f2: ",elemento.impostazioni != undefined ? elemento.impostazioni:undefined)
      var elemento_colorato = this.ritorna_ele(elemento.impostazioni,'tipo','CLR',[]);
      
      if(gruppo_classe.tipo == 'SLZ' && elemento_colorato != undefined ? elemento_colorato.componente.valore == "SI":''){
        lista_classi += this.ritorna_classi_albero2(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'NSLZ' && elemento_colorato != undefined ? elemento_colorato.componente.valore == "NO":''){
        lista_classi += this.ritorna_classi_albero2(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'MCLR'){
        gruppo_classe.lista ? lista_classi += gruppo_classe.lista[this.alyocolore.contatore%gruppo_classe.lista.length].componente.valore:'';
      }

    }

    return lista_classi;
  }

  /*
    azione: any = [
      {tipo:  "0",    nome: "Nessun Elemento"},
      {tipo:  "CLR",  nome: "Colorazione"},
      {tipo:  "DCLR", nome: "Decolorazione"},
      {tipo:  "CLRD", nome: "Colorazione e decolorazione"},
      {tipo:  "CMP",  nome: "Comparsa"},
      {tipo:  "SCMP", nome: "Scomparsa"},
      {tipo:  "CMPS", nome: "Comparsa e scoparsa"},
    ]
  */
  evento(){

      for(var evento of this.filtro_ele(this.elemento_selezionato.eventi,'tipo','CLK',[])){
        
        //this.s("this.elemento: ",this.elemento);
        for(var azione of evento.lista){
          var elemento = this.ritorna_elemento_albero(this.elemento,"id",azione.id_componente);
          
          this.s("Azione:   ",azione  );
          this.s("Elemento: ",elemento);

          if(elemento == undefined && azione.tipo == "CMP"){
            this.caricamento_elemento(azione.id_componente,'ALBERO_COMPONENTI');
          }

          if(elemento != undefined && azione.tipo == "SCMP"){
            var ele = this.ritorna_elemento_albero(this.elemento,"id",azione.id_componente) 
            this.elimina_elemento(ele)
          }

          if(elemento !=undefined && azione.tipo == "CLR"){
            var impostazione = this.ritorna_ele(elemento.impostazioni,'tipo','CLR',[]) 
            impostazione.componente.valore = "SI";
          }

          if(elemento !=undefined && azione.tipo == "DCLR"){
            var impostazione = this.ritorna_ele(elemento.impostazioni,'tipo','CLR',[]) 
            impostazione.componente.valore = "NO";
          }

          if(elemento !=undefined && azione.tipo == "CLRD"){
            var impostazione = this.ritorna_ele(elemento.impostazioni,'tipo','CLR',[]) 
            impostazione != undefined ? (impostazione.componente.valore == "SI" ? impostazione.componente.valore = "NO":"SI"):"";
          }

          if(elemento !=undefined && azione.tipo == "ET-1"){
            
            var padre = this.ritorna_elemento_albero_padre(this.elemento,elemento.id_padre);
            this.s("PADRE: ",padre);
            padre.lista = this.filtro_ele(padre.lista,'id',azione.id_componente,[])
            this.s("PADRE: ",padre);
          }

          
        }
      }
  }

  link(){

    for(var tipo of this.tipi_link){
      if(tipo.tipo == this.elemento_selezionato.componente.tipo){
        window.open(tipo.valore+this.elemento_selezionato.componente.valore);
      }
    }
    
  }

  impostazioni_esistenti(elemento: any){
    var impostazioni = this.ritorna_ele(elemento.impostazioni,'tipo','VSB',[]);
    return impostazioni != undefined ? (impostazioni.componente.valore == "NO" ? "alyo-trasparente-70":""):"";
  }

  drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
    moveItemInArray(this.tipi_classi, event.previousIndex, event.currentIndex);
    this.s("event.previousIndex: ",event.previousIndex)
    this.s("event.currentIndex: ",event.currentIndex)
  }

  chiudi_panello_impostazioni(){
    if(this.ritorna_ele(this.elemento_selezionato.impostazioni,'tipo','VSB',[]).componente.valore == 'NO'){
      var padre    = this.ritorna_elemento_albero_padre(this.elemento,this.elemento_selezionato.id_padre); 
      padre.lista = padre.lista.filter((ele: any) => {return ele.id != this.elemento_selezionato.id})
    }
  }

  colore(colore: string){
    return colore != "MC" ? this.alyocolore.fissi[colore][this.alyocolore.modalitachiara]:this.alyocolore.variabile;
  }

  s(intestazione: any, testo: any){
    console.log();
    console.log(intestazione);
    console.log(testo);
    console.log();
  }

}
