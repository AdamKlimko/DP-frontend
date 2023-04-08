import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../data/page';
import {lastValueFrom} from 'rxjs';
import {config} from '../../config';
import {CustomerOrder} from '../data/customer-order';

@Injectable({
  providedIn: 'root',
})
export class CustomerOrderService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(page: number): Promise<Page<CustomerOrder>> {
    const url = `${config.apiUrl}/customerOrders?page=${page + 1}`;
    return await lastValueFrom(
      this.http.get<Page<CustomerOrder>>(url),
    );
  }

  public async getById(id: string): Promise<CustomerOrder> {
    const url = `${config.apiUrl}/customerOrders/${id}`;
    return await lastValueFrom(
      this.http.get<CustomerOrder>(url),
    );
  }

  public async updateById(id: string, customerOrder: CustomerOrder): Promise<CustomerOrder> {
    const url = `${config.apiUrl}/customerOrders/${id}`;
    return await lastValueFrom(
      this.http.patch<CustomerOrder>(url, customerOrder),
    );
  }

  public async create(customerOrder: CustomerOrder): Promise<any> {
    const url = `${config.apiUrl}/customerOrders`;
    await lastValueFrom(
      this.http.post<any>(url, customerOrder),
    );
  }
}
