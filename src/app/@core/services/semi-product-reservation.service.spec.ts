import { TestBed } from '@angular/core/testing';

import { SemiProductReservationService } from './semi-product-reservation.service';

describe('SemiProductReservationService', () => {
  let service: SemiProductReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemiProductReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
