import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReservationTableComponent } from './product-reservation-table.component';

describe('ProductReservationTableComponent', () => {
  let component: ProductReservationTableComponent;
  let fixture: ComponentFixture<ProductReservationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReservationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReservationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
