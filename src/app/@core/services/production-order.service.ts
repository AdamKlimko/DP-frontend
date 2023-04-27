import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../data/page';
import {config} from '../../config';
import {lastValueFrom} from 'rxjs';
import {ProductionOrder} from '../data/production-order';

@Injectable({
  providedIn: 'root',
})
export class ProductionOrderService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(page: number,
                       query: any,
                       sortBy: any,
                       state: string,
                       priority: string): Promise<Page<ProductionOrder>> {
    const url = `${config.apiUrl}/productionOrders?page=${page + 1}${
      query ? '&productionSeq=' + query : ''}${
      state ? '&state=' + state : ''}${
      priority ? '&priority=' + priority : ''}${
      sortBy ? '&sortBy=' + sortBy : ''}`;
    return await lastValueFrom(
      this.http.get<Page<ProductionOrder>>(url),
    );
  }

  public async getById(id: string): Promise<ProductionOrder> {
    const url = `${config.apiUrl}/productionOrders/${id}`;
    return await lastValueFrom(
      this.http.get<ProductionOrder>(url),
    );
  }

  public async updateById(id: string, productionOrder: ProductionOrder): Promise<ProductionOrder> {
    const url = `${config.apiUrl}/productionOrders/${id}`;
    return await lastValueFrom(
      this.http.patch<ProductionOrder>(url, productionOrder),
    );
  }

  public async create(productionOrder: ProductionOrder): Promise<any> {
    const url = `${config.apiUrl}/productionOrders`;
    await lastValueFrom(
      this.http.post<any>(url, productionOrder),
    );
  }

  public async delete(id: string): Promise<any> {
    const url = `${config.apiUrl}/productionOrders/${id}`;
    await lastValueFrom(
      this.http.delete<any>(url),
    );
  }
}
