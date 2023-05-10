import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs';
import {NgxLegendItemColor} from '../legend-chart/legend-chart.component';

@Component({
  selector: 'ngx-chart-panel-header',
  templateUrl: './chart-panel-header.component.html',
  styleUrls: ['./chart-panel-header.component.scss'],
})
export class ChartPanelHeaderComponent implements OnInit, OnDestroy {

  private alive = true;

  @Output() periodChange = new EventEmitter<string>();

  @Input() type: string = 'month';
  @Input() titles = [];

  types: string[] = ['month', 'year'];
  chartLegend: {iconColor: NgxLegendItemColor; title: string}[];
  breakpoint: NbMediaBreakpoint = { name: '', width: 0 };
  breakpoints: any;
  currentTheme: string;
  orderProfitLegend: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.orderProfitLegend = theme.variables.orderProfitLegend;

        this.currentTheme = theme.name;
        this.setLegendItems();
      });

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit(): void {
    this.setLegendItems();
  }

  setLegendItems() {
    if (this.titles.length === 3) {
      this.chartLegend = [
        {iconColor: this.orderProfitLegend.firstItem, title: this.titles[0]},
        {iconColor: this.orderProfitLegend.secondItem, title: this.titles[1]},
        {iconColor: this.orderProfitLegend.thirdItem, title: this.titles[2]},
      ];
    }
  }

  changePeriod(period: string): void {
    this.type = period;
    this.periodChange.emit(period);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
