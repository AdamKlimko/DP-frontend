import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePieChartComponent } from './state-pie-chart.component';

describe('PieChartComponent', () => {
  let component: StatePieChartComponent;
  let fixture: ComponentFixture<StatePieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatePieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
