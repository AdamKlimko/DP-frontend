import {AfterViewInit, Component, Input, OnChanges, OnDestroy} from '@angular/core';
import {NbThemeService} from '@nebular/theme';

export class PieChartConfig {
  title: string;
  labels: string[];
  data: [{ value: string, name: string }] | [];
}

@Component({
  selector: 'ngx-pie-chart',
  templateUrl: './state-pie-chart.component.html',
  styleUrls: ['./state-pie-chart.component.scss'],
})
export class StatePieChartComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() inputData: [];
  @Input() showLegend: boolean = true;
  options: any = {};
  themeSubscription: any;
  dashboardData: PieChartConfig = {
    title: 'State',
    labels: ['planned', 'released', 'processed', 'closed'],
    data: [],
  };

  constructor(
    private theme: NbThemeService,
    ) {
  }

  ngOnChanges() {
    this.dashboardData.data = this.inputData;
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.setOptions(config);
    });
  }

  ngAfterViewInit() {
    this.dashboardData.data = this.inputData;
  }

  setOptions(config) {
    const echarts: any = config.variables.echarts;

    this.options = {
      backgroundColor: echarts.bg,
      color: ['#006ba4', '#37a400', '#a48300', '#1e00a4'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        show: this.showLegend,
        orient: 'vertical',
        left: 'left',
        data: this.dashboardData.labels,
        textStyle: {
          color: echarts.textColor,
        },
      },
      series: [
        {
          name: this.dashboardData.title,
          type: 'pie',
          radius: ['50%', '70%'],
          center: ['50%', '50%'],
          data: this.dashboardData.data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: echarts.itemHoverShadowColor,
            },
          },
          label: {
            show: false,
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
          },
        },
      ],
    };
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
