import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlyoService } from '../alyo.service';
import { CdkDragDrop, moveItemInArray,} from '@angular/cdk/drag-drop';

@Component({
  selector: 'alyocontenitore',
  templateUrl: './alyocontenitore.component.html',
  styleUrls: ['./alyocontenitore.component.css']
})
export class AlyocontenitoreComponent {

  @Input()  alyowool:        any = null;
  @Input()  alyocolore:      any = null;
  @Input()  classe:          any = null;
  @Input()  elemento:        any = null;
  @Input()  lista_classe:    any = null;
  @Input()  tipo_classe:     any = null;
  @Input()  componente:      any = null;
  @Input()  pannello_classi: any = null;
  @Input()  selezionato:     any = null;
  @Input()  alyocontenutiscorrevoli: any = null;

  @Output() alyocontenitore = new EventEmitter()
  @Output() eventopiano     = new EventEmitter()
  @Output() eventobottoneselezionato = new EventEmitter()

  hover = false;
  panello_bottoni = false;


  alyo = "alyo-"
  alyocontenitore3: any = null;
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
  
  constructor(private alyoservice: AlyoService){}

  ngOnInit(): void {this.elemento['ele']=this;}

  //--------------------OPERAZIONI------------------------


  //--------------------ALTRI FUNZIONI------------------------

  // rgba(colore: any){

  //   colore = this.individuacolore(colore)
  //   colore = this.alyowool.colori_esadecimali[colore]
  //   return [this.rgb(colore)?.r,this.rgb(colore)?.g,this.rgb(colore)?.b]
  // }

  // rgb(colore: any) {

  //   colore = this.individuacolore(colore)
  //   var esadecimale = this.alyowool.colori_esadecimali[colore]
  //   var risultato = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(esadecimale);
  //   return risultato ? {
  //     r: parseInt(risultato[1], 16),
  //     g: parseInt(risultato[2], 16),
  //     b: parseInt(risultato[3], 16)
  //   } : null;
    
  // }

  // individuacolore(colore: any){

  //   //this.alyowool.s("this.alyocolore: ",this.alyowool.alyocolore.variabile)
  //   if(colore == "mc"){return this.alyowool.alyocolore.variabile}
  //   if(this.alyowool.alyocolore.fisso[colore] != undefined){return this.alyowool.alyocolore.fisso[colore]}
  //   if(this.alyowool.alyowool.colori.includes(colore)){return colore}
  //   return "";
    
  // }

  // aggiornapiano(evento: any){
   
  //   //this.alyowool.s("EVENTO: ",evento)
  //   if(evento){
  //     this.elemento.piano = 1;
  //     this.eventopiano.emit(1);
  //   }else{     
  //     this.elemento.piano = 0;
  //     this.eventopiano.emit(-1);
  //   }

  // }
  
  // aggiornabottoni(elementoselezionato: any){

  //   for(var elemento2 of this.alyowool.lista_bottoni.filter((elemento2: any) => {return elemento2 != ''?elemento2.componente.tipo == 1:''})){
  //     elemento2.selezionato = false;
  //   }

  //   elementoselezionato.selezionato = !elementoselezionato.selezionato;
    
  // }

    //--------------------OPERAZIONI------------------------

    caricamento(){}

    inserimento(attributi: any){
      
      var formdate = new FormData();
  
      if(attributi.funzione == "nuovo"){
  
        var sqlvalori = {nomi: "",valori: ""};
        var sql = "INSERT INTO "+this.alyowool.componente[attributi.tipo].tabella+" (";
        
        sqlvalori.nomi   = this.alyowool.componente[attributi.tipo].attributi[0].nome;
        sqlvalori.valori = "'"+this.alyowool.componente[attributi.tipo].attributi[0].valore+"'";
    
        for(var i=1; i<this.alyowool.componente[attributi.tipo].attributi.length; i++){
          sqlvalori.nomi   += ","+this.alyowool.componente[attributi.tipo].attributi[i].nome;
          sqlvalori.valori += ",'"+this.alyowool.componente[attributi.tipo].attributi[i].valore+"'";
        }
        sql = sql + sqlvalori.nomi+ ") VALUES ("+sqlvalori.valori+")";
  
        var componente: any = {}
        for(var elemento1 of this.alyowool.componente[attributi.tipo].attributi){
          componente[elemento1.nome] = elemento1.valore;
        }
        
    
  
        if(attributi.tipo == "CNT"){
   
          sql = "INSERT INTO alyocontenitori (posizione,classe,tipo,id_componente,livello,id_padre) VALUES ("+this.elemento.lista_componenti.length+",'"+this.creavettore(this.alyowool.componente.CNT.classi.length,"").join(',')+"','"+attributi.tipo+"',0,1,"+attributi.elemento.id+")"
          formdate.append("sql",sql);
          this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
            
            //this.alyowool.s("DATI: ",dati)
            if(dati.response){
              this.elemento.lista_componenti.push({id: dati.id,posizione: this.elemento.lista_componenti.length,classe: this.creavettore(this.alyowool.componente.CNT.classi.length,""),tipo: attributi.tipo,id_componente: 0,livello: 1,eventi: [0,0],id_padre: attributi.elemento.id,lista_componenti: []})
            } 
            if(this.elemento.selezionato != undefined){this.elemento.lista_componenti[this.elemento.lista_componenti.length-1][this.elemento.selezionato]= this.elemento.selezionato;}        
          });
        }
    
        if(attributi.tipo != "CNT"){
          formdate.append("sql",sql);
          this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
                  
              this.alyowool.s("DATI: ",dati)
              if(dati.response){
    
                var sql_contenitore = "INSERT INTO alyocontenitori (posizione,classe,tipo,id_componente,livello,id_padre) VALUES ("+this.elemento.lista_componenti.length+",'"+this.creavettore(this.alyowool.componente[attributi.tipo].classi.length,"").join(',')+"','"+attributi.tipo+"',"+dati.id+",1,"+attributi.elemento.id+")"
                formdate.append("sql",sql_contenitore);
                this.alyoservice.alyo_inserimento(formdate).subscribe(dati2 => {
                  this.alyowool.s("DATI2: ",dati2)
                  if(dati2.response){
                     
                    if(attributi.tipo == "LNK" || attributi.tipo == "BTN"){
                      this.elemento.lista_componenti.push({id: dati2.id,posizione: this.elemento.lista_componenti.length,componente: componente,classe: this.creavettore(this.alyowool.componente[attributi.tipo].classi.length,""),tipo: attributi.tipo,id_componente: 0,livello: 1,eventi: [0,0],id_padre: attributi.elemento.id,lista_componenti: []})
                      if(attributi.tipo == "BTN"){
                        this.alyowool.lista_bottoni.push(this.elemento.lista_componenti[this.elemento.lista_componenti.length-1]);
                      }
                    }else{
                      this.elemento.lista_componenti.push({id: dati2.id,posizione: this.elemento.lista_componenti.length,componente: componente,classe: this.creavettore(this.alyowool.componente[attributi.tipo].classi.length,""),tipo: attributi.tipo,id_componente: 0,livello: 1,eventi: [0,0],id_padre: attributi.elemento.id})
                    }
  
                    if(this.elemento.selezionato != undefined){this.elemento.lista_componenti[this.elemento.lista_componenti.length-1][this.elemento.selezionato]= this.elemento.selezionato;}
                  }
    
                })
              }
          })
        }
  
      }
  
      if(attributi.funzione == "esistente"){
        
        this.alyowool.s("attributi.elemento.tipo: ",attributi.elemento.tipo)
        var sqlvalori = {nomi: "",valori: ""};
        var sql = "INSERT INTO "+this.alyowool.componente[attributi.elemento.tipo].tabella+" (";
        
        sqlvalori.nomi   = this.alyowool.componente[attributi.elemento.tipo].attributi[0].nome;
        sqlvalori.valori = "'"+this.alyowool.componente[attributi.elemento.tipo].attributi[0].valore+"'";
    
        for(var i=1; i<this.alyowool.componente[attributi.elemento.tipo].attributi.length; i++){
          sqlvalori.nomi   += ","+this.alyowool.componente[attributi.elemento.tipo].attributi[i].nome;
          sqlvalori.valori += ",'"+this.alyowool.componente[attributi.elemento.tipo].attributi[i].valore+"'";
        }
        sql = sql + sqlvalori.nomi+ ") VALUES ("+sqlvalori.valori+")";
  
        var componente: any = {}
        for(var elemento1 of this.alyowool.componente[attributi.elemento.tipo].attributi){
          componente[elemento1.nome] = elemento1.valore;
        }
        
        //--------------------------------
        
        // this.alyowool.s("lista_vettore: ",lista_vettore)
        // this.alyowool.s("lista_classe: ", lista_classe)
        // this.alyowool.s("sql: ",sql)
        // this.alyowool.s("componente: ",componente)
  
        if(attributi.elemento.tipo == "CNT"){
   
          sql = "INSERT INTO alyocontenitori (posizione,classe,tipo,id_componente,livello,id_padre) VALUES ("+this.elemento.lista_componenti.length+",'"+attributi.elemento.classe.join(',')+"','"+attributi.elemento.tipo+"',"+attributi.elemento.id+",1,"+attributi.elementopadre.id+")"
          formdate.append("sql",sql);
          this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
            
            //this.alyowool.s("DATI: ",dati)
            if(dati.response){
              attributi.elementopadre.lista_componenti.push({id: dati.id,posizione: attributi.elementopadre.lista_componenti.length,classe: attributi.elemento.classe,tipo: attributi.elemento.tipo,id_componente: 0,livello: 1,eventi: [0,0],id_padre: attributi.elementopadre.id,lista_componenti: []})
              for(var elemento2 of attributi.elemento.lista_componenti){
                this.inserimento({funzione: 'esistente',elementopadre: attributi.elementopadre.lista_componenti[attributi.elementopadre.lista_componenti.length-1],elemento: elemento2}); 
              }
            }         
          });
  
        }
    
        if(attributi.elemento.tipo != "CNT"){
          formdate.append("sql",sql);
          this.alyoservice.alyo_inserimento(formdate).subscribe(dati => {
                  
              //this.alyowool.s("DATI: ",dati)
              if(dati.response){
    
                var sql_contenitore = "INSERT INTO alyocontenitori (posizione,classe,tipo,id_componente,livello,id_padre) VALUES ("+attributi.elementopadre.lista_componenti.length+",'"+attributi.elemento.classe.join(',')+"','"+attributi.elemento.tipo+"',"+dati.id+",1,"+attributi.elementopadre.id+")"
                formdate.append("sql",sql_contenitore);
                this.alyoservice.alyo_inserimento(formdate).subscribe(dati2 => {
                  //this.alyowool.s("DATI2: ",dati2)
                  if(dati2.response){
               
                    if(attributi.elemento.tipo == "LNK" || attributi.elemento.tipo == "BTN"){
                      attributi.elementopadre.lista_componenti.push({id: dati2.id,posizione: attributi.elementopadre.lista_componenti.length,componente: componente,classe: attributi.elemento.classe,tipo: attributi.elemento.tipo,id_componente: dati.id,livello: 1,eventi: [0,0],id_padre: attributi.elementopadre.id,lista_componenti: []})  
                      if(attributi.tipo == "BTN"){
                        this.alyowool.lista_bottoni.push(attributi.elementopadre.lista_componenti[attributi.elementopadre.lista_componenti.length-1]);
                      }
                      for(var elemento2 of attributi.elemento.lista_componenti){
                        this.inserimento({funzione: 'esistente',elementopadre: attributi.elementopadre.lista_componenti[attributi.elementopadre.lista_componenti.length-1],elemento: elemento2}); 
                      }
                    }else{
                      attributi.elementopadre.lista_componenti.push({id: dati2.id,posizione: attributi.elementopadre.lista_componenti.length,componente: componente,classe: attributi.elemento.classe,tipo: attributi.elemento.tipo,id_componente: dati.id,livello: 1,eventi: [0,0],id_padre: attributi.elementopadre.id})  
                    }
  
                  }
    
                })
              }
          })
        }
  
      }
  
    }
  
    modifica(attributi: any){
  
      //this.alyowool.s("attributi: ",attributi)
  
      if(attributi.tabella == "alyocontenitori"){
  
        var provisorio = attributi.valore
        if(attributi.valore != 0){
          provisorio = attributi.valore.id
        }
  
        var formdate = new FormData();
        formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+provisorio+"' WHERE id = "+this.elemento.id);
  
        this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
          this.alyowool.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
          if(dati.response){   
            this.elemento.id_componente = attributi.valore.id;
          } 
        });
      }
  
      if(attributi.tabella == "alyoicone"){
  
        var formdate = new FormData();
        formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+attributi.id);
  
        this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
          this.alyowool.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
          if(dati.response){   
            this.elemento.componente["valore"] = attributi.valore;
          } 
        });
      }
  
      if(attributi.tabella == "alyoimmagini"){
  
        var formdate = new FormData();
        formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+this.elemento.id_componente);
  
        this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
          this.alyowool.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
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
          //this.alyowool.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
          if(dati.response){ 
            this.elemento.componente["tipo"] = attributi.valore;
          } 
          //this.alyowool.s("attributi.valore: ",attributi.valore)
        });
      }
  
      if(attributi.tabella == "alyobottoni"){
  
        var formdate = new FormData();
        formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+this.elemento.id_componente);
  
        this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
          this.alyowool.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
          if(dati.response){ 
            this.elemento.componente["tipo"] = attributi.valore;
          } 
          //this.alyowool.s("attributi.valore: ",attributi.valore)
        });
      }
  
      if(attributi.tabella == "alyocomponenti"){
  
        var formdate = new FormData();
        formdate.append("sql","UPDATE "+attributi.tabella+" SET "+attributi.attributo+" = '"+attributi.valore+"' WHERE id = "+this.elemento.id_componente);
  
        this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
          this.alyowool.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
          if(dati.response){ 
            this.elemento.componente["tipo"] = attributi.valore;
          } 
        });
      }
      
    }
  
    //--------------------ALTRI FUNZIONI------------------------
  
    rgba(colore: any){
  
      colore = this.individuacolore(colore)
      colore = this.alyowool.colori_esadecimali[colore]
      return [this.rgb(colore)?.r,this.rgb(colore)?.g,this.rgb(colore)?.b]
    }
  
    rgb(colore: any) {
  
      colore = this.individuacolore(colore)
      var esadecimale = this.alyowool.colori_esadecimali[colore]
      var risultato = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(esadecimale);
      return risultato ? {
        r: parseInt(risultato[1], 16),
        g: parseInt(risultato[2], 16),
        b: parseInt(risultato[3], 16)
      } : null;
    }
  
    individuacolore(colore: any){
  
      //this.alyowool.s("this.alyocolore: ",this.alyowool.alyocolore.variabile)
      if(colore == "mc"){return this.alyowool.alyocolore.variabile}
      if(this.alyowool.alyocolore.fisso[colore] != undefined){return this.alyowool.alyocolore.fisso[colore]}
      if(this.alyowool.alyowool.colori.includes(colore)){return colore}
      return "";
      
    }
    
    selezione(attributi: any){
  
      this.alyowool.s("ATTRIBUTI: ",attributi)
      var vet = attributi.elemento.classe
      vet[attributi.id_componente][attributi.id_classe] = attributi.id_lista
      var sql = "UPDATE alyocontenitori SET classe = '"+this.convertiarraystringa("join",vet)+"' WHERE id = "+attributi.elemento.id;
      
      var formdate = new FormData();
      formdate.append("sql",sql);
  
      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
  
        //this.alyowool.s("dati: ",dati)
        if(dati.response){   
          attributi.elemento.classe[attributi.id_componente][attributi.id_classe] = attributi.id_lista;
          var nome = this.componenti[attributi.id_componente].nome
          //this.alyowool.s("nome: ",nome)
          this.elemento.lista_classe[nome][attributi.id_classe] = this.lista_classe[this.elemento.tipo].lista[nome][attributi.id_classe].classi[attributi.id_lista]
  
          //this.alyowool.s("this.elemento.lista_classe[nome][attributi.id_classe]: ",this.elemento.lista_classe[nome][attributi.id_classe])
        } 
      });
  
    }
  
    bottoneselezionato(tipo: any,elemento: any){
  
      //this.alyowool.s("elemento: ",elemento);
  
      if(tipo == "classe"){
        for(var elemento2 of this.componenti){
          for(var elemento3 of this.lista_classe[this.elemento.tipo].lista[elemento2.nome]){elemento3.selezione = false;}
        }
        elemento.selezione = true;
      }
  
      if(tipo == "aggiungi"){
        for(var ele of this.lista_tipi_aggiungi){
          ele.selezione = false;
        }
        elemento.selezione = true;
      }
    }
  
    convertiarraystringa(funzione: any,elemento: any){
  
      if(funzione == "join"){
        return elemento[0].join(",")+"|"+elemento[1].join(",");
      }else{
        return [elemento.split("|")[0].split(","),elemento.split("|")[1].split(",")]
      }
    }
  
    aggiornapiano(evento: any){
     
      //this.alyowool.s("EVENTO: ",evento)
      if(evento){
        this.elemento.piano = 1;
        this.eventopiano.emit(1);
      }else{     
        this.elemento.piano = 0;
        this.eventopiano.emit(-1);
      }
  
    }
  
    drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
      moveItemInArray(this.elemento.lista_componenti, event.previousIndex, event.currentIndex);
      // this.alyowool.s("event.previousIndex: ",event.previousIndex)
      // this.alyowool.s("event.currentIndex: ",event.currentIndex)
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
      //this.alyowool.s("QUERY: ",variabile)
      this.alyoservice.alyo_modifica(formdate).subscribe(dati => {
        // this.s("DATI: { ",dati.messaggio+" } { "+dati.response+" }")
        if(dati.response){   
          //this.s("DATI: { ",dati.messaggio+" }")
        } 
      });
    }
  
    creavettore(lunghezza: any,valore: any){
      return [...Array(lunghezza).keys()].map(i => valore);
    }
  
    duplica(){
      //this.alyowool.s("ELEMENTO DUPLICA: ",this.elemento);
    }
  
    trovacolore(elemento: any){
      for(var classe of this.elemento.classe){
        if(classe == elemento){return true}
      }
      return false;
    }
  
    creazionelistaduecolori()
    { 
      var array: any = []
      for (var key in this.alyocolore.fisso) {
        array.push({nome: key, valore: this.alyocolore.fisso[key]})
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
  
    aggiornabottoni(elementoselezionato: any){
  
      for(var elemento2 of this.alyowool.lista_bottoni.filter((elemento2: any) => {return elemento2 != ''?elemento2.componente.tipo == 1:''})){
        elemento2.selezionato = false;
      }
  
      elementoselezionato.selezionato = !elementoselezionato.selezionato;
      
    }
  
    filtro(lista: any){
      var vet = []
      for(var elemento of lista){
        if(elemento.tipo == 'BTN' && elemento.componente.tipo == 1){vet.push(elemento)}
      }
      return vet;
    }
  
}
