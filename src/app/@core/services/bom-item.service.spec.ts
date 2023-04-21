import { TestBed } from '@angular/core/testing';

import { BomItemService } from './bom-item.service';

describe('BomItemService', () => {
  let service: BomItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BomItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
