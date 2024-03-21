import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyofileComponent } from './alyofile.component';

describe('AlyofileComponent', () => {
  let component: AlyofileComponent;
  let fixture: ComponentFixture<AlyofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlyofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlyofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
