import {Component, EventEmitter, Output} from '@angular/core';
import {ProductOrder} from '../../../../@core/data/product-order';
import {TableBaseDirective} from '../../../../util-components/generalization/table-base.directive';

@Component({
  selector: 'ngx-product-order-table',
  templateUrl: './product-order-table.component.html',
  styleUrls: ['./product-order-table.component.scss'],
})
export class ProductOrderTableComponent extends TableBaseDirective<ProductOrder> {
  @Output() reserveEmitter = new EventEmitter<ProductOrder>();
  @Output() produceEmitter = new EventEmitter<ProductOrder>();
  constructor() {
    super();
  }

  reserve(productOrder: ProductOrder) {
    this.reserveEmitter.emit(productOrder);
  }

  produce(productOrder: ProductOrder) {
    this.produceEmitter.emit(productOrder);
  }
}
