import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'alyoiconanomesito',
  templateUrl: './alyoiconanomesito.component.html',
  styleUrls: ['./alyoiconanomesito.component.css']
})
export class AlyoIconaNomeSitoComponent implements OnInit {

  @Input() lista_loghi: any = null;
  @Input() testo: any = null;
  @Input() tipo: any;

  @Output() alyoiconanomesito = new EventEmitter()

  cont_loghi = 0
  cont_nomi_sito = 0;

  logo_corrente = ""
  nome_corrente = ""
  classefonts: any = null;

  icone: any =  {        
    true: ["../assets/icone/icona1.png","../assets/icone/icona2.png","../assets/icone/icona3.png","../assets/icone/icona4.png","../assets/icone/icona5.png","../assets/icone/icona6.png","../assets/icone/icona7.png","../assets/icone/icona8.png","../assets/icone/icona9.png","../assets/icone/icona10.png"],
    false: ["../assets/icone/iconafluo1.png","../assets/icone/iconafluo2.png","../assets/icone/iconafluo3.png","../assets/icone/iconafluo4.png","../assets/icone/iconafluo5.png"]
  }

  constructor() {}

  ngOnInit(): void {

    if(this.tipo == "testo")   { this.funzione1(); }
    if(this.tipo == "nomelogo"){ this.funzione2(); }

    this.alyoiconanomesito.emit(this);
  }

  intervallo(){
   
    if(this.tipo.testo)   { 
      this.funzione1(); 
    
      if(this.lista_loghi!= null ){ this.logo_corrente = this.lista_loghi[0] }
 
      this.cont_loghi++;
      if(this.lista_loghi != null && this.cont_loghi > this.lista_loghi.length-1){ this.cont_loghi = 0; }
  
      if(this.lista_loghi != null ){ this.logo_corrente = this.lista_loghi[this.cont_loghi]  }
    
    }

    if(this.tipo.icone){ 
     
      this.cont_loghi++;
      if(this.lista_loghi != null && this.cont_loghi > this.lista_loghi.length-1){ this.cont_loghi = 0;    }

      if(this.lista_loghi != null){ $("#alyo_logi_sitoweb").attr("href", this.lista_loghi[this.cont_loghi]); }
      if(this.testo  != null){ $("#alyo_nomi_sitoweb").html(this.testo); }
    
    }

  }

  funzione1(){
    if(this.lista_loghi){ this.logo_corrente = this.lista_loghi[0] }
  }

  funzione2(){
    if(this.lista_loghi){ $("#alyo_logi_sitoweb").attr("href", this.lista_loghi[0]); }
    if(this.testo){ setTimeout(() => { $("#alyo_nomi_sitoweb").html(this.testo); },200);}
  }

  s(intestazione: any, testo: any){
      console.log();
      console.log(intestazione);
      console.log(testo);
      console.log();
  }

}
