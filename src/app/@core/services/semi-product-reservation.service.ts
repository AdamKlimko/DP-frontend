import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../data/page';
import {config} from '../../config';
import {lastValueFrom} from 'rxjs';
import {SemiProductReservation} from '../data/semi-product-reservation';

@Injectable({
  providedIn: 'root',
})
export class SemiProductReservationService {
  constructor(
    private http: HttpClient,
  ) { }

  public async getPage(page: number): Promise<Page<SemiProductReservation>> {
    const url = `${config.apiUrl}/semiProductReservations?page=${page + 1}`;
    return await lastValueFrom(
      this.http.get<Page<SemiProductReservation>>(url),
    );
  }

  public async getById(id: string): Promise<SemiProductReservation> {
    const url = `${config.apiUrl}/semiProductReservations/${id}`;
    return await lastValueFrom(
      this.http.get<SemiProductReservation>(url),
    );
  }

  public async updateById(id: string, semiProductReservation: SemiProductReservation): Promise<SemiProductReservation> {
    const url = `${config.apiUrl}/semiProductReservations/${id}`;
    return await lastValueFrom(
      this.http.patch<SemiProductReservation>(url, semiProductReservation),
    );
  }

  public async create(semiProductReservation: SemiProductReservation): Promise<any> {
    const url = `${config.apiUrl}/semiProductReservations`;
    await lastValueFrom(
      this.http.post<any>(url, semiProductReservation),
    );
  }

  public async delete(id: string): Promise<any> {
    const url = `${config.apiUrl}/semiProductReservations/${id}`;
    await lastValueFrom(
      this.http.delete<any>(url),
    );
  }
}
