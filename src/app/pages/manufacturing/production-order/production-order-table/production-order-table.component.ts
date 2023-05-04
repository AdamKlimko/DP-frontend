import {Component, Input} from '@angular/core';
import {TableBaseDirective} from '../../../../util-components/generalization/table-base.directive';
import {ProductionOrder} from '../../../../@core/data/production-order';

export interface ProductionOrderTableOptions {
  detail: boolean;
  edit: boolean;
  remove: boolean;
}

@Component({
  selector: 'ngx-production-order-table',
  templateUrl: './production-order-table.component.html',
  styleUrls: ['./production-order-table.component.scss'],
})
export class ProductionOrderTableComponent extends TableBaseDirective<ProductionOrder> {
  @Input() tableOptions: ProductionOrderTableOptions;
  constructor() {
    super();
  }
}
