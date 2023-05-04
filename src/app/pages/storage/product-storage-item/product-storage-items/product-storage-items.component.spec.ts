import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStorageItemsComponent } from './product-storage-items.component';

describe('ProductStorageItemComponent', () => {
  let component: ProductStorageItemsComponent;
  let fixture: ComponentFixture<ProductStorageItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductStorageItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStorageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
