import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlyoService } from '../alyo.service';

@Component({
  selector: 'alyoiconesito',
  templateUrl: './alyoiconesito.component.html',
  styleUrls: ['./alyoiconesito.component.css']
})
export class AlyoiconesitoComponent {

  @Input()  alyowool:        any = null;
  @Output() alyoiconesito = new EventEmitter()

  contatore = 0;

  percorso = {
    true:  "./../assets/",
    false: "https://www.alyowool.com/"
  }

  icone: any =  {        
    true: ["https://www.alyowool.com/alyocurriculum/assets/icone/icona1.png","https://www.alyowool.com/alyocurriculum/assets/icone/icona2.png","https://www.alyowool.com/alyocurriculum/assets/icone/icona3.png","https://www.alyowool.com/alyocurriculum/assets/icone/icona4.png","https://www.alyowool.com/alyocurriculum/assets/icone/icona5.png","https://www.alyowool.com/alyocurriculum/assets/icone/icona6.png","https://www.alyowool.com/alyocurriculum/assets/icone/icona7.png","https://www.alyowool.com/alyocurriculum/assets/icone/icona8.png","https://www.alyowool.com/alyocurriculum/assets/icone/icona9.png","https://www.alyowool.com/alyocurriculum/assets/icone/icona10.png"],
    false: ["https://www.alyowool.com/alyocurriculum/assets/icone/iconafluo1.png","https://www.alyowool.com/alyocurriculum/assets/icone/iconafluo2.png","https://www.alyowool.com/alyocurriculum/assets/icone/iconafluo3.png","https://www.alyowool.com/alyocurriculum/assets/icone/iconafluo4.png","https://www.alyowool.com/alyocurriculum/assets/icone/iconafluo5.png"]
  }

  constructor(private alyoservice: AlyoService){}


  ngOnInit(): void {
    this.alyoiconesito.emit(this);
  }

  intervallo(){
  
      
      if(this.contatore > this.icone[this.alyowool.alyocolore.modalitachiara].length-1){ this.contatore = 0;    }

      $("#alyo_logi_sitoweb").attr("href", this.icone[this.alyowool.alyocolore.modalitachiara][this.contatore]); 
      this.contatore = this.contatore+1;
  }
      //if(this.testo  != null){ $("#alyo_nomi_sitoweb").html(this.testo); }
    
}


