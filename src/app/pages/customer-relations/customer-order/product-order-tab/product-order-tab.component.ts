import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageBaseDirective} from '../../../../util-components/generalization/page-base.directive';
import {ProductOrder} from '../../../../@core/data/product-order';
import {ProductOrderService} from '../../../../@core/services/product-order.service';
import {CustomerOrder} from '../../../../@core/data/customer-order';
import {CustomerOrderDetailComponent} from '../customer-order-detail/customer-order-detail.component';

@Component({
  selector: 'ngx-product-order-tab',
  templateUrl: './product-order-tab.component.html',
  styleUrls: ['./product-order-tab.component.scss'],
})
export class ProductOrderTabComponent extends PageBaseDirective<ProductOrder> implements OnInit {
  @Input() customerOrder: CustomerOrder;
  @Output() addEmitter = new EventEmitter<void>();
  @Output() deleteEmitter = new EventEmitter<string>();
  @Output() reserveEmitter = new EventEmitter<ProductOrder>();
  @Output() produceEmitter = new EventEmitter<ProductOrder>();
  displayedColumns = [
    'state', 'id', 'partNumber', 'description', 'uom', 'size', 'storedQuantity', 'unitPrice', 'quantity', 'action',
  ];
  constructor(
    protected service: ProductOrderService,
    private parent: CustomerOrderDetailComponent,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
    this.parent.dataUpdated.subscribe(() => {
      this.getFirstPage();
    });
  }

  protected getPage(page: number): void {
    this.service.getPage(this.customerOrder.id, page, this.query, this.sortBy).then(res => {
      this.data = res.results;
      this.length = res.totalResults;
      this.pageIndex = page;
    });
  }

  addProductOrder() {
    this.addEmitter.emit();
  }

  reserveProduct(productOrder: ProductOrder) {
    this.reserveEmitter.emit(productOrder);
  }

  produceProduct(productOrder: ProductOrder) {
    this.produceEmitter.emit(productOrder);
  }

  deleteProductOrder(id: string) {
    this.deleteEmitter.emit(id);
  }
}
