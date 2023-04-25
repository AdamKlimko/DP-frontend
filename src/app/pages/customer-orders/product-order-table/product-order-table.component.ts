import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../@core/data/product';
import {ProductOrder} from '../../../@core/data/product-order';

@Component({
  selector: 'ngx-product-order-table',
  templateUrl: './product-order-table.component.html',
  styleUrls: ['./product-order-table.component.scss'],
})
export class ProductOrderTableComponent {

  @Input() displayedColumns = [];
  @Input() dataSource = [];
  @Output() editEmitter = new EventEmitter<Product>();
  @Output() deleteEmitter = new EventEmitter<string>();
  @Output() reserveEmitter = new EventEmitter<ProductOrder>();
  @Output() produceEmitter = new EventEmitter<ProductOrder>();
  constructor() { }

  edit(item: Product) {
    this.editEmitter.emit(item);
  }

  delete(id: string) {
    this.deleteEmitter.emit(id);
  }

  reserve(productOrder: ProductOrder) {
    this.reserveEmitter.emit(productOrder);
  }

  produce(productOrder: ProductOrder) {
    this.produceEmitter.emit(productOrder);
  }
}
