import {Component} from '@angular/core';
import {TableBaseDirective} from '../../../util-components/generalization/table-base.directive';
import {CustomerOrder} from '../../../@core/data/customer-order';


@Component({
  selector: 'ngx-customer-order-table',
  templateUrl: './customer-order-table.component.html',
  styleUrls: ['./customer-order-table.component.scss'],
})
export class CustomerOrderTableComponent extends TableBaseDirective<CustomerOrder> {
  constructor() {
    super();
  }
}
