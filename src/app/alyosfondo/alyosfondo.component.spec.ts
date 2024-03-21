import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyosfondoComponent } from './alyosfondo.component';

describe('AlyosfondoComponent', () => {
  let component: AlyosfondoComponent;
  let fixture: ComponentFixture<AlyosfondoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlyosfondoComponent]
    });
    fixture = TestBed.createComponent(AlyosfondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
