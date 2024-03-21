import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyoiconesitoComponent } from './alyoiconesito.component';

describe('AlyoiconesitoComponent', () => {
  let component: AlyoiconesitoComponent;
  let fixture: ComponentFixture<AlyoiconesitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlyoiconesitoComponent]
    });
    fixture = TestBed.createComponent(AlyoiconesitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
