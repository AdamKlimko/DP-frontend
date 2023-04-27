import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReservationTabComponent } from './product-reservation-tab.component';

describe('ProductReservationsTabComponent', () => {
  let component: ProductReservationTabComponent;
  let fixture: ComponentFixture<ProductReservationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReservationTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReservationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
