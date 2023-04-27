import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../data/page';
import {config} from '../../config';
import {lastValueFrom} from 'rxjs';
import {ProductOrder} from '../data/product-order';

@Injectable({
  providedIn: 'root',
})
export class ProductOrderService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(customerOrderId: string,
                       page: number,
                       query: any,
                       sortBy: any): Promise<Page<ProductOrder>> {
    const url = `${config.apiUrl}/customerOrders/${customerOrderId}/productOrders?page=${page + 1}&populate=product${
      query ? '&customerOrder=' + query : ''}${
      sortBy ? '&sortBy=' + sortBy : ''}`;
    return await lastValueFrom(
      this.http.get<Page<ProductOrder>>(url),
    );
  }

  public async getById(id: string): Promise<ProductOrder> {
    const url = `${config.apiUrl}/productOrders/${id}`;
    return await lastValueFrom(
      this.http.get<ProductOrder>(url),
    );
  }

  public async updateById(id: string, productOrder: ProductOrder): Promise<ProductOrder> {
    const url = `${config.apiUrl}/productOrders/${id}`;
    return await lastValueFrom(
      this.http.patch<ProductOrder>(url, productOrder),
    );
  }

  public async create(customerOrderId: string, productOrder: ProductOrder): Promise<any> {
    const url = `${config.apiUrl}/productOrders/${customerOrderId}`;
    await lastValueFrom(
      this.http.post<any>(url, productOrder),
    );
  }

  public async delete(customerOrderId: string, id: string): Promise<any> {
    const url = `${config.apiUrl}/productOrders/${customerOrderId}/${id}`;
    await lastValueFrom(
      this.http.delete<any>(url),
    );
  }
}
