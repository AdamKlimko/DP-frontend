import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReservationsComponent } from './product-reservations.component';

describe('ProductReservationsComponent', () => {
  let component: ProductReservationsComponent;
  let fixture: ComponentFixture<ProductReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
