import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentSelectionDialogComponent } from './shipment-selection-dialog.component';

describe('ShipmentSelectionDialogComponent', () => {
  let component: ShipmentSelectionDialogComponent;
  let fixture: ComponentFixture<ShipmentSelectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentSelectionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
