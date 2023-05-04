import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableBaseDirective} from '../../../../util-components/generalization/table-base.directive';
import {ProductStorageItem} from '../../../../@core/data/product-storage-item';

export interface ProductStorageItemTableOptions {
  edit;
  remove;
  select;
}

@Component({
  selector: 'ngx-product-storage-item-table',
  templateUrl: './product-storage-item-table.component.html',
  styleUrls: ['./product-storage-item-table.component.scss'],
})
export class ProductStorageItemTableComponent extends TableBaseDirective<ProductStorageItem> {
  @Input() tableOptions: ProductStorageItemTableOptions;
  @Output() selectEmitter = new EventEmitter<ProductStorageItem>();
  constructor() {
    super();
  }

  select(productStorageItem: ProductStorageItem) {
    this.selectEmitter.emit(productStorageItem);
  }
}
