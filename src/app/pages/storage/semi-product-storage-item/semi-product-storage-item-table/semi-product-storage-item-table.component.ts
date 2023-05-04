import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableBaseDirective} from '../../../../util-components/generalization/table-base.directive';
import {SemiProductStorageItem} from '../../../../@core/data/semi-product-storage-item';

export interface SemiProductStorageItemTableOptions {
  select;
  edit;
  remove;
}

@Component({
  selector: 'ngx-semi-product-storage-item-table',
  templateUrl: './semi-product-storage-item-table.component.html',
  styleUrls: ['./semi-product-storage-item-table.component.scss'],
})
export class SemiProductStorageItemTableComponent extends TableBaseDirective<SemiProductStorageItem> {
  @Input() tableOptions: SemiProductStorageItemTableOptions;
  @Output() selectEmitter = new EventEmitter<SemiProductStorageItem>();
  constructor() {
    super();
  }

  select(semiProductStorageItem: SemiProductStorageItem) {
    this.selectEmitter.emit(semiProductStorageItem);
  }
}
