import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {lastValueFrom} from 'rxjs';
import {Page} from '../data/page';
import {config} from '../../config';
import {SemiProductStorageItem} from '../data/semi-product-storage-item';

@Injectable({
  providedIn: 'root',
})
export class SemiProductStorageItemService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(page: number, query: any, sortBy: any): Promise<Page<SemiProductStorageItem>> {
    const url = `${config.apiUrl}/semiProductStorageItems?page=${page + 1}&populate=semiProduct${
      query ? '&customer=' + query : ''}${
      sortBy ? '&sortBy=' + sortBy : ''}`;
    return await lastValueFrom(
      this.http.get<Page<SemiProductStorageItem>>(url),
    );
  }

  public async getById(id: string): Promise<SemiProductStorageItem> {
    const url = `${config.apiUrl}/semiProductStorageItems/${id}`;
    return await lastValueFrom(
      this.http.get<SemiProductStorageItem>(url),
    );
  }

  public async updateById(id: string, semiProductStorageItem: SemiProductStorageItem): Promise<SemiProductStorageItem> {
    const url = `${config.apiUrl}/semiProductStorageItems/${id}`;
    return await lastValueFrom(
      this.http.patch<SemiProductStorageItem>(url, semiProductStorageItem),
    );
  }

  public async create(semiProductStorageItem: SemiProductStorageItem): Promise<any> {
    const url = `${config.apiUrl}/semiProductStorageItems`;
    await lastValueFrom(
      this.http.post<any>(url, semiProductStorageItem),
    );
  }

  public async delete(id: string): Promise<any> {
    const url = `${config.apiUrl}/semiProductStorageItems/${id}`;
    await lastValueFrom(
      this.http.delete<any>(url),
    );
  }
}
