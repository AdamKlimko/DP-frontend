import {Component} from '@angular/core';
import {ProductReservation} from '../../../../@core/data/product-reservation';
import {TableBaseDirective} from '../../../../util-components/generalization/table-base.directive';

@Component({
  selector: 'ngx-product-reservation-table',
  templateUrl: './product-reservation-table.component.html',
  styleUrls: ['./product-reservation-table.component.scss'],
})
export class ProductReservationTableComponent extends TableBaseDirective<ProductReservation> {
  constructor() {
    super();
  }
}
