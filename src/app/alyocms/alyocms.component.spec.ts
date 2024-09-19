import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyocmsComponent } from './alyocms.component';

describe('AlyocmsComponent', () => {
  let component: AlyocmsComponent;
  let fixture: ComponentFixture<AlyocmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlyocmsComponent]
    });
    fixture = TestBed.createComponent(AlyocmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
