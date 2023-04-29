import { Component, OnInit } from '@angular/core';
import {PageBaseDirective} from '../../util-components/generalization/page-base.directive';
import {SemiProductReservation} from '../../@core/data/semi-product-reservation';
import {SemiProductReservationService} from '../../@core/services/semi-product-reservation.service';

@Component({
  selector: 'ngx-semi-product-reservations',
  templateUrl: './semi-product-reservations.component.html',
  styleUrls: ['./semi-product-reservations.component.scss'],
})
export class SemiProductReservationsComponent extends PageBaseDirective<SemiProductReservation> implements OnInit {
  displayedColumns: string[] = [
    'id', 'semiProductStorageItem', 'productionOrder', 'semiProductOrder', 'reservedQuantity', 'location',
  ];
  constructor(protected service: SemiProductReservationService) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }
}
