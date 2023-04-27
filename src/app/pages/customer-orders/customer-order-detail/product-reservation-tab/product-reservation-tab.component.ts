import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomerOrder} from '../../../../@core/data/customer-order';
import {Product} from '../../../../@core/data/product';
import {PageBaseDirective} from '../../../../util-components/generalization/page-base.directive';
import {ProductReservation} from '../../../../@core/data/product-reservation';
import {ProductReservationService} from '../../../../@core/services/product-reservation.service';
import {CustomerOrderDetailComponent} from '../customer-order-detail.component';

@Component({
  selector: 'ngx-product-reservation-tab',
  templateUrl: './product-reservation-tab.component.html',
  styleUrls: ['./product-reservation-tab.component.scss'],
})
export class ProductReservationTabComponent extends PageBaseDirective<ProductReservation> implements OnInit {
  @Input() customerOrder: CustomerOrder;
  @Output() editEmitter = new EventEmitter<Product>();
  @Output() deleteEmitter = new EventEmitter<string>();
  displayedColumns = ['productOrder', 'product', 'reservedQuantity', 'location'];
  constructor(
    protected service: ProductReservationService,
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

  delete(id: string) {
    this.deleteEmitter.emit(id);
  }
}
