import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'alyogruppoclasse',
  templateUrl: './alyogruppoclasse.component.html',
  styleUrls: ['./alyogruppoclasse.component.css']
})
export class AlyogruppoclasseComponent {

  @Input()  alyo:         any = null;
  @Input()  elemento:        any = null;
  @Input()  padre:        any = null;
  @Input()  attributo:        any = "lista";

  ordine: string = "CRE";
  pannello_tipi = false;

  constructor(){}

  ngOnInit(): void {}

}
