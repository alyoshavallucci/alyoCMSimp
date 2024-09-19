import { ComponentFixture, TestBed } from '@angular/core/testing';

import { alyocollegamentolabelComponent } from './alyocollegamentolabel.component';

describe('alyocollegamentolabelComponent', () => {
  let component: alyocollegamentolabelComponent;
  let fixture: ComponentFixture<alyocollegamentolabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [alyocollegamentolabelComponent]
    });
    fixture = TestBed.createComponent(alyocollegamentolabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
