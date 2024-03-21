import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlyoService } from '../alyo.service';

@Component({
  selector: 'alyonomesito',
  templateUrl: './alyonomesito.component.html',
  styleUrls: ['./alyonomesito.component.css']
})
export class AlyonomesitoComponent {

  @Input() alyowool: any = null;
  @Output() alyonomesito = new EventEmitter()

  testo = "ALYO WOOL"

  constructor(private alyoservice: AlyoService){}

  ngOnInit(): void {this.alyonomesito.emit(this)}

  intervallo(){
    $("#alyo_nomi_sitoweb").html(this.alyowool.alyofonts.converetitestofontrandom(this.testo)); 
  }

}
