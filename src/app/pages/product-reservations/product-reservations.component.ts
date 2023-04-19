import { Component, OnInit } from '@angular/core';
import {ProductReservation} from '../../@core/data/product-reservation';
import {ProductReservationService} from '../../@core/services/product-reservation.service';

@Component({
  selector: 'ngx-product-reservations',
  templateUrl: './product-reservations.component.html',
  styleUrls: ['./product-reservations.component.scss'],
})
export class ProductReservationsComponent implements OnInit {

  productReservations: ProductReservation[] = [];
  displayedColumns: string[] = [
    'customerOrder', 'productOrder', 'product', 'reservedQuantity', 'location',
  ];
  length = 0;
  pageIndex = 0;

  constructor(
    private service: ProductReservationService,
  ) {}

  ngOnInit(): void {
    this.getPage(0);
  }

  private getPage(page: number): void {
    this.service.getPage(page).then(res => {
      this.productReservations = res.results;
      this.length = res.totalResults;
      this.pageIndex = page;
    });
  }

  setPage(event: any) {
    this.pageIndex = event.pageIndex;
    this.getPage(event.pageIndex);
  }
}
