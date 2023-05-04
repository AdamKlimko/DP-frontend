import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../data/page';
import {config} from '../../config';
import {lastValueFrom} from 'rxjs';
import {Shipment} from '../data/shipment';
import {State} from '../enums/state';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(page: number, query: any, sortBy: any, state: State): Promise<Page<Shipment>> {
    const url = `${config.apiUrl}/shipments?page=${page + 1}&populate=customer${
      query ? '&customer=' + query : ''}${
      state ? '&state=' + state : ''}${
      sortBy ? '&sortBy=' + sortBy : ''}`;
    return await lastValueFrom(
      this.http.get<Page<Shipment>>(url),
    );
  }

  public async getById(id: string): Promise<Shipment> {
    const url = `${config.apiUrl}/shipments/${id}`;
    return await lastValueFrom(
      this.http.get<Shipment>(url),
    );
  }

  public async updateById(id: string, shipment: Shipment): Promise<Shipment> {
    const url = `${config.apiUrl}/shipments/${id}`;
    return await lastValueFrom(
      this.http.patch<Shipment>(url, shipment),
    );
  }

  public async create(shipment: Shipment): Promise<any> {
    const url = `${config.apiUrl}/shipments`;
    await lastValueFrom(
      this.http.post<any>(url, shipment),
    );
  }

  public async delete(id: string): Promise<any> {
    const url = `${config.apiUrl}/shipments/${id}`;
    await lastValueFrom(
      this.http.delete<any>(url),
    );
  }
}
