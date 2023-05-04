import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiProductTableComponent } from './semi-product-table.component';

describe('SemiProductTableComponent', () => {
  let component: SemiProductTableComponent;
  let fixture: ComponentFixture<SemiProductTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiProductTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
