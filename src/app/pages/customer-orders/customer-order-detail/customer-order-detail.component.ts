import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {CustomerOrderService} from '../../../@core/services/customer-order.service';
import {CustomerOrder} from '../../../@core/data/customer-order';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CustomerOrderDialogComponent} from '../customer-order-dialog/customer-order-dialog.component';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {ProductOrderService} from '../../../@core/services/product-order.service';
import {
  ProductReservationDialogComponent,
} from '../../product-reservations/product-reservation-dialog/product-reservation-dialog.component';
import {ProductOrder} from '../../../@core/data/product-order';
import {
  ShipmentSelectionDialogComponent,
} from '../../shipments/shipment-selection-dialog/shipment-selection-dialog.component';
import {
  ProductionOrderDialogComponent,
} from '../../production-orders/production-order-dialog/production-order-dialog.component';
import {
  ProductSelectionDialogComponent,
} from '../../products/product-selection-dialog/product-selection-dialog.component';

@Component({
  selector: 'ngx-customer-order-detail',
  templateUrl: './customer-order-detail.component.html',
  styleUrls: ['./customer-order-detail.component.scss'],
})
export class CustomerOrderDetailComponent implements OnInit, OnDestroy {
  customerOrder: CustomerOrder;
  sub: Subscription;
  dataUpdated = new EventEmitter<void>();
  constructor(
    private dialogService: NbDialogService,
    private service: CustomerOrderService,
    private productOrderService: ProductOrderService,
    private route: ActivatedRoute,
    private toastrService: NbToastrService,
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
      this.service.getById(params.id)
        .then(res => {
          this.customerOrder = res;
        });
    });
  }

  edit() {
    this.dialogService.open(CustomerOrderDialogComponent, {
      context: {
        customerOrder: this.customerOrder,
      },
    })
      .onClose.subscribe(() => {
        this.updateData();
    });
  }

  onAddProductOrder() {
    this.dialogService.open(ProductSelectionDialogComponent, {
      context: {
        customerOrder: this.customerOrder,
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }
  onReserveProduct(productOrder: ProductOrder) {
    this.dialogService.open(ProductReservationDialogComponent, {
      context: {
        customerOrder: this.customerOrder,
        productOrder: productOrder,
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }

  onProduceProduct(productOrder: ProductOrder) {
    this.dialogService.open(ProductionOrderDialogComponent, {
      context: {
        productOrder: productOrder,
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }

  onDeleteProductOrder(id: string) {
    this.productOrderService.delete(this.customerOrder.id, id)
      .then(() => {
        this.toastrService.show('Product Order Deleted', `Success`, { status: 'success' });
        this.updateData();
      })
      .catch(error => {
        this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
      });
  }

  addShipping() {
    this.dialogService.open(ShipmentSelectionDialogComponent, {
      context: {
        customerOrderId: this.customerOrder.id,
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }
}
