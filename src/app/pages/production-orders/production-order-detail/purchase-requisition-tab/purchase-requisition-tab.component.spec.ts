import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequisitionTabComponent } from './purchase-requisition-tab.component';

describe('PurchaseRequisitionTabComponent', () => {
  let component: PurchaseRequisitionTabComponent;
  let fixture: ComponentFixture<PurchaseRequisitionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseRequisitionTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseRequisitionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
