import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStorageItemDialogComponent } from './product-storage-item-dialog.component';

describe('ProductStorageItemDialogComponent', () => {
  let component: ProductStorageItemDialogComponent;
  let fixture: ComponentFixture<ProductStorageItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductStorageItemDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStorageItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
