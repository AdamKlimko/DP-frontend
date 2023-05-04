import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiProductsComponent } from './semi-products.component';

describe('SemiProductsComponent', () => {
  let component: SemiProductsComponent;
  let fixture: ComponentFixture<SemiProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
