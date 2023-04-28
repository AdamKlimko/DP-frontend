import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {lastValueFrom} from 'rxjs';
import {Page} from '../data/page';
import {config} from '../../config';
import {ProductStorageItem} from '../data/product-storage-item';

@Injectable({
  providedIn: 'root',
})
export class ProductStorageItemService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(page: number, query: any, sortBy: any): Promise<Page<ProductStorageItem>> {
    const url = `${config.apiUrl}/productStorageItems?page=${page + 1}&populate=product${
      query ? '&product=' + query : ''}${
      sortBy ? '&sortBy=' + sortBy : ''}`;
    return await lastValueFrom(
      this.http.get<Page<ProductStorageItem>>(url),
    );
  }

  public async getById(id: string): Promise<ProductStorageItem> {
    const url = `${config.apiUrl}/productStorageItems/${id}`;
    return await lastValueFrom(
      this.http.get<ProductStorageItem>(url),
    );
  }

  public async updateById(id: string, productStorageItem: ProductStorageItem): Promise<ProductStorageItem> {
    const url = `${config.apiUrl}/productStorageItems/${id}`;
    return await lastValueFrom(
      this.http.patch<ProductStorageItem>(url, productStorageItem),
    );
  }

  public async create(productStorageItem: ProductStorageItem): Promise<any> {
    const url = `${config.apiUrl}/productStorageItems`;
    await lastValueFrom(
      this.http.post<any>(url, productStorageItem),
    );
  }

  public async delete(id: string): Promise<any> {
    const url = `${config.apiUrl}/productStorageItems/${id}`;
    await lastValueFrom(
      this.http.delete<any>(url),
    );
  }
}
