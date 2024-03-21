import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'alyocontenitorelabel',
  templateUrl: './alyocontenitorelabel.component.html',
  styleUrls: ['./alyocontenitorelabel.component.css']
})
export class AlyocontenitorelabelComponent {
  @Input()  alyowool:        any = null;
  @Input()  alyocolore:      any = null;
  @Input()  alyocontenitori: any = null;
  @Input()  selezionato:     any = null;
  @Input()  valori:          boolean = false;
  @Input()  elemento:        any = null;
  @Input()  lista_classe:    any = null;
  @Input()  tipo_classe:     any = null;
  @Output() alyocontenitore = new EventEmitter();
  @Output() eventobottoni   = new EventEmitter();

  alyo="alyo-"
  hover = false;
  ngOnInit(): void {}

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
}
