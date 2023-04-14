import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../data/page';
import {config} from '../../config';
import {lastValueFrom} from 'rxjs';
import {Product} from '../data/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(page: number): Promise<Page<Product>> {
    const url = `${config.apiUrl}/products?page=${page + 1}`;
    return await lastValueFrom(
      this.http.get<Page<Product>>(url),
    );
  }

  public async getById(id: string): Promise<Product> {
    const url = `${config.apiUrl}/products/${id}`;
    return await lastValueFrom(
      this.http.get<Product>(url),
    );
  }

  public async updateById(id: string, product: Product): Promise<Product> {
    const url = `${config.apiUrl}/products/${id}`;
    return await lastValueFrom(
      this.http.patch<Product>(url, product),
    );
  }

  public async create(product: Product): Promise<any> {
    const url = `${config.apiUrl}/products`;
    await lastValueFrom(
      this.http.post<any>(url, product),
    );
  }
}
