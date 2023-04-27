import { TestBed } from '@angular/core/testing';

import { ProductStorageItemService } from './product-storage-item.service';

describe('ProductStorageItemService', () => {
  let service: ProductStorageItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductStorageItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
