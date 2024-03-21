import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyocoloriComponent } from './alyocolori.component';

describe('AlyocoloriComponent', () => {
  let component: AlyocoloriComponent;
  let fixture: ComponentFixture<AlyocoloriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlyocoloriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlyocoloriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
