import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderTableComponent } from './customer-order-table.component';

describe('CustomerOrdersComponent', () => {
  let component: CustomerOrderTableComponent;
  let fixture: ComponentFixture<CustomerOrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
