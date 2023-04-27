import { TestBed } from '@angular/core/testing';

import { SemiProductStorageItemService } from './semi-product-storage-item.service';

describe('SemiProductStorageItemService', () => {
  let service: SemiProductStorageItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemiProductStorageItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
