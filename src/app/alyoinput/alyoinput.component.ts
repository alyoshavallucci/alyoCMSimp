import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faCircleXmark, faEyeSlash, faEye, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { AlyoService } from '../alyo.service';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';

/*
  TESTO
  EMAIL
  PASSWORD
*/
@Component({
  selector: 'alyoinput',
  templateUrl: './alyoinput.component.html',
  styleUrls: ['./alyoinput.component.css']
})
export class AlyoInputComponent implements OnInit {

// --------------- INPUT ---------------

  @Input() tipo: any = "text";
  @Input() alyoclasse: any = null;
  @Input() alyostile: any = null;
  @Input() alyowool: any = null
  @Input() testo: any = null;
  @Input() placeholder: any;
  @Input() bordo: any = "none";
  @Input() bottone_cancella: boolean = true;

  @Input() modifica: any = null; //[tabella,id,attributo]
  @Input() chiavecookie: any = null; //{chiave: '',valore: ''}
  @Input() chiave: any = null;

// --------------- OUTPUT ---------------
  
  @Output() alyoinput = new EventEmitter();

  visibilita = false;
  tipo_input = "";
  cornice: boolean = false;
  lista_validazione: any = [{}];
  panello_validazione: boolean = false;
  alyoFonts: any = null;

  faCircleXmark = faCircleXmark;
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  faCircleCheck = faCircleCheck;

  constructor(private alyoservice: AlyoService,private cookie: CookieService) { }

  ngOnInit(): void {
    this.tipo_input = this.tipo;
    this.alyoinput.emit(this);
  }

  alyokeyupfunzione(){

    if(this.modifica != null){
      this.modifica_server()
    }

    if(this.chiavecookie != null){
      this.scrivicookies()
    }

    if(this.chiave != null){
      this.inserimento()
    }

    this.alyoinput.emit(this);
   }

  modifica_server(){

    var formdate = new FormData();
    formdate.append("sql","UPDATE "+this.modifica[0]+" SET "+this.modifica[2]+" = '"+this.testo.valore+"' WHERE id = "+this.modifica[1]);

    this.alyoservice.alyo_modifica(formdate).subscribe(dati_c => {
      // this.s("DATI: { ",dati_c.messaggio+" } { "+dati_c.response+" }")
      if(dati_c.response){   
        this.testo.valore = this.testo.valore;
      } 
      
    });
    
  }

  scrivicookies(){
    var now = new Date()
    var exp = new Date(now.getFullYear()+2, now.getMonth(), now.getDate());
    this.cookie.set(this.chiavecookie,this.testo.valore,{ expires: exp })
  }

  inserimento(){
    this.alyoservice.alyo_inserimento_localstorage(this.chiave,this.testo.valore);
  }

  s(testo: string,valore: any){
    console.log("");
    console.log(testo);
    console.log(valore);
    console.log("");
  }
}
