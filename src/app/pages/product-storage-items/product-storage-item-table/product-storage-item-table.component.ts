import { Component } from '@angular/core';
import {TableBaseDirective} from '../../../util-components/generalization/table-base.directive';
import {ProductStorageItem} from '../../../@core/data/product-storage-item';

@Component({
  selector: 'ngx-product-storage-item-table',
  templateUrl: './product-storage-item-table.component.html',
  styleUrls: ['./product-storage-item-table.component.scss'],
})
export class ProductStorageItemTableComponent extends TableBaseDirective<ProductStorageItem> {
  constructor() {
    super();
  }
}
