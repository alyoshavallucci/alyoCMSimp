import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlyoService } from '../alyo.service';
import { CdkDragDrop, moveItemInArray,} from '@angular/cdk/drag-drop';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'alyocollegamento',
  templateUrl: './alyocollegamento.component.html',
  styleUrls: ['./alyocollegamento.component.css']
})
export class alyocollegamentoComponent {

  @Input()  alyo:            any = null;
  @Input()  alyocolore:      any = null;
  @Input()  classe:          any = null;
  @Input()  elemento:        any = null;
  @Input()  lista_classe:    any = null;
  @Input()  tipo_classe:     any = null;
  @Input()  componente:      any = null;
  @Input()  pannello_classi: any = null;
  @Input()  padre:           any = null;

  @Input()  alyocontenutiscorrevoli: any = null;

  @Output() alyocollegamento = new EventEmitter()
  @Output() eventopiano     = new EventEmitter()
  @Output() eventobottoneselezionato = new EventEmitter()

  hover = false;
  panello_bottoni = false;
  visibile: string = "si";
  
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
  
  public url: any;

  constructor(private alyoservice: AlyoService,private sanitizer: DomSanitizer){}

    ngOnInit(): void {
      this.elemento['verticale']=false;
      if(this.elemento.tipo == 'FRM'){this.url = this.get_url(this.elemento.componente.valore)}
    }

    modifica(attributi: any){
  
      //this.alyo.s("attributi: ",attributi)
  
      if(attributi.tabella == "alyocontenitori"){
  
        if(attributi.attributo == "id_componente"){
          var provisorio = attributi.valore
          if(attributi.valore != 0){
            provisorio = attributi.valore.id
          }
    
          var formdate = new FormData();
          formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+provisorio+"' WHERE id = "+this.elemento.id);
    
          this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
            //this.alyo.s("dati: ",dati)
            if(dati.response){   
              this.elemento.id_componente = attributi.valore.id;
            } 
          });
        }

        if(attributi.attributo == "effetti"){
      
          var formdate = new FormData();
          formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo +" = '"+attributi.valore+"' WHERE id = "+this.elemento.id);
    
          this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
            this.alyo.s("dati: ",dati)
            if(dati.response){   
              //this.elemento.effetti = attributi.valore.split(",");
            } 
          });
        }

      }
  
      if(attributi.tabella == "alyoicone"){
  
        var formdate = new FormData();
        formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+attributi.id);
  
        this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
          this.alyo.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
          if(dati.response){   
            this.elemento.componente["valore"] = attributi.valore;
          } 
        });
      }
  
      if(attributi.tabella == "alyoimmagini"){
  
        var formdate = new FormData();
        formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+this.elemento.id_componente);
  
        this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
          this.alyo.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
          if(dati.response){ 
            this.elemento.componente["valore"]  = "";
            this.elemento.componente["tipo"] = attributi.valore;
          } 
        });
      }
  
      if(attributi.tabella == "alyolink"){
  
        var formdate = new FormData();
        formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+this.elemento.id_componente);
  
        this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
          //this.alyo.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
          if(dati.response){ 
            this.elemento.componente["tipo"] = attributi.valore;
          } 
          //this.alyo.s("attributi.valore: ",attributi.valore)
        });
      }
  
      if(attributi.tabella == "alyobottoni"){
  
        var formdate = new FormData();
        formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+this.elemento.id_componente);
  
        this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
          this.alyo.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
          if(dati.response){ 
            this.elemento.componente["tipo"] = attributi.valore;
          } 
          //this.alyo.s("attributi.valore: ",attributi.valore)
        });
      }
  
      if(attributi.tabella == "alyocomponenti"){
  
        var formdate = new FormData();
        formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+this.elemento.id_componente);
  
        this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
          this.alyo.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
          if(dati.response){ 
            this.elemento.componente["tipo"] = attributi.valore;
          } 
        });
      }
      
    }

    //  -------------------- ALTRI FUNZIONI ------------------------

    get_url(url: string){
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    ritorna_icona(){

      switch (this.elemento.tipo) {
        case "CNT":
          return this.alyo.fa.contenitore.valore;
          break;
        case "ICO":
            return this.alyo.fa.icone.valore;
            break;
        case "TXT":
          return this.alyo.fa.testo.valore;
          break;
        case "TXA":
          return this.alyo.fa.testoarea.valore;
          break;
        case "BTN":
          return this.alyo.fa.b1.valore;
          break;
        case "LNK":
          return this.alyo.fa.link.valore;
          break;
        case "IMG":
          return this.alyo.fa.immagine.valore;
          break;
        case "MCS":
          return this.alyo.fa.icone.valore;
          break;
        case "FRM":
          return this.alyo.fa.icone.valore;
          break;
      }

    }
  
    drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
      moveItemInArray(this.elemento.lista, event.previousIndex, event.currentIndex);
      this.alyo.s("event.previousIndex: ",event.previousIndex)
      this.alyo.s("event.currentIndex: ",event.currentIndex)
      this.aggiorna_posizioni()
    }
  
    aggiorna_posizioni(){

      var variabile ="UPDATE alyocollegamenti SET posizione = CASE id "
  
      var righe1 = "";
      var righe2 = "";
  
      righe1 += "WHEN "+this.elemento.lista[0].id+" THEN "+0+" ";
      righe2 += this.elemento.lista[0].id;
      for(var i=1; i<this.elemento.lista.length; i++){
        righe1 += "WHEN "+this.elemento.lista[i].id+" THEN "+i+" ";
        righe2 += ","+this.elemento.lista[i].id;
      }
  
      variabile += righe1;
      variabile += "ELSE posizione END WHERE id IN("+righe2+")";
  
      var formdate = new FormData();
      formdate.append("sql",variabile);
      //this.alyo.s("sql: ",variabile)
      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        this.alyo.s("DATI: ",dati)
        if(dati.risposta){   
          for(var i=0; i<this.elemento.lista.length; i++){
            this.elemento.lista[i].posizione = i;
          }
          this.alyo.s("this.elemento.lista 2: ",this.elemento.lista)
        } 
      });
    }
  



}
