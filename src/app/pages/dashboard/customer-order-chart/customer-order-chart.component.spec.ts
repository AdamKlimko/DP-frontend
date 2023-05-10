import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderChartComponent } from './customer-order-chart.component';

describe('CustomerOrderChartComponent', () => {
  let component: CustomerOrderChartComponent;
  let fixture: ComponentFixture<CustomerOrderChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOrderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
