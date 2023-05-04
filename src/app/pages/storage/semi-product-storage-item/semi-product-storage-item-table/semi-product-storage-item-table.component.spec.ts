import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiProductStorageItemTableComponent } from './semi-product-storage-item-table.component';

describe('SemiProductStorageItemTableComponent', () => {
  let component: SemiProductStorageItemTableComponent;
  let fixture: ComponentFixture<SemiProductStorageItemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiProductStorageItemTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiProductStorageItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
