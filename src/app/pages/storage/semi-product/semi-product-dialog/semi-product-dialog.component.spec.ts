import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiProductDialogComponent } from './semi-product-dialog.component';

describe('SemiProductDialogComponent', () => {
  let component: SemiProductDialogComponent;
  let fixture: ComponentFixture<SemiProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiProductDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
