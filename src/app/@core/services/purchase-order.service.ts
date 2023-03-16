import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {lastValueFrom} from 'rxjs';
import {Page} from '../data/page';
import {PurchaseOrder} from '../data/purchase-order';
import {config} from '../../config';


@Injectable({
  providedIn: 'root',
})
export class PurchaseOrderService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(): Promise<Page<PurchaseOrder>> {
    return await lastValueFrom(
      this.http.get<Page<PurchaseOrder>>(`${config.apiUrl}/purchaseOrders`),
    );
  }
}
