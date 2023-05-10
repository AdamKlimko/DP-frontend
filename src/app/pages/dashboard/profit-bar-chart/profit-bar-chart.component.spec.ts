import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitBarChartComponent } from './profit-bar-chart.component';

describe('BarChartComponent', () => {
  let component: ProfitBarChartComponent;
  let fixture: ComponentFixture<ProfitBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfitBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
