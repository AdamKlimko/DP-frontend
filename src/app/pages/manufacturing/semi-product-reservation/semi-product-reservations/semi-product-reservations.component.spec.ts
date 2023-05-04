import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiProductReservationsComponent } from './semi-product-reservations.component';

describe('SemiProductReservationsComponent', () => {
  let component: SemiProductReservationsComponent;
  let fixture: ComponentFixture<SemiProductReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiProductReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiProductReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
