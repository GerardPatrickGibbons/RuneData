import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTrainingMethodsComponent } from './section-training-methods.component';

describe('SectionTrainingMethodsComponent', () => {
  let component: SectionTrainingMethodsComponent;
  let fixture: ComponentFixture<SectionTrainingMethodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionTrainingMethodsComponent]
    });
    fixture = TestBed.createComponent(SectionTrainingMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
