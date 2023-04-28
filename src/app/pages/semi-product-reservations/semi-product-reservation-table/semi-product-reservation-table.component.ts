import {Component} from '@angular/core';
import {TableBaseDirective} from '../../../util-components/generalization/table-base.directive';
import {SemiProductReservation} from '../../../@core/data/semi-product-reservation';

@Component({
  selector: 'ngx-semi-product-reservation-table',
  templateUrl: './semi-product-reservation-table.component.html',
  styleUrls: ['./semi-product-reservation-table.component.scss'],
})
export class SemiProductReservationTableComponent extends TableBaseDirective<SemiProductReservation> {
  constructor() {
    super();
  }
}
