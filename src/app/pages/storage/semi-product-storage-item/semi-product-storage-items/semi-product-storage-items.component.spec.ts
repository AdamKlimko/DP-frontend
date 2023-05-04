import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiProductStorageItemsComponent } from './semi-product-storage-items.component';

describe('SemiProductStorageItemComponent', () => {
  let component: SemiProductStorageItemsComponent;
  let fixture: ComponentFixture<SemiProductStorageItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiProductStorageItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiProductStorageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
