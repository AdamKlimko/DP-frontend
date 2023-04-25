import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiProductOrderTabComponent } from './semi-product-order-tab.component';

describe('SemiProductOrderTabComponent', () => {
  let component: SemiProductOrderTabComponent;
  let fixture: ComponentFixture<SemiProductOrderTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiProductOrderTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiProductOrderTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
