import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, lastValueFrom} from 'rxjs';
import {config} from '../../config';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private profitBarChart$ = new BehaviorSubject<any>({ chartLabel: [], data: [[]] });
  private ordersPreviewChart$ = new BehaviorSubject<any>({ chartLabel: [], linesData: [[]] });
  private summaryData$ = new BehaviorSubject<any>({});
  private storageData$ = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {
    this.fetchDashboardData();
    this.fetchStorageData();
    this.fetchProfitBarChart('month');
    this.fetchCustomerOrderChart('month');
  }

  profitBarChartChanged() {
    return this.profitBarChart$.asObservable();
  }

  customerOrderChartChanged() {
    return this.ordersPreviewChart$.asObservable();
  }

  summaryDataChanged() {
    return this.summaryData$.asObservable();
  }

  storageDataChanged() {
    return this.storageData$.asObservable();
  }

  public async fetchDashboardData() {
    const url = `${config.apiUrl}/dashboard`;
    const data = await lastValueFrom(
      this.http.get<any>(url),
    );
    this.summaryData$.next(data);
  }

  public async fetchStorageData() {
    const url = `${config.apiUrl}/dashboard/storage`;
    const data = await lastValueFrom(
      this.http.get<any>(url),
    );
    this.storageData$.next(data);
  }

  public async fetchProfitBarChart(timeFrame: string) {
    const url = `${config.apiUrl}/dashboard/profitBarChart/${timeFrame}`;
    const data = await lastValueFrom(
      this.http.get<any>(url),
    );
    this.profitBarChart$.next(data);
  }

  public async fetchCustomerOrderChart(timeFrame: string) {
    const url = `${config.apiUrl}/dashboard/customerOrderChart/${timeFrame}`;
    const data = await lastValueFrom(
      this.http.get<any>(url),
    );
    this.ordersPreviewChart$.next(data);
  }
}
