import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyoIconaNomeSitoComponent } from './alyoiconanomesito.component';

describe('AlyoIconaNomeSitoComponent', () => {
  let component: AlyoIconaNomeSitoComponent;
  let fixture: ComponentFixture<AlyoIconaNomeSitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlyoIconaNomeSitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlyoIconaNomeSitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
