import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductionOrder} from '../../../@core/data/production-order';
import {NbDialogService} from '@nebular/theme';
import {ActivatedRoute} from '@angular/router';
import {ProductionOrderService} from '../../../@core/services/production-order.service';
import {ProductionOrderDialogComponent} from '../production-order-dialog/production-order-dialog.component';
import {ProductOrder} from '../../../@core/data/product-order';
import {Product} from '../../../@core/data/product';

@Component({
  selector: 'ngx-production-order-detail',
  templateUrl: './production-order-detail.component.html',
  styleUrls: ['./production-order-detail.component.scss'],
})
export class ProductionOrderDetailComponent implements OnInit, OnDestroy {
  productionOrder: ProductionOrder;
  product: Product;
  displayedColumns = ['id', 'partNumber', 'manufacturer', 'uom', 'storedQuantity', 'quantity', 'action'];
  tableOptions = { edit: false, remove: false, reserve: true, order: true };
  sub: Subscription;
  constructor(
    private dialogService: NbDialogService,
    private service: ProductionOrderService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.updateData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private updateData() {
    this.sub = this.route.params.subscribe(params => {
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
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }
}
