import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderProcessDialogComponent } from './purchase-order-process-dialog.component';

describe('PurchaseOrderProcessDialogComponent', () => {
  let component: PurchaseOrderProcessDialogComponent;
  let fixture: ComponentFixture<PurchaseOrderProcessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrderProcessDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseOrderProcessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
