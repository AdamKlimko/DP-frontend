import { Component } from '@angular/core';
import {TableBaseDirective} from '../../../util-components/generalization/table-base.directive';
import {SemiProductStorageItem} from '../../../@core/data/semi-product-storage-item';

@Component({
  selector: 'ngx-semi-product-storage-item-table',
  templateUrl: './semi-product-storage-item-table.component.html',
  styleUrls: ['./semi-product-storage-item-table.component.scss'],
})
export class SemiProductStorageItemTableComponent extends TableBaseDirective<SemiProductStorageItem> {
  constructor() {
    super();
  }
}
