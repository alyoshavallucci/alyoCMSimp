import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyoInputComponent } from './alyoinput.component';

describe('AlyoInputComponent', () => {
  let component: AlyoInputComponent;
  let fixture: ComponentFixture<AlyoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlyoInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlyoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
