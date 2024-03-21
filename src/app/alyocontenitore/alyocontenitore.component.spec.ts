import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyocontenitoreComponent } from './alyocontenitore.component';

describe('AlyocontenitoreComponent', () => {
  let component: AlyocontenitoreComponent;
  let fixture: ComponentFixture<AlyocontenitoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlyocontenitoreComponent]
    });
    fixture = TestBed.createComponent(AlyocontenitoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
