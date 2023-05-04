import { Component, OnInit } from '@angular/core';
import {PageBaseDirective} from '../../../../util-components/generalization/page-base.directive';
import {SemiProductStorageItem} from '../../../../@core/data/semi-product-storage-item';
import {SemiProductStorageItemService} from '../../../../@core/services/semi-product-storage-item.service';

@Component({
  selector: 'ngx-semi-product-storage-items',
  templateUrl: './semi-product-storage-items.component.html',
  styleUrls: ['./semi-product-storage-items.component.scss'],
})
export class SemiProductStorageItemsComponent extends PageBaseDirective<SemiProductStorageItem> implements OnInit {
  displayedColumns = [
    'id', 'purchaseRequisition', 'partNumber', 'description', 'manufacturer', 'uom', 'storedQuantity', 'location',
  ];
  tableOptions = { edit: false, remove:  false, select: false };

  constructor(
    protected service: SemiProductStorageItemService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }

  protected getPage(page: number): void {
    this.service.getPage(page, this.query, this.sortBy, undefined).then(res => {
      this.data = res.results;
      this.length = res.totalResults;
      this.pageIndex = page;
    });
  }
}
