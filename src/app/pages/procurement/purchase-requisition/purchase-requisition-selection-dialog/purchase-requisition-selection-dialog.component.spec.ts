import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequisitionSelectionDialogComponent } from './purchase-requisition-selection-dialog.component';

describe('PurchaseRequisitionSelectionDialogComponent', () => {
  let component: PurchaseRequisitionSelectionDialogComponent;
  let fixture: ComponentFixture<PurchaseRequisitionSelectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseRequisitionSelectionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseRequisitionSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
