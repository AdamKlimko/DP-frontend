import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../data/page';
import {config} from '../../config';
import {lastValueFrom} from 'rxjs';
import {SemiProductOrder} from '../data/semi-product-order';

@Injectable({
  providedIn: 'root',
})
export class SemiProductOrderService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(productionOrderId: string,
                       page: number,
                       query: any,
                       sortBy: any): Promise<Page<SemiProductOrder>> {
    const url = `${config.apiUrl}/productionOrders/${productionOrderId}/semiProductOrders?page=${page + 1}${
      query ? '&productionOrder=' + query : ''}${
      sortBy ? '&sortBy=' + sortBy : ''}`;
    return await lastValueFrom(
      this.http.get<Page<SemiProductOrder>>(url),
    );
  }
}
