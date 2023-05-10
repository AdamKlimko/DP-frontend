import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingCardComponent } from './manufacturing-card.component';

describe('ManufacturingCardComponent', () => {
  let component: ManufacturingCardComponent;
  let fixture: ComponentFixture<ManufacturingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufacturingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
