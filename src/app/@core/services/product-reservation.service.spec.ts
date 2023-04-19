import { TestBed } from '@angular/core/testing';

import { ProductReservationService } from './product-reservation.service';

describe('ProductReservationService', () => {
  let service: ProductReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
