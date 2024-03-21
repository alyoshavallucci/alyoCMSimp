import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyofontsComponent } from './alyofonts.component';

describe('AlyofontsComponent', () => {
  let component: AlyofontsComponent;
  let fixture: ComponentFixture<AlyofontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlyofontsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlyofontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
