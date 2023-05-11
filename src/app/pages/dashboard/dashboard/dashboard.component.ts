import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardService} from '../../../@core/services/dashboard.service';
import {Subscription} from 'rxjs';
import {CustomerOrdersChart} from '../customer-order-chart/customer-order-chart.component';
import {ProfitChart} from '../profit-bar-chart/profit-bar-chart.component';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  profitPeriod: string = 'month';
  customerOrderPeriod: string = 'month';
  dashboardData: any;
  summaryData: any;
  storageData: any;
  subscriptions: Subscription[];
  profitChartData: ProfitChart;
  ordersChartData: CustomerOrdersChart = { chartLabel: [], linesData: [[]] };

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.subscriptions = [
      this.dashboardService.profitBarChartChanged().subscribe(data => {
        if (data) {
          this.profitChartData = data;
        }
      }),
      this.dashboardService.customerOrderChartChanged().subscribe(data => {
        if (data) {
          this.ordersChartData = data;
        }
      }),
      this.dashboardService.summaryDataChanged().subscribe(data => {
        this.dashboardData = data;
        this.summaryData = data.totalCounts;
      }),
      this.dashboardService.storageDataChanged().subscribe(data => {
        this.storageData = data;
      }),
    ];
    this.dashboardService.fetchDashboardData();
    this.dashboardService.fetchStorageData();
    this.dashboardService.fetchCustomerOrderChart(this.customerOrderPeriod);
    this.dashboardService.fetchProfitBarChart(this.profitPeriod);
  }

  getProfitChartData(period: string) {
    this.dashboardService.fetchProfitBarChart(period);
  }

  getCustomerOrderChartData(period: string) {
    this.dashboardService.fetchCustomerOrderChart(period);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
