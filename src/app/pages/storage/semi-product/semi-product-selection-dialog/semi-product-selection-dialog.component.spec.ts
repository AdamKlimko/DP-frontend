import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiProductSelectionDialogComponent } from './semi-product-selection-dialog.component';

describe('SemiProductSelectionDialogComponent', () => {
  let component: SemiProductSelectionDialogComponent;
  let fixture: ComponentFixture<SemiProductSelectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiProductSelectionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiProductSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
