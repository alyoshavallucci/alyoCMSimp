import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'alyocolori',
  templateUrl: './alyocolori.component.html',
  styleUrls: ['./alyocolori.component.css']
})
export class AlyoColoriComponent implements OnInit {

  @Input() velocita: any;
  @Output() esterno = new EventEmitter()
  @Output() alyocolore = new EventEmitter()
  
  fissi: any = {

    bianconero:{
      true:  "bianco",
      false: "nero"
    },
    grigio10nero:{
      true: "grigio10",
      false: "nero",
    },
    biancogrigio60:{
      true: "bianco",
      false: "grigio60",
    },
    grigio10grigio60: {
      true: "grigio10",
      false: "grigio60",
    },
    nerobianco: {
      true:  "nero",
      false: "bianco"
    },
    grigio10grigio70: {
      true:  "grigio10",
      false: "grigio70"
    },
    grigio20grigio80: {
      true:  "grigio20",
      false: "grigio80"
    },
    grigio30grigio70: {
      true:  "grigio50",
      false: "grigio50"
    },
    grigio40grigio60: {
      true:  "grigio50",
      false: "grigio50"
    },
    grigio50grigio50: {
      true:  "grigio50",
      false: "grigio50"
    },
    grigio60grigio40: {
      true:  "grigio50",
      false: "grigio50"
    },
    grigio70grigio30: {
      true:  "grigio50",
      false: "grigio50"
    },
    grigio80grigio20: {
      true:  "grigio50",
      false: "grigio50"
    },
    grigio90grigio10: {
      true:  "grigio50",
      false: "grigio50"
    },
  }

  variabili: any = {
    true:  ["rosso","verde","blu","rosavivo","giallo","viola","marrone","arancione","turchese","orchidea"],
    false: ["giallofluo","rosafluo","arancionefluo","verdefluo","azzurrofluo"]
  }

  variabile: any = "rosso";
  fisso: any =  {};
  contatore = 0;


  modalitachiara: boolean = true;
  modalita_selezionata = false;
  variabileselezionato = 0;

  constructor(){}

  ngOnInit(): void {

    this.modalitaChiara();
    this.variabile = this.variabili[''+this.modalitachiara][0];
    this.fisso     = this.ritornafisso();
    this.alyocolore.emit(this);
    
  }

  intervallo(){
    
    this.modalitaChiara();
    this.variabile = this.ritornavariabile();
    this.fisso     = this.ritornafisso();
    this.contatore += 1;
  }

  ritornavariabile(){

    if(this.variabileselezionato>this.variabili[""+this.modalitachiara+""].length-1){
        this.variabileselezionato = 0;
    }
    var colore = this.variabili[''+this.modalitachiara][this.variabileselezionato]
    this.variabileselezionato++;
    return colore;
  }

  ritornafisso(){

    var dict: any = {}
    for (const [key, value] of Object.entries(this.fissi)) {
      dict[key] = this.fissi[key][""+this.modalitachiara+""];
    }

    return dict
  }

  modalitaChiara() {
    if(!this.modalita_selezionata) {
      if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){this.modalitachiara = false;}
      else{this.modalitachiara = true;}
    }
  }

  s(intestazione: any, testo: any){
    console.log();
    console.log(intestazione);
    console.log(testo);
    console.log();
  }

}
