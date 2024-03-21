import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyocontenutiscorrevoliComponent } from './alyocontenutiscorrevoli.component';

describe('AlyocontenutiscorrevoliComponent', () => {
  let component: AlyocontenutiscorrevoliComponent;
  let fixture: ComponentFixture<AlyocontenutiscorrevoliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlyocontenutiscorrevoliComponent]
    });
    fixture = TestBed.createComponent(AlyocontenutiscorrevoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
