import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiProductReservationTabComponent } from './semi-product-reservation-tab.component';

describe('SemiProductReservationTabComponent', () => {
  let component: SemiProductReservationTabComponent;
  let fixture: ComponentFixture<SemiProductReservationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiProductReservationTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiProductReservationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
