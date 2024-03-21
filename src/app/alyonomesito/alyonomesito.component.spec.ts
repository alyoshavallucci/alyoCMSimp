import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyonomesitoComponent } from './alyonomesito.component';

describe('AlyonomesitoComponent', () => {
  let component: AlyonomesitoComponent;
  let fixture: ComponentFixture<AlyonomesitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlyonomesitoComponent]
    });
    fixture = TestBed.createComponent(AlyonomesitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
