import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {lastValueFrom} from 'rxjs';
import {Page} from '../data/page';
import {PurchaseOrder} from '../data/purchase-order';
import {config} from '../../config';

@Injectable({
  providedIn: 'root',
})
export class PurchaseOrderService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(page: number, query: any, sortBy: any, state: string): Promise<Page<PurchaseOrder>> {
    const url = `${config.apiUrl}/purchaseOrders?page=${page + 1}${
      query ? '&customer=' + query : ''}${
      state ? '&state=' + state : ''}${
      sortBy ? '&sortBy=' + sortBy : ''}`;
    return await lastValueFrom(
      this.http.get<Page<PurchaseOrder>>(url),
    );
  }

  public async getById(id: string): Promise<PurchaseOrder> {
    const url = `${config.apiUrl}/purchaseOrders/${id}`;
    return await lastValueFrom(
      this.http.get<PurchaseOrder>(url),
    );
  }

  public async updateById(id: string, purchaseOrder: PurchaseOrder): Promise<PurchaseOrder> {
    const url = `${config.apiUrl}/purchaseOrders/${id}`;
    return await lastValueFrom(
      this.http.patch<PurchaseOrder>(url, purchaseOrder),
    );
  }

  public async create(purchaseOrder: PurchaseOrder): Promise<any> {
    const url = `${config.apiUrl}/purchaseOrders`;
    await lastValueFrom(
      this.http.post<any>(url, purchaseOrder),
    );
  }

  public async delete(id: string): Promise<any> {
    const url = `${config.apiUrl}/purchaseOrders/${id}`;
    await lastValueFrom(
      this.http.delete<any>(url),
    );
  }

  public async process(id: string, body: any): Promise<PurchaseOrder> {
    const url = `${config.apiUrl}/purchaseOrders/${id}/process`;
    return await lastValueFrom(
      this.http.patch<PurchaseOrder>(url, body),
    );
  }
}
