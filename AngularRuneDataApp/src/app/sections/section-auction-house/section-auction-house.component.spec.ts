import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAuctionHouseComponent } from './section-auction-house.component';

describe('SectionAuctionHouseComponent', () => {
  let component: SectionAuctionHouseComponent;
  let fixture: ComponentFixture<SectionAuctionHouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAuctionHouseComponent]
    });
    fixture = TestBed.createComponent(SectionAuctionHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
