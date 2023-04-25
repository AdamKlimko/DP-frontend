import { TestBed } from '@angular/core/testing';

import { SemiProductOrderService } from './semi-product-order.service';

describe('SemiProductOrderService', () => {
  let service: SemiProductOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemiProductOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
