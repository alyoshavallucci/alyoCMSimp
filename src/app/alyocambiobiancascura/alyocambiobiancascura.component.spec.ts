import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyocambiobiancascuraComponent } from './alyocambiobiancascura.component';

describe('AlyocambiobiancascuraComponent', () => {
  let component: AlyocambiobiancascuraComponent;
  let fixture: ComponentFixture<AlyocambiobiancascuraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlyocambiobiancascuraComponent]
    });
    fixture = TestBed.createComponent(AlyocambiobiancascuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
