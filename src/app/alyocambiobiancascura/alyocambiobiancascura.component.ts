import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlyoService } from '../alyo.service';
import { CdkDragDrop, moveItemInArray,} from '@angular/cdk/drag-drop';

@Component({
  selector: 'alyocambiobiancascura',
  templateUrl: './alyocambiobiancascura.component.html',
  styleUrls: ['./alyocambiobiancascura.component.css']
})
export class AlyocambiobiancascuraComponent {

  @Input()  alyo:            any = null;
  @Input()  elemento:        any = null;

  constructor(private alyoservice: AlyoService){}

  ngOnInit(): void {}

}
