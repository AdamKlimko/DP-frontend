import {Component, EventEmitter, Output} from '@angular/core';
import {TableBaseDirective} from '../../../../util-components/generalization/table-base.directive';
import {SemiProductOrder} from '../../../../@core/data/semi-product-order';
import {BomItem} from '../../../../@core/data/bom-item';

@Component({
  selector: 'ngx-semi-product-order-table',
  templateUrl: './semi-product-order-table.component.html',
  styleUrls: ['./semi-product-order-table.component.scss'],
})
export class SemiProductOrderTableComponent extends TableBaseDirective<SemiProductOrder> {
  @Output() reserveEmitter = new EventEmitter<BomItem>();
  @Output() purchaseEmitter = new EventEmitter<BomItem>();
  constructor() {
    super();
  }

  // Create semi-product reservation
  reserve(bomItem: BomItem) {
    this.reserveEmitter.emit(bomItem);
  }

  // Create purchase requisition
  purchase(bomItem: BomItem) {
    this.purchaseEmitter.emit(bomItem);
  }
}
