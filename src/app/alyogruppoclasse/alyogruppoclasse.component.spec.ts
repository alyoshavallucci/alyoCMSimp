import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyogruppoclasseComponent } from './alyogruppoclasse.component';

describe('AlyogruppoclasseComponent', () => {
  let component: AlyogruppoclasseComponent;
  let fixture: ComponentFixture<AlyogruppoclasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlyogruppoclasseComponent]
    });
    fixture = TestBed.createComponent(AlyogruppoclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
