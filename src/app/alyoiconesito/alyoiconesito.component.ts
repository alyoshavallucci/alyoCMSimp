import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlyoService } from '../alyo.service';

@Component({
  selector: 'alyoiconesito',
  templateUrl: './alyoiconesito.component.html',
  styleUrls: ['./alyoiconesito.component.css']
})
export class AlyoiconesitoComponent {

  @Input()  alyo:        any = null;
  @Output() alyoiconesito = new EventEmitter()

  contatore = 0;


  icone: any =  {}

  constructor(private alyoservice: AlyoService){}


  ngOnInit(): void {
    this.alyoiconesito.emit(this);
    this.icone =  {        
      true: [this.alyo.percorso_sito+"assets/immagini/icone/icona1.png",this.alyo.percorso_sito+"assets/immagini/icone/icona2.png",this.alyo.percorso_sito+"assets/immagini/icone/icona3.png",this.alyo.percorso_sito+"assets/immagini/icone/icona4.png",this.alyo.percorso_sito+"assets/immagini/icone/icona5.png",this.alyo.percorso_sito+"assets/immagini/icone/icona6.png",this.alyo.percorso_sito+"assets/immagini/icone/icona7.png",this.alyo.percorso_sito+"assets/immagini/icone/icona8.png",this.alyo.percorso_sito+"assets/immagini/icone/icona9.png",this.alyo.percorso_sito+"assets/immagini/icone/icona10.png"],
      false: [this.alyo.percorso_sito+"assets/immagini/icone/iconafluo1.png",this.alyo.percorso_sito+"assets/immagini/icone/iconafluo2.png",this.alyo.percorso_sito+"assets/immagini/icone/iconafluo3.png",this.alyo.percorso_sito+"assets/immagini/icone/iconafluo4.png",this.alyo.percorso_sito+"assets/immagini/icone/iconafluo5.png"]
    }
    //this.alyo.s("URL: ",this.icone.true[0])
  }

  intervallo(){
  
      
      if(this.contatore > this.icone[this.alyo.alyocolore.modalitachiara].length-1){ this.contatore = 0;    }

      $("#alyo_logi_sitoweb").attr("href", this.icone[this.alyo.alyocolore.modalitachiara][this.contatore]); 
      this.contatore = this.contatore+1;
  }
      //if(this.testo  != null){ $("#alyo_nomi_sitoweb").html(this.testo); }
    
}


