import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../data/page';
import {Customer} from '../data/customer';
import {config} from '../../config';
import {lastValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(page: number, query: any, sortBy: any): Promise<Page<Customer>> {
    const url = `${config.apiUrl}/customers?page=${page + 1}${
      query ? '&name=' + query : ''}${
      sortBy ? '&sortBy=' + sortBy : ''}`;
    return await lastValueFrom(
      this.http.get<Page<Customer>>(url),
    );
  }

  public async getById(id: string): Promise<Customer> {
    const url = `${config.apiUrl}/customers/${id}`;
    return await lastValueFrom(
      this.http.get<Customer>(url),
    );
  }

  public async updateById(id: string, customer: Customer): Promise<Customer> {
    const url = `${config.apiUrl}/customers/${id}`;
    return await lastValueFrom(
      this.http.patch<Customer>(url, customer),
    );
  }

  public async create(customer: Customer): Promise<any> {
    const url = `${config.apiUrl}/customers`;
    await lastValueFrom(
      this.http.post<any>(url, customer),
    );
  }

  public async delete(id: string): Promise<any> {
    const url = `${config.apiUrl}/customers/${id}`;
    await lastValueFrom(
      this.http.delete<any>(url),
    );
  }
}
