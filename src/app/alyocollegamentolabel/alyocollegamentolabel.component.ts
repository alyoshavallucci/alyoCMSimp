import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlyoService } from '../alyo.service';

@Component({
  selector: 'alyocollegamentolabel',
  templateUrl: './alyocollegamentolabel.component.html',
  styleUrls: ['./alyocollegamentolabel.component.css']
})
// export class alyocollegamentolabelComponent {

//   @Input()  alyo:        any = null;
//   @Input()  selezionato:     any = null;
//   @Input()  elemento:        any = null;
//   @Input()  valori:          boolean = false;
//   @Input()  scala:           string = "1";

//   @Output() alyocollegamento = new EventEmitter();
//   @Output() eventobottoni   = new EventEmitter();

//   hover = false;
  
//   ngOnInit(): void {}

//   rgba(colore: any){

//     colore = this.individuacolore(colore)
//     colore = this.alyo.colori_esadecimali[colore]
//     return [this.rgb(colore)?.r,this.rgb(colore)?.g,this.rgb(colore)?.b]
//   }

//   rgb(colore: any) {

//     colore = this.individuacolore(colore)
//     var esadecimale = this.alyo.colori_esadecimali[colore]
//     var risultato = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(esadecimale);
//     return risultato ? {
//       r: parseInt(risultato[1], 16),
//       g: parseInt(risultato[2], 16),
//       b: parseInt(risultato[3], 16)
//     } : null;
//   }

//   individuacolore(colore: any){

//     //this.alyo.s("this.alyocolore: ",this.alyo.alyocolore.variabile)
//     if(colore == "mc"){return this.alyo.alyocolore.variabile}
//     if(this.alyo.alyocolore.fisso[colore] != undefined){return this.alyo.alyocolore.fisso[colore]}
//     if(this.alyo.alyo.colori.includes(colore)){return colore}
//     return "";
    
//   }

// }

export class alyocollegamentolabelComponent {

  @Input()  alyo:        any = null;
  @Input()  elemento:    any = null;

  constructor(private alyoservice: AlyoService){}

  ngOnInit(): void {}

  //--------------------OPERAZIONI------------------------

  caricamento(){}

}