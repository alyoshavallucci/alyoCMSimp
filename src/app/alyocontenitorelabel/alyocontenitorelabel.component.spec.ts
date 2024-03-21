import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyocontenitorelabelComponent } from './alyocontenitorelabel.component';

describe('AlyocontenitorelabelComponent', () => {
  let component: AlyocontenitorelabelComponent;
  let fixture: ComponentFixture<AlyocontenitorelabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlyocontenitorelabelComponent]
    });
    fixture = TestBed.createComponent(AlyocontenitorelabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
