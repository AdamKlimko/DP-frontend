import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableBaseDirective} from '../../../../util-components/generalization/table-base.directive';
import {PurchaseRequisition} from '../../../../@core/data/purchase-requisition';

export interface PurchaseRequisitionTableOptions {
  add: boolean;
  edit: boolean;
  remove: boolean;
}

@Component({
  selector: 'ngx-purchase-requisition-table',
  templateUrl: './purchase-requisition-table.component.html',
  styleUrls: ['./purchase-requisition-table.component.scss'],
})
export class PurchaseRequisitionTableComponent extends TableBaseDirective<PurchaseRequisition> {
  @Input() tableOptions: PurchaseRequisitionTableOptions;
  @Output() addEmitter = new EventEmitter<any>();
  constructor() {
    super();
  }

  add(purchaseRequisition: PurchaseRequisition) {
    this.addEmitter.emit(purchaseRequisition);
  }
}
