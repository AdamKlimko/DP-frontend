import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequisitionsComponent } from './purchase-requisitions.component';

describe('PurchaseRequisitionsComponent', () => {
  let component: PurchaseRequisitionsComponent;
  let fixture: ComponentFixture<PurchaseRequisitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseRequisitionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseRequisitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
