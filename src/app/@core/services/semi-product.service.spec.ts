import { TestBed } from '@angular/core/testing';

import { SemiProductService } from './semi-product.service';

describe('SemiProductService', () => {
  let service: SemiProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemiProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
