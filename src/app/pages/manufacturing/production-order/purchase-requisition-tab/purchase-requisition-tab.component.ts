import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageBaseDirective} from '../../../../util-components/generalization/page-base.directive';
import {PurchaseRequisition} from '../../../../@core/data/purchase-requisition';
import {PurchaseRequisitionService} from '../../../../@core/services/purchase-requisition.service';
import {
  PurchaseRequisitionTableOptions,
} from '../../../procurement/purchase-requisition/purchase-requisition-table/purchase-requisition-table.component';
import {ProductionOrderDetailComponent} from '../production-order-detail/production-order-detail.component';

@Component({
  selector: 'ngx-purchase-requisition-tab',
  templateUrl: './purchase-requisition-tab.component.html',
  styleUrls: ['./purchase-requisition-tab.component.scss'],
})
export class PurchaseRequisitionTabComponent extends PageBaseDirective<PurchaseRequisition> implements OnInit {
  @Input() productionOrderId: string;
  @Output() addEmitter = new EventEmitter<PurchaseRequisition>();
  displayedColumns = [
    'state', 'id', 'semiProduct', 'purchaseOrder', 'unitPrice', 'quantity', 'price', 'currency', 'action',
  ];
  tableOptions: PurchaseRequisitionTableOptions = { add: true, edit: false, remove: false };
  constructor(
    protected service: PurchaseRequisitionService,
    protected parent: ProductionOrderDetailComponent,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.query = this.productionOrderId;
    this.getFirstPage();
    this.parent.dataUpdated.subscribe(() => {
      this.getFirstPage();
    });
  }

  protected getPage(page: number): void {
    this.service.getPage(page, this.query, this.sortBy, 'productionOrder').then(res => {
      this.data = res.results;
      this.length = res.totalResults;
      this.pageIndex = page;
    });
  }

  addToPurchaseOrder(purchaseRequisition: PurchaseRequisition) {
    this.addEmitter.emit(purchaseRequisition);
  }
}
