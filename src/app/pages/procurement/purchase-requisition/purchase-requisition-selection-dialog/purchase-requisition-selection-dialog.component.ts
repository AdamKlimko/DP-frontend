import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbDialogService, NbToastrService} from '@nebular/theme';
import {PurchaseOrderTableOptions} from '../../purchase-order/purchase-order-table/purchase-order-table.component';
import {
  PurchaseOrderDialogComponent,
} from '../../purchase-order/purchase-order-dialog/purchase-order-dialog.component';
import {PurchaseRequisitionService} from '../../../../@core/services/purchase-requisition.service';
import {PurchaseRequisition} from '../../../../@core/data/purchase-requisition';
import {PurchaseOrderService} from '../../../../@core/services/purchase-order.service';
import {SemiProduct} from '../../../../@core/data/semi-product';

@Component({
  selector: 'ngx-purchase-requisition-selection-dialog',
  templateUrl: './purchase-requisition-selection-dialog.component.html',
  styleUrls: ['./purchase-requisition-selection-dialog.component.scss'],
})
export class PurchaseRequisitionSelectionDialogComponent implements OnInit {
  @Input() purchaseRequisition: PurchaseRequisition;
  dataSource = [];
  displayedColumns = ['state', 'priority', 'supplier', 'price', 'currency', 'wantedDeliveryDate', 'add'];
  tableOptions: PurchaseOrderTableOptions = {detail: false, add: true, edit: false, remove: false};
  constructor(
    protected ref: NbDialogRef<PurchaseRequisitionSelectionDialogComponent>,
    private service: PurchaseRequisitionService,
    private purchaseOrderService: PurchaseOrderService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
    this.updateData();
  }

  updateData() {
    this.purchaseOrderService.getPage(0, undefined, '-createdAt', 'planned').then(res => {
      this.dataSource = res.results;
    });
  }

  createPurchaseOrder() {
    this.dialogService.open(PurchaseOrderDialogComponent)
      .onClose.subscribe(() => {
      this.updateData();
    });
  }

  onAdd(purchaseOrderId: string) {
    const semiProduct = this.purchaseRequisition.semiProduct as SemiProduct;
    const newPurchaseRequisition = new PurchaseRequisition(
      purchaseOrderId,
      this.purchaseRequisition.productionOrder,
      this.purchaseRequisition.semiProductOrder,
      semiProduct.id,
      this.purchaseRequisition.state,
      this.purchaseRequisition.quantity,
      this.purchaseRequisition.unitPrice,
      this.purchaseRequisition.currency,
    );
    this.service.updateById(this.purchaseRequisition.id, newPurchaseRequisition)
      .then(() => {
        this.toastrService.show('Purchase Requisition added to Purchase Order', `Success`, { status: 'success' });
        this.updateData();
      })
      .catch(error => {
        this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
      });
    this.ref.close();
  }
}
