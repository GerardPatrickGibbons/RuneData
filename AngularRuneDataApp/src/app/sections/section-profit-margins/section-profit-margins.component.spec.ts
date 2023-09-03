import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProfitMarginsComponent } from './section-profit-margins.component';

describe('SectionProfitMarginsComponent', () => {
  let component: SectionProfitMarginsComponent;
  let fixture: ComponentFixture<SectionProfitMarginsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionProfitMarginsComponent]
    });
    fixture = TestBed.createComponent(SectionProfitMarginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
