import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequisitionTableComponent } from './purchase-requisition-table.component';

describe('PurchaseRequisitionTableComponent', () => {
  let component: PurchaseRequisitionTableComponent;
  let fixture: ComponentFixture<PurchaseRequisitionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseRequisitionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseRequisitionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
