import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableBaseDirective} from '../../../util-components/generalization/table-base.directive';
import {PurchaseOrder} from '../../../@core/data/purchase-order';

export interface PurchaseOrderTableOptions {
  detail: boolean;
  edit: boolean;
  remove: boolean;
  add: boolean;
}

@Component({
  selector: 'ngx-purchase-order-table',
  templateUrl: './purchase-order-table.component.html',
  styleUrls: ['./purchase-order-table.component.scss'],
})
export class PurchaseOrderTableComponent extends TableBaseDirective<PurchaseOrder> {
  @Input() tableOptions: PurchaseOrderTableOptions;
  @Output() addEmitter = new EventEmitter<string>();
  constructor() {
    super();
  }

  add(purchaseOrder: string) {
    this.addEmitter.emit(purchaseOrder);
  }
}
