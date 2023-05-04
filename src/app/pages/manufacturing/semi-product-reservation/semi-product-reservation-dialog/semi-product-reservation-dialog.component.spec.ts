import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiProductReservationDialogComponent } from './semi-product-reservation-dialog.component';

describe('SemiProductReservationDialogComponent', () => {
  let component: SemiProductReservationDialogComponent;
  let fixture: ComponentFixture<SemiProductReservationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiProductReservationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiProductReservationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
