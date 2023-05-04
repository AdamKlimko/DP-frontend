import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiProductOrderTableComponent } from './semi-product-order-table.component';

describe('SemiProductOrderTableComponent', () => {
  let component: SemiProductOrderTableComponent;
  let fixture: ComponentFixture<SemiProductOrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiProductOrderTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiProductOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
