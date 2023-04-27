import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOrderTabComponent } from './product-order-tab.component';

describe('ProductOrderTabComponent', () => {
  let component: ProductOrderTabComponent;
  let fixture: ComponentFixture<ProductOrderTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOrderTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOrderTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
