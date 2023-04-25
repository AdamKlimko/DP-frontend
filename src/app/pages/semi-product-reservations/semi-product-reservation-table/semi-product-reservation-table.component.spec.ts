import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiProductReservationTableComponent } from './semi-product-reservation-table.component';

describe('SemiProductReservationTableComponent', () => {
  let component: SemiProductReservationTableComponent;
  let fixture: ComponentFixture<SemiProductReservationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiProductReservationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiProductReservationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
