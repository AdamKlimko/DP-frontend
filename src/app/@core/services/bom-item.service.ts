import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../data/page';
import {config} from '../../config';
import {lastValueFrom} from 'rxjs';
import {BomItem} from '../data/bom-item';

@Injectable({
  providedIn: 'root',
})
export class BomItemService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(page: number, query: any, sortBy: any): Promise<Page<BomItem>> {
    const url = `${config.apiUrl}/bomItems?page=${page + 1}${
      query ? '&partNumber=' + query : ''}${
      sortBy ? '&sortBy=' + sortBy : ''}`;
    return await lastValueFrom(
      this.http.get<Page<BomItem>>(url),
    );
  }

  public async getById(id: string): Promise<BomItem> {
    const url = `${config.apiUrl}/bomItems/${id}`;
    return await lastValueFrom(
      this.http.get<BomItem>(url),
    );
  }

  public async updateById(id: string, bomItem: BomItem): Promise<BomItem> {
    const url = `${config.apiUrl}/bomItems/${id}`;
    return await lastValueFrom(
      this.http.patch<BomItem>(url, bomItem),
    );
  }

  public async create(productId: string, bomItem: BomItem): Promise<any> {
    const url = `${config.apiUrl}/bomItems/${productId}`;
    await lastValueFrom(
      this.http.post<any>(url, bomItem),
    );
  }

  public async delete(productId, id: string): Promise<any> {
    const url = `${config.apiUrl}/bomItems/${productId}/${id}`;
    await lastValueFrom(
      this.http.delete<any>(url),
    );
  }
}
