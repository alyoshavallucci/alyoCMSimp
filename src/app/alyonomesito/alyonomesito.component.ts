import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlyoService } from '../alyo.service';

@Component({
  selector: 'alyonomesito',
  templateUrl: './alyonomesito.component.html',
  styleUrls: ['./alyonomesito.component.css']
})
export class AlyonomesitoComponent {

  @Input() alyo: any = null;
  @Output() alyonomesito = new EventEmitter()

  testo = "ALYO SVILUPPO"

  constructor(private alyoservice: AlyoService){}

  ngOnInit(): void {this.alyonomesito.emit(this)}

  intervallo(){
    $("#alyo_nomi_sitoweb").html(this.alyo.alyofonts.converetitestofontrandom(this.testo)); 
  }

}
