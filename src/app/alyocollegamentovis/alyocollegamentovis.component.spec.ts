import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyocollegamentovisComponent } from './alyocollegamentovis.component';

describe('AlyocollegamentovisComponent', () => {
  let component: AlyocollegamentovisComponent;
  let fixture: ComponentFixture<AlyocollegamentovisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlyocollegamentovisComponent]
    });
    fixture = TestBed.createComponent(AlyocollegamentovisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
