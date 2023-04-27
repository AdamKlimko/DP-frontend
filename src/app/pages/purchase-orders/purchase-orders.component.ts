import { Component, OnInit } from '@angular/core';
import {PageBaseDirective} from '../../util-components/generalization/page-base.directive';
import {PurchaseOrder} from '../../@core/data/purchase-order';
import {PurchaseOrderService} from '../../@core/services/purchase-order.service';
import {PurchaseOrderTableOptions} from './purchase-order-table/purchase-order-table.component';
import {PurchaseOrderDialogComponent} from './purchase-order-dialog/purchase-order-dialog.component';
import {NbDialogService} from '@nebular/theme';


@Component({
  selector: 'ngx-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss'],
})
export class PurchaseOrdersComponent extends PageBaseDirective<PurchaseOrder> implements OnInit {
  displayedColumns = ['id', 'state', 'priority', 'supplier', 'price', 'currency', 'wantedDeliveryDate', 'action'];
  tableOptions: PurchaseOrderTableOptions = {detail: true, add: false, edit: false, remove: false};
  constructor(
    protected service: PurchaseOrderService,
    private dialogService: NbDialogService,
    ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }

  create() {
    this.dialogService.open(PurchaseOrderDialogComponent)
      .onClose.subscribe(() => {
      this.getFirstPage();
    });
  }

  update() {
    //
  }

  delete() {
    //
  }
}
