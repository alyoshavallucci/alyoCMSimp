import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { faCircleXmark, faTrashCan, faCloudArrowUp, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { AlyoService } from '../alyo.service';


@Component({
  selector: 'alyofile',
  templateUrl: './alyofile.component.html',
  styleUrls: ['./alyofile.component.css']
})
export class AlyofileComponent implements OnInit {

  @Input() file: any;
  @Input() sql: any;
  @Input() estensioni: any;
  @Input() classe: any;
  @Input() alyowool: any;
  
  @Output('esterno') esterno = new EventEmitter()

  html2: string = "";
  filelist: any[] = [];
  buttonDeleted: boolean = false;
  panello_cartelle: boolean = false;
  immagini_estensioni: any = {"jpg": "jpg.png",'jpeg':"jpeg.png","txt":"txt.png","pdf":"pdf.png","png":"png.png"};
  tipoclick = "";
  
  listaFilesCaricati: any[] = [];
  lista_cartelle: any = []
  lista_cartelle_iniziali: any = []
  lista_posizioni: any = []
  cartella = "/"
  visualizza_immagine = false;

  file2 = {percorso_precedente: "",percorso:  "",nome:""}

  faCircleXmark = faCircleXmark;
  faTrashCan = faTrashCan;
  faCloudArrowUp = faCloudArrowUp;
  faFileCirclePlus = faFileCirclePlus;
  posizione_padre = -1;

  dateDown: any = null;

  percorso = "";
  nome = "";

  prefissi: any = {
    inserimento: 
       "./../"
    ,
    visualizzazione: {
       true: "./../",
       false: "https://www.alyowool.com/"
    }
  }

  tipo: any = {jpg: "IMG",jpeg: "IMG",gif: "IMG",png: "IMG",mp4: "VID",mp3: "MSK",txt: "TXT",pdf:"PDF",rtf:"RTF"}

  constructor(private alyoservice: AlyoService) {}

  ngOnInit(): void {

    if(this.file.src.valore != ''){this.visualizza_immagine = true;}
    
    this.caricamentolistacartelle(this.file2.percorso);

    setTimeout(() => {
    
      var dropBox: any = document.getElementById("dropbox-"+this.file.id)
      //var dropBox: any = document.getElementsByClassName(this.classe.contenitore.nomeclasse)[0]
      //this.s("DROPBOX: ",dropBox)
      dropBox.addEventListener('drop', (e: any)=> {
        let dataTrans = e.dataTransfer;
        let files = dataTrans.files;
        
        this.caricamentofile(files);
      }, false);

      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => { dropBox.addEventListener(evt, prevDefault, false); });
      ['dragenter', 'dragover'].forEach(evt => { dropBox.addEventListener(evt, hover, false); });
      ['dragleave', 'drop'].forEach(evt => { dropBox.addEventListener(evt, unhover, false); });

      function prevDefault(e: any) { e.preventDefault(); e.stopPropagation(); }
      function hover(e: any) { dropBox.classList.add('hover'); }
      function unhover(e: any) { dropBox.classList.remove('hover'); }
    },200);
  }

  individuaestensione(testo: any){
    //this.alyowool.s("testo: ",testo.nome != undefined ? testo.nome.toLowerCase():testo.toLowerCase())
    testo = testo.nome != undefined ? testo.nome.toLowerCase():testo.toLowerCase();
    // 
    // this.alyowool.s("testo.substr(testo.lastIndexOf('.') + 1).toLowerCase(): ",testo.substr(testo.lastIndexOf(".") + 1).toLowerCase())
    // this.alyowool.s("this.tipo(testo.substr(testo.lastIndexOf('.') + 1).toLowerCase()): ",this.tipo[testo.substr(testo.lastIndexOf(".") + 1).toLowerCase()] != undefined ? this.tipo[testo.substr(testo.lastIndexOf(".") + 1).toLowerCase()]:'CRT')
    return this.tipo[testo.substr(testo.lastIndexOf(".") + 1).toLowerCase()] != undefined ? this.tipo[testo.substr(testo.lastIndexOf(".") + 1).toLowerCase()]:'CRT';
  }

  visualizzaimmagine(testo: any){
     return this.prefissi.visualizzazione.false+testo.substr(this.prefissi.inserimento.length,testo.length)
  }

  ritornaultimaoccorenza(testo: any,carattere: any){
    return testo.substr(testo.lastIndexOf(carattere) + 1).toLowerCase();
  }

  cartellaselezionata(testo: any){
    return testo.split("/")[testo.split("/").length-2];
  }

  caricaFils(evento: any){
    this.caricamentofile(evento.target.files)
  }

  fileselezionato(item: any){

    var provisorio = item
    var formdate = new FormData();
    formdate.append("sql","UPDATE "+this.sql.tabella+" SET "+this.sql.attributo+" = '"+provisorio+"' WHERE id = "+this.file.id);
    this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
      this.s("DATI: ",dati)
      if(dati.response){
         this.file.src.valore = provisorio;
      } 
    });
      
      
      // this.alyoservice.alyo_file(formdate).subscribe(dati => {
      //   //this.s("dati: ",dati)
      //   if(dati.response){

      //     var percorso = item.valore.replace(this.prefissi.inserimento, "");
      //     var formdate = new FormData();
      //     //this.s("percorso/this.lista_percorsi.nome: ",percorso)
      //     formdate.append("sql","UPDATE "+this.sql.tabella+" SET "+this.sql.attributo+" = '"+(percorso+"/"+this.lista_percorsi.nome)+"' WHERE id = "+this.file.id);
      
      //     this.alyoservice.alyo_modifica(formdate).subscribe(dati2 => {
      //       //this.s("DATI2: ",dati2)
      //       if(dati2.response){
      //         this.lista_percorsi.selezione = percorso+"/"
      //         this.file.src = (percorso+this.lista_percorsi.nome);
      //       } 
      //     });
      //   }
      // });


  //   this.tipoclick = 'click';

  //   setTimeout(() => {
  //     if(this.tipoclick == "click"){

  //       // this.s("PERCORSO selezione: ",this.prefissi.inserimento+this.lista_percorsi.selezione+this.lista_percorsi.nome);
  //       // this.s("PERCORSO NUOVO: ",item.valore+"/"+this.lista_percorsi.nome);
  //       var formdate = new FormData();
  //       formdate.append("funzione","spostarefile");
  //       formdate.append("variabile1",this.prefissi.inserimento+this.file2.percorso+this.lista_percorsi.nome);
  //       formdate.append("variabile2",item.valore+"/"+this.lista_percorsi.nome);
  //       this.alyoservice.alyo_file(formdate).subscribe(dati => {
  //         //this.s("dati: ",dati)
  //         if(dati.response){

  //           var percorso = item.valore.replace(this.prefissi.inserimento, "");
  //           var formdate = new FormData();
  //           //this.s("percorso/this.lista_percorsi.nome: ",percorso)
  //           formdate.append("sql","UPDATE "+this.sql.tabella+" SET "+this.sql.attributo+" = '"+(percorso+"/"+this.lista_percorsi.nome)+"' WHERE id = "+this.file.id);
        
  //           this.alyoservice.alyo_modifica(formdate).subscribe(dati2 => {
  //             //this.s("DATI2: ",dati2)
  //             if(dati2.response){
  //               this.lista_percorsi.selezione = percorso+"/"
  //               this.file.src = (percorso+this.lista_percorsi.nome);
  //             } 
  //           });
  //         }
  //       });

  //     }
  //   },500)
  }

  avanti(posizione: any,elemento: any){

    this.lista_posizioni.push(posizione)
    this.lista_cartelle = elemento;
    // this.s("this.lista_cartelle_iniziali: ",this.lista_cartelle_iniziali)
    // this.s("elemento: ",elemento)
  }

  indietro(){
    
    this.lista_posizioni.pop()
    var vet = this.lista_cartelle_iniziali
    // this.s("this.lista_posizioni: ",this.lista_posizioni)
    // this.s("VET: ",vet)
    for(var pos of this.lista_posizioni){
      vet = vet[pos].lista
      this.cartella=vet[pos].nome
      //this.s("VET: ",vet)
    }

    this.lista_cartelle = vet
    //this.s("POSIZIONI: ",this.lista_posizioni)
  }

  caricamentolistacartelle(percorso: any){

    //this.s("Percorso: ",percorso)
    //this.s("this.estensioni.join(','): ",this.estensioni.join(","))
    var formdate = new FormData();
    formdate.append("funzione","caricalistafilecartellealbero");
    formdate.append("percorsi",this.prefissi.inserimento+"assets/,"+this.prefissi.inserimento+"alyocurriculum/");
    formdate.append("estensioni",this.estensioni.join(","));

    this.alyoservice.alyo_file(formdate).subscribe(dati => {
      this.s("dati: ",dati)
      this.lista_cartelle_iniziali = dati;
      this.lista_cartelle = dati
    });

  }


  caricamentofile(files: any) {

    for(let file of files){

      var estensione = this.ritornaultimaoccorenza(file.name,'.')

      var trovato = false;
      for(var i=0; i<this.estensioni.length; i++){ if(estensione == this.estensioni[i]){ trovato = true;}}
      if(!trovato){return ;}
      this.caricamentosulserver(file)
    }
  }

  caricamentosulserver(file: any) {
		

      var lista = this.lista_cartelle_iniziali;
      var percorso     = "";
      for(var pos of this.lista_posizioni){
        percorso = lista[pos].nome;
        lista = lista[pos].lista;
      }

      this.alyowool.s("nome: ",percorso)

			let formdate = new FormData();
      formdate.append('funzione', "inserimento");
			formdate.append('file', file);
      formdate.append('percorso', percorso);
      formdate.append('nuovofile',file.name);

      this.alyoservice.alyo_file(formdate).subscribe(dati => {  
        this.s("DATI: ",dati.messaggio)
       if(dati.response){ 

          var formdate = new FormData();
          formdate.append("sql","UPDATE "+this.sql.tabella+" SET "+this.sql.attributo+" = '"+percorso+file.name+"' WHERE id = "+this.file.id);
      
          this.alyoservice.alyo_modifica(formdate).subscribe(dati2 => {
            this.s("DATI: ",dati2.messaggio)
            if(dati2.response){  
              this.file.src.valore = percorso+file.name;
              lista.push(percorso+file.name);
            } 
          });
       }        

      });
    
	}

  cancellafile(id: number){
    this.filelist = this.filelist.filter(function(value, index, arr){  return index != id; });
  }

  s(testo: any, contesto: any ){
    console.log();
    console.log(testo);
    console.log(contesto);
    console.log();
  }

}
