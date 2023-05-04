import {Component, EventEmitter, Output} from '@angular/core';
import {TableBaseDirective} from '../../../../util-components/generalization/table-base.directive';
import {SemiProductOrder} from '../../../../@core/data/semi-product-order';

@Component({
  selector: 'ngx-semi-product-order-table',
  templateUrl: './semi-product-order-table.component.html',
  styleUrls: ['./semi-product-order-table.component.scss'],
})
export class SemiProductOrderTableComponent extends TableBaseDirective<SemiProductOrder> {
  @Output() reserveEmitter = new EventEmitter<SemiProductOrder>();
  @Output() purchaseEmitter = new EventEmitter<SemiProductOrder>();
  constructor() {
    super();
  }

  // Create semi-product reservation
  reserve(semiProductOrder: SemiProductOrder) {
    this.reserveEmitter.emit(semiProductOrder);
  }

  // Create purchase requisition
  purchase(semiProductOrder: SemiProductOrder) {
    this.purchaseEmitter.emit(semiProductOrder);
  }
}
