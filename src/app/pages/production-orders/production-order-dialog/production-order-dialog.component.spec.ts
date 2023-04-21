import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrderDialogComponent } from './production-order-dialog.component';

describe('ProductionOrderDialogComponent', () => {
  let component: ProductionOrderDialogComponent;
  let fixture: ComponentFixture<ProductionOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionOrderDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
