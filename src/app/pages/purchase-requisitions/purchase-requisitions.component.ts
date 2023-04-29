import { Component, OnInit } from '@angular/core';
import {PageBaseDirective} from '../../util-components/generalization/page-base.directive';
import {PurchaseRequisition} from '../../@core/data/purchase-requisition';
import {PurchaseRequisitionService} from '../../@core/services/purchase-requisition.service';
import {NbToastrService} from '@nebular/theme';
import {PurchaseRequisitionTableOptions} from './purchase-requisition-table/purchase-requisition-table.component';

@Component({
  selector: 'ngx-purchase-requisitions',
  templateUrl: './purchase-requisitions.component.html',
  styleUrls: ['./purchase-requisitions.component.scss'],
})
export class PurchaseRequisitionsComponent extends PageBaseDirective<PurchaseRequisition> implements OnInit {
  displayedColumns = [
    'state', 'id', 'semiProduct', 'purchaseOrder', 'productionOrder', 'unitPrice', 'quantity', 'price', 'currency', 'action',
  ];
  tableOptions: PurchaseRequisitionTableOptions = {add: false, edit: false, remove: false};
  constructor(
    protected service: PurchaseRequisitionService,
    protected toastrService: NbToastrService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }

  create() {
    //
  }

  update() {
    //
  }

  delete(id: string) {
    this.service.delete(id)
      .then(() => {
        this.toastrService.show('Purchase Requisition Deleted', `Success`, { status: 'success' });
        this.getCurrentPage();
      })
      .catch(error => {
        this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
      });
  }
}
