import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementCardComponent } from './procurement-card.component';

describe('ProcurementCardComponent', () => {
  let component: ProcurementCardComponent;
  let fixture: ComponentFixture<ProcurementCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
