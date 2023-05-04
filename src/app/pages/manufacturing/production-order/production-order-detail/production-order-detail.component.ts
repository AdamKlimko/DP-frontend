import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductionOrder} from '../../../../@core/data/production-order';
import {NbDialogService} from '@nebular/theme';
import {ActivatedRoute} from '@angular/router';
import {ProductionOrderService} from '../../../../@core/services/production-order.service';
import {ProductionOrderDialogComponent} from '../production-order-dialog/production-order-dialog.component';
import {ProductOrder} from '../../../../@core/data/product-order';
import {Product} from '../../../../@core/data/product';
import {
  SemiProductReservationDialogComponent,
} from '../../semi-product-reservation/semi-product-reservation-dialog/semi-product-reservation-dialog.component';
import {
  PurchaseRequisitionDialogComponent,
} from '../../../procurement/purchase-requisition/purchase-requisition-dialog/purchase-requisition-dialog.component';
import {PurchaseRequisition} from '../../../../@core/data/purchase-requisition';
import {
  PurchaseRequisitionSelectionDialogComponent,
} from '../../../procurement/purchase-requisition/purchase-requisition-selection-dialog/purchase-requisition-selection-dialog.component';
import {SemiProductOrder} from '../../../../@core/data/semi-product-order';
import {
  ProductStorageItemDialogComponent,
} from '../../../storage/product-storage-item/product-storage-item-dialog/product-storage-item-dialog.component';

@Component({
  selector: 'ngx-production-order-detail',
  templateUrl: './production-order-detail.component.html',
  styleUrls: ['./production-order-detail.component.scss'],
})
export class ProductionOrderDetailComponent implements OnInit, OnDestroy {
  productionOrderId: string;
  productionOrder: ProductionOrder;
  product: Product;
  sub: Subscription;
  dataUpdated = new EventEmitter<void>();
  canAssemble = false;
  constructor(
    private dialogService: NbDialogService,
    protected service: ProductionOrderService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.updateData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private updateData() {
    this.dataUpdated.emit();
    this.sub = this.route.params.subscribe(params => {
      this.productionOrderId = params.id;
      this.service.getById(params.id)
        .then(res => {
          this.productionOrder = res;
          const productOrder = res.productOrder as ProductOrder;
          this.product = productOrder.product as Product;
        });
    });
  }

  edit() {
    this.dialogService.open(ProductionOrderDialogComponent, {
      context: {
        productionOrder: this.productionOrder,
        productOrder: this.productionOrder.productOrder as ProductOrder,
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }

  onReserveSemiProduct(semiProductOrder: SemiProductOrder) {
    this.dialogService.open(SemiProductReservationDialogComponent, {
      context: {
        semiProductOrder: semiProductOrder,
        productionOrderId: this.productionOrder.id,
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }

  onPurchaseSemiProduct(semiProductOrder: SemiProductOrder) {
    this.dialogService.open(PurchaseRequisitionDialogComponent, {
      context: {
        semiProductOrder: semiProductOrder,
        productionOrderId: this.productionOrder.id,
      },
    })
      .onClose.subscribe(() => {
        this.updateData();
    });
  }

  onAddToPurchaseOrder(purchaseRequisition: PurchaseRequisition) {
    this.dialogService.open(PurchaseRequisitionSelectionDialogComponent, {
      context: {
        purchaseRequisition,
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }

  assemble() {
    this.dialogService.open(ProductStorageItemDialogComponent, {
      context: {
        productionOrder: this.productionOrder,
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }
}
