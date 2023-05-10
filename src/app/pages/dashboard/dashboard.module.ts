import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NbCardModule, NbIconModule, NbListModule, NbSelectModule, NbTabsetModule} from '@nebular/theme';
import { CustomerOrderChartComponent } from './customer-order-chart/customer-order-chart.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { ProfitBarChartComponent } from './profit-bar-chart/profit-bar-chart.component';
import { LegendChartComponent } from './legend-chart/legend-chart.component';
import { ChartPanelHeaderComponent } from './chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './chart-panel-summary/chart-panel-summary.component';
import {StatePieChartComponent} from './state-pie-chart/state-pie-chart.component';
import { ManufacturingCardComponent } from './manufacturing-card/manufacturing-card.component';
import { ProcurementCardComponent } from './procurement-card/procurement-card.component';
import { StatesSummaryComponent } from './states-summary/states-summary.component';
import { StorageListComponent } from './storage-list/storage-list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CustomerOrderChartComponent,
    StatePieChartComponent,
    ProfitBarChartComponent,
    LegendChartComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    ManufacturingCardComponent,
    ProcurementCardComponent,
    StatesSummaryComponent,
    StorageListComponent,
  ],
    imports: [
        CommonModule,
        NbCardModule,
        NbTabsetModule,
        NgxEchartsModule,
        NbIconModule,
        NbSelectModule,
        NbListModule,
    ],
})
export class DashboardModule { }
