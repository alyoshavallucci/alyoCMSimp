import { Component, Input } from '@angular/core';

@Component({
  selector: 'alyosfondo',
  templateUrl: './alyosfondo.component.html',
  styleUrls: ['./alyosfondo.component.css']
})
export class AlyosfondoComponent {

  @Input()  alyo:        any = null;
  @Input()  alyocolore:      any = null;


  scuro_chiara: any = []
  sfondi: any = {}

  constructor() {}
  ngOnInit(): void {

    this.scuro_chiara = [
      {src: this.alyo.alyowoolcom+"assets/immagini/sfondo/chiaro.jpg",valore: true},
      {src: this.alyo.alyowoolcom+"assets/immagini/sfondo/scuro.jpg" ,valore: false}
    ]
  
    this.sfondi = {
      true:  this.alyo.alyowoolcom+"assets/immagini/sfondo/sfondo.gif",
      false: this.alyo.alyowoolcom+"assets/immagini/sfondo/sfondofluo.gif"
    }
  }

  aggiornamento(elemento2: any){

    this.alyo.alyocolore.modalita_selezionata = true;
    for(var ele of this.scuro_chiara){
      ele.valore = false;
    }
    elemento2.valore = true;
    this.alyo.alyocolore.modalitachiara = !this.alyo.alyocolore.modalitachiara
    this.alyo.lista_funzioni()
    //this.alyo.s("this.alyocolore: ",this.alyo.alyocolore.modalitachiara)

  }



}
