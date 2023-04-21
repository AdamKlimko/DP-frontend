import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../data/page';
import {config} from '../../config';
import {lastValueFrom} from 'rxjs';
import {SemiProduct} from '../data/semi-product';

@Injectable({
  providedIn: 'root',
})
export class SemiProductService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(page: number, query: any, sortBy: any): Promise<Page<SemiProduct>> {
    const url = `${config.apiUrl}/semiProducts?page=${page + 1}${
      query ? '&partNumber=' + query : ''}${
      sortBy ? '&sortBy=' + sortBy : ''}`;
    return await lastValueFrom(
      this.http.get<Page<SemiProduct>>(url),
    );
  }

  public async getById(id: string): Promise<SemiProduct> {
    const url = `${config.apiUrl}/semiProducts/${id}`;
    return await lastValueFrom(
      this.http.get<SemiProduct>(url),
    );
  }

  public async updateById(id: string, semiProduct: SemiProduct): Promise<SemiProduct> {
    const url = `${config.apiUrl}/semiProducts/${id}`;
    return await lastValueFrom(
      this.http.patch<SemiProduct>(url, semiProduct),
    );
  }

  public async create(semiProduct: SemiProduct): Promise<any> {
    const url = `${config.apiUrl}/semiProducts`;
    await lastValueFrom(
      this.http.post<any>(url, semiProduct),
    );
  }

  public async delete(id: string): Promise<any> {
    const url = `${config.apiUrl}/semiProducts/${id}`;
    await lastValueFrom(
      this.http.delete<any>(url),
    );
  }
}
