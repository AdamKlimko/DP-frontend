import { Component, OnInit } from '@angular/core';
import {ProductReservation} from '../../@core/data/product-reservation';
import {ProductReservationService} from '../../@core/services/product-reservation.service';
import {PageBaseDirective} from '../../util-components/generalization/page-base.directive';

@Component({
  selector: 'ngx-product-reservations',
  templateUrl: './product-reservations.component.html',
  styleUrls: ['./product-reservations.component.scss'],
})
export class ProductReservationsComponent extends PageBaseDirective<ProductReservation> implements OnInit {
  displayedColumns: string[] = [
    'customerOrder', 'productOrder', 'product', 'reservedQuantity', 'location',
  ];

  constructor(
    protected service: ProductReservationService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }
}
