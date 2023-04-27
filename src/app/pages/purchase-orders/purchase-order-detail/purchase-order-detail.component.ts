import {Component, OnDestroy, OnInit} from '@angular/core';
import {PurchaseOrder} from '../../../@core/data/purchase-order';
import {PageBaseDirective} from '../../../util-components/generalization/page-base.directive';
import {PurchaseRequisition} from '../../../@core/data/purchase-requisition';
import {PurchaseRequisitionService} from '../../../@core/services/purchase-requisition.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {PurchaseOrderService} from '../../../@core/services/purchase-order.service';
import {
  PurchaseRequisitionTableOptions,
} from '../../purchase-requisitions/purchase-requisition-table/purchase-requisition-table.component';
import {PurchaseOrderDialogComponent} from '../purchase-order-dialog/purchase-order-dialog.component';
import {NbDialogService} from '@nebular/theme';
import {
  PurchaseOrderProcessDialogComponent,
} from './purchase-order-process-dialog/purchase-order-process-dialog.component';

@Component({
  selector: 'ngx-purchase-order-detail',
  templateUrl: './purchase-order-detail.component.html',
  styleUrls: ['./purchase-order-detail.component.scss'],
})
export class PurchaseOrderDetailComponent extends PageBaseDirective<PurchaseRequisition> implements OnInit, OnDestroy {
  displayedColumns = [
    'id', 'state', 'semiProduct', 'purchaseOrder', 'unitPrice', 'quantity', 'price', 'currency',
  ];
  tableOptions: PurchaseRequisitionTableOptions = { add: false, edit: false, remove: false };
  purchaseOrder: PurchaseOrder;
  sub: Subscription;
  constructor(
    protected purchaseOrderService: PurchaseOrderService,
    protected service: PurchaseRequisitionService,
    private route: ActivatedRoute,
    private dialogService: NbDialogService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.updateData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updateData() {
    this.sub = this.route.params.subscribe(params => {
      this.purchaseOrderService.getById(params.id)
        .then(res => {
          this.purchaseOrder = res;
          this.query = this.purchaseOrder.id;
          this.getFirstPage();
        });
    });
  }

  protected getPage(page: number): void {
    this.service.getPage(page, this.query, this.sortBy, 'purchaseOrder').then(res => {
      this.data = res.results;
      this.length = res.totalResults;
      this.pageIndex = page;
    });
  }

  edit() {
    this.dialogService.open(PurchaseOrderDialogComponent, {
      context: {
        purchaseOrder: this.purchaseOrder,
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }

  process() {
    this.dialogService.open(PurchaseOrderProcessDialogComponent, {
      context: {
        purchaseOrder: this.purchaseOrder,
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }
}
