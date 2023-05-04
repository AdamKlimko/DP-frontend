import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderDialogComponent } from './customer-order-dialog.component';

describe('CustomerOrderDialogComponent', () => {
  let component: CustomerOrderDialogComponent;
  let fixture: ComponentFixture<CustomerOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
