import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrderTableComponent } from './production-order-table.component';

describe('ProductionOrderTableComponent', () => {
  let component: ProductionOrderTableComponent;
  let fixture: ComponentFixture<ProductionOrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionOrderTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
