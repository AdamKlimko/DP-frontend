import { Component, OnInit } from '@angular/core';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {ProductStorageItemService} from '../../@core/services/product-storage-item.service';
import {PageBaseDirective} from '../../util-components/generalization/page-base.directive';
import {ProductStorageItem} from '../../@core/data/product-storage-item';

@Component({
  selector: 'ngx-product-storage-item',
  templateUrl: './product-storage-items.component.html',
  styleUrls: ['./product-storage-items.component.scss'],
})
export class ProductStorageItemsComponent extends PageBaseDirective<ProductStorageItem> implements OnInit {
  displayedColumns = [
    'productionOrder', 'partNumber', 'description', 'storedQuantity', 'location',
  ];
  tableOptions = { edit: false, remove:  false };

  constructor(
    protected service: ProductStorageItemService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }

  create() {
    // this.dialogService.open(SemiProductDialogComponent).onClose.subscribe(res => {
    //     if (res) {
    //       this.getFirstPage();
    //     }
    //   },
    // );
  }

  update(semiProductStorageItem: ProductStorageItem) {
    // this.dialogService.open(SemiProductDialogComponent, {
    //   context: {
    //     semiProduct: semiProduct,
    //   },
    // })
    //   .onClose.subscribe(() => {
    //   this.getCurrentPage();
    // });
  }

  delete(id: string) {
    // this.service.delete(id)
    //   .then(() => {
    //     this.toastrService.show('Semi Product Deleted', `Success`, { status: 'success' });
    //     this.getCurrentPage();
    //   })
    //   .catch(error => {
    //     this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
    //   });
  }
}
