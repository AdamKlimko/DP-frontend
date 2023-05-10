import {Component, Input} from '@angular/core';

export enum NgxLegendItemColor {
  GREEN = 'green',
  PURPLE = 'purple',
  LIGHT_PURPLE = 'light-purple',
  BLUE = 'blue',
  YELLOW = 'yellow',
}


@Component({
  selector: 'ngx-legend-chart',
  templateUrl: './legend-chart.component.html',
  styleUrls: ['./legend-chart.component.scss'],
})
export class LegendChartComponent {
  @Input()
  legendItems: { iconColor: NgxLegendItemColor; title: string }[] = [];
}
