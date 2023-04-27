import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequisitionDialogComponent } from './purchase-requisition-dialog.component';

describe('PurchaseRequisitionDialogComponent', () => {
  let component: PurchaseRequisitionDialogComponent;
  let fixture: ComponentFixture<PurchaseRequisitionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseRequisitionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseRequisitionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
