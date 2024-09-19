import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'alyocollegamentovis',
  templateUrl: './alyocollegamentovis.component.html',
  styleUrls: ['./alyocollegamentovis.component.css']
})
export class AlyocollegamentovisComponent {

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

  url: any;

  constructor(private sanitizer: DomSanitizer){}

  ngOnInit(): void {if(this.elemento.tipo == 'FRM'){this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.elemento.componente.valore)}}


  ritornalink(){

    for(var tipo of this.alyo.tipi_link){
      if(tipo.tipo == this.elemento.componente.tipo){
        return tipo.valore+this.elemento.componente.valore
      }
    }
  }

}
