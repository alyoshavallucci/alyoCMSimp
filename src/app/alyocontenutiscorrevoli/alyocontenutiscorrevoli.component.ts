import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray,} from '@angular/cdk/drag-drop';
import { AlyoService } from '../alyo.service';

@Component({
  selector: 'alyocontenutiscorrevoli',
  templateUrl: './alyocontenutiscorrevoli.component.html',
  styleUrls: ['./alyocontenutiscorrevoli.component.css']
})
export class AlyocontenutiscorrevoliComponent {

  @Input()  alyo:        any = null;
  @Input()  alyocolore:      any = null;
  @Input()  classe:          any = null;
  @Input()  elemento:        any = null;
  @Input()  lista_classe:    any = null;
  @Input()  tipo_classe:     any = null;
  @Input()  componente:      any = null;
  @Input()  pannello_classi: any = null;
  @Input()  selezionato:     any = null;

  @Output() alyocollegamento = new EventEmitter()
  @Output() eventopiano     = new EventEmitter()
  @Output() alyocontenutiscorrevoli: any = new EventEmitter();

  primo_elemento = 0;
  cont_scrittescorrevoli = 0;
  listascritte = ["contenuto 1","contenuto 2","contenuto 3","contenuto 4"]
  scritte: any = [{id: "testo1", testo: ""},{id: "testo2", testo: ""},{id: "testo3", testo: ""},{id: "testo4", testo: ""}];
  padding = 10

  hover = false;

  alyocollegamento3: any = null;

  cancella                  = false;
  verticale                 = false;
  pannello_aggiungi         = false;
  pannello_emoticon         = false;
  pannello_tipilink         = false;
  pannello_tipiimmagini     = false;
  panello_tipibottoni       = false;
  panello_tipicontenitori   = false;
  panello_tipicomponenti    = false;

  componenti:              any = [{indice: 0,nome: "contenitore"}     ,{indice: 1,nome: "componente"                      }]
  lista_tipi_link:         any = [{id: 0,nome: "🌐 Url"}              ,{id: 1,nome: "📧 Email"},{id: 2,nome: "📱 Telefono"}]
  lista_tipi_immagini:     any = [{id: 0,nome: "⬆️ Caricamento"}      ,{id: 1,nome: "🌐 Url  "                            }]
  lista_tipi_aggiungi:     any = [{selezione: true, nome: "Composti" },{selezione: false, nome: "Singoli"                 }] 
  lista_tipi_bottoni:      any = [{id: 0, nome: "Selettore"}          ,{id: 1, nome: "Radio Bottone"                      }] 
  lista_tipi_contenitori:  any = [{id: 0, nome: "Padre/Figlio"}       ,{id: 1, nome: "Comparsa"                           }] 
 
  constructor(private alyoservice: AlyoService) { }

  ngOnInit(): void {

    // setTimeout(() => {

    //   var larghezzacontenitore: any = $("#alyo-scrittescorrevoli").innerWidth();
    //   var larghezzatitolo: any;

    //   for(var i=0;i<this.listascritte.length; i++){
    //     $(".alyo-h1:eq("+i+")").html(this.listascritte[i])

    //     larghezzatitolo = $(".alyo-h1:eq("+i+")").innerWidth()
    //     //this.s("LARGHEZZA: ",larghezzatitolo+(this.variabili.padding*2))
    //     if(larghezzacontenitore < larghezzatitolo+(this.padding*2)){
    //       var lunghezzaarray = this.listascritte[i].split(" ")
    //       var indicemodifica = Math.floor(lunghezzaarray.length/2)
    //       lunghezzaarray[indicemodifica] = "<br>"+lunghezzaarray[indicemodifica]
    
    //       $(".alyo-h1:eq("+i+")").html(lunghezzaarray.join(" "))
    //       //this.s("ELEMENTO LUNGO: ",this.listascritte)
    //     }
    //   }

    // }, 1000); 

    this.alyo.s("ELEMENTO: ",this.elemento)

    this.alyocontenutiscorrevoli.emit(this);
  }

  posizione_iniziale = 50;
  lunghezza = 100;
  posizione(indice: any){

   return this.posizione_iniziale+(indice*this.lunghezza)+"%"
  }

  aggiornapiano(evento: any){
   
    //this.alyo.s("EVENTO: ",evento)
    if(evento){
      this.elemento.piano = 1;
      this.eventopiano.emit(1);
    }else{     
      this.elemento.piano = 0;
      this.eventopiano.emit(-1);
    }

  }

  individuacolore(colore: any){

    //this.alyo.s("this.alyocolore: ",this.alyo.alyocolore.variabile)
    if(colore == "mc"){return this.alyo.alyocolore.variabile}
    if(this.alyo.alyocolore.fisso[colore] != undefined){return this.alyo.alyocolore.fisso[colore]}
    if(this.alyo.alyo.colori.includes(colore)){return colore}
    return "";
    
  }

  rgb(colore: any) {

    colore = this.individuacolore(colore)
    var esadecimale = this.alyo.colori_esadecimali[colore]
    var risultato = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(esadecimale);
    return risultato ? {
      r: parseInt(risultato[1], 16),
      g: parseInt(risultato[2], 16),
      b: parseInt(risultato[3], 16)
    } : null;
  }

  drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
    moveItemInArray(this.elemento.lista_componenti, event.previousIndex, event.currentIndex);
    // this.alyo.s("event.previousIndex: ",event.previousIndex)
    // this.alyo.s("event.currentIndex: ",event.currentIndex)
    this.aggiorna_posizioni()
  }

  aggiorna_posizioni(){
    
    var variabile ="UPDATE alyocontenitori SET posizione = CASE id "

    var righe1 = "";
    var righe2 = "";

    righe1 += "WHEN "+this.elemento.lista_componenti[0].id+" THEN "+0+" ";
    righe2 += this.elemento.lista_componenti[0].id;
    for(var i=1; i<this.elemento.lista_componenti.length; i++){
      righe1 += "WHEN "+this.elemento.lista_componenti[i].id+" THEN "+i+" ";
      righe2 += ","+this.elemento.lista_componenti[i].id;
    }

    variabile += righe1;
    variabile += "ELSE posizione END WHERE id IN("+righe2+")";

    var formdate = new FormData();
    formdate.append("sql",variabile);
    //this.alyo.s("QUERY: ",variabile)
    this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
      // this.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
      if(dati.response){   
        //this.s("DATI: { ",dati.messaggio+" }")
      } 
    });
  }

  intervallo(){

    for(var i=0; i<4; i++){
      $(".alyo-h1:eq("+i+")").animate({left: '-=100%'},"linear");  
    }

    if(this.primo_elemento > 3){
      this.primo_elemento = 0;
    }

    this.alyo.s("alyo-h1: ","alyo-h1")

    // setTimeout(() => {$(".alyo-h1:eq("+this.primo_elemento+")").css({"left": "250%"}); },1000);

  
    // setTimeout(() => {

    //   $(".alyo-h1:eq("+this.primo_elemento+")").css({"left": "250%"}); 
    
    //   //this.primo_elemento++;
    //   // var larghezzacontenitore: any = $("#alyo-scrittescorrevoli").innerWidth()
    //   // var larghezzatitolo: any = $(".alyo-h1:eq("+this.cont_scrittescorrevoli+")").innerWidth()

    //   // if(larghezzacontenitore < larghezzatitolo+(this.padding*2)){
    //   //   var lunghezzaarray = this.listascritte[this.cont_scrittescorrevoli].split(" ")
    //   //   var indicemodifica = Math.floor(lunghezzaarray.length/2)
    //   //   lunghezzaarray[indicemodifica] = "<br>"+lunghezzaarray[indicemodifica]
  
    //   //   $(".alyo-h1:eq("+this.cont_scrittescorrevoli+")").html(lunghezzaarray.join(" "))
   
    //   // }

    // },1000);
  }

}
