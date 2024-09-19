import { ComponentFixture, TestBed } from '@angular/core/testing';

import { alyocollegamentoComponent } from './alyocollegamento.component';

describe('alyocollegamentoComponent', () => {
  let component: alyocollegamentoComponent;
  let fixture: ComponentFixture<alyocollegamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [alyocollegamentoComponent]
    });
    fixture = TestBed.createComponent(alyocollegamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
