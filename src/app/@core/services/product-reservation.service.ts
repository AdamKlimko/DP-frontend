import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../data/page';
import {config} from '../../config';
import {lastValueFrom} from 'rxjs';
import {ProductReservation} from '../data/product-reservation';

@Injectable({
  providedIn: 'root',
})
export class ProductReservationService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(page: number,
                       query: any,
                       sortBy: any): Promise<Page<ProductReservation>> {
    const url = `${config.apiUrl}/productReservations?page=${page + 1}${
      query ? '&customerOrder=' + query : ''}${
      sortBy ? '&sortBy=' + sortBy : ''}`;
    return await lastValueFrom(
      this.http.get<Page<ProductReservation>>(url),
    );
  }

  public async getById(id: string): Promise<ProductReservation> {
    const url = `${config.apiUrl}/productReservations/${id}`;
    return await lastValueFrom(
      this.http.get<ProductReservation>(url),
    );
  }

  public async updateById(id: string, productReservation: ProductReservation): Promise<ProductReservation> {
    const url = `${config.apiUrl}/productReservations/${id}`;
    return await lastValueFrom(
      this.http.patch<ProductReservation>(url, productReservation),
    );
  }

  public async create(productReservation: ProductReservation): Promise<any> {
    const url = `${config.apiUrl}/productReservations`;
    await lastValueFrom(
      this.http.post<any>(url, productReservation),
    );
  }

  public async delete(id: string): Promise<any> {
    const url = `${config.apiUrl}/productReservations/${id}`;
    await lastValueFrom(
      this.http.delete<any>(url),
    );
  }
}
