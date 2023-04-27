import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrderTabComponent } from './production-order-tab.component';

describe('ProductionOrderTabComponent', () => {
  let component: ProductionOrderTabComponent;
  let fixture: ComponentFixture<ProductionOrderTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionOrderTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionOrderTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
