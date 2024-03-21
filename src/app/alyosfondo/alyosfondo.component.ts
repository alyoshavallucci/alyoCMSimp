import { Component, Input } from '@angular/core';

@Component({
  selector: 'alyosfondo',
  templateUrl: './alyosfondo.component.html',
  styleUrls: ['./alyosfondo.component.css']
})
export class AlyosfondoComponent {

  @Input()  alyowool:        any = null;
  @Input()  alyocolore:      any = null;

  percorso = {
    true:  "./../",
    false: "https://www.alyowool.com/"
  }
  
  scuro_chiara: any = [
    {src: "alyocurriculum/assets/immagini/sfondo/chiaro.jpg",valore: true},
    {src: "alyocurriculum/assets/immagini/sfondo/scuro.jpg" ,valore: false}
  ]

  sfondi: any = {
    true:  "alyocurriculum/assets/immagini/sfondo/sfondo.gif",
    false: "alyocurriculum/assets/immagini/sfondo/sfondofluo.gif"
  }

  constructor() {}
  ngOnInit(): void {}

  aggiornamento(elemento2: any){

    this.alyowool.alyocolore.modalita_selezionata = true;
    for(var ele of this.scuro_chiara){
      ele.valore = false;
    }
    elemento2.valore = true;
    this.alyowool.alyocolore.modalitachiara = !this.alyowool.alyocolore.modalitachiara
    this.alyowool.lista_funzioni()
    //this.alyowool.s("this.alyocolore: ",this.alyowool.alyocolore.modalitachiara)

  }



}
