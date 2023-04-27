import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {lastValueFrom} from 'rxjs';
import {Page} from '../data/page';
import {config} from '../../config';
import {PurchaseRequisition} from '../data/purchase-requisition';

@Injectable({
  providedIn: 'root',
})
export class PurchaseRequisitionService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(page: number, query: any, sortBy: any, queryBy: string): Promise<Page<PurchaseRequisition>> {
    const url = `${config.apiUrl}/purchaseRequisitions?page=${page + 1}&populate=semiProduct${
      query ? '&' + queryBy + '=' + query : ''}${
      sortBy ? '&sortBy=' + sortBy : ''}`;
    return await lastValueFrom(
      this.http.get<Page<PurchaseRequisition>>(url),
    );
  }

  public async getById(id: string): Promise<PurchaseRequisition> {
    const url = `${config.apiUrl}/purchaseRequisitions/${id}`;
    return await lastValueFrom(
      this.http.get<PurchaseRequisition>(url),
    );
  }

  public async updateById(id: string, purchaseRequisition: PurchaseRequisition): Promise<PurchaseRequisition> {
    const url = `${config.apiUrl}/purchaseRequisitions/${id}`;
    return await lastValueFrom(
      this.http.patch<PurchaseRequisition>(url, purchaseRequisition),
    );
  }

  public async create(purchaseRequisition: PurchaseRequisition): Promise<any> {
    const url = `${config.apiUrl}/purchaseRequisitions`;
    await lastValueFrom(
      this.http.post<any>(url, purchaseRequisition),
    );
  }

  public async delete(id: string): Promise<any> {
    const url = `${config.apiUrl}/purchaseRequisitions/${id}`;
    await lastValueFrom(
      this.http.delete<any>(url),
    );
  }
}
