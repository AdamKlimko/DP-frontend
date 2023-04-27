import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStorageItemTableComponent } from './product-storage-item-table.component';

describe('ProductStorageItemTableComponent', () => {
  let component: ProductStorageItemTableComponent;
  let fixture: ComponentFixture<ProductStorageItemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductStorageItemTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStorageItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
