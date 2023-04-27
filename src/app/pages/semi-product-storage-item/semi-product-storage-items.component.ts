import { Component, OnInit } from '@angular/core';
import {PageBaseDirective} from '../../util-components/generalization/page-base.directive';
import {SemiProductStorageItem} from '../../@core/data/semi-product-storage-item';
import {SemiProductStorageItemService} from '../../@core/services/semi-product-storage-item.service';

@Component({
  selector: 'ngx-semi-product-storage-item',
  templateUrl: './semi-product-storage-items.component.html',
  styleUrls: ['./semi-product-storage-items.component.scss'],
})
export class SemiProductStorageItemsComponent extends PageBaseDirective<SemiProductStorageItem> implements OnInit {
  displayedColumns = [
    'purchaseRequisition', 'partNumber', 'description', 'manufacturer', 'uom', 'storedQuantity', 'location', 'action',
  ];
  tableOptions = { edit: true, remove:  true, add: false };

  constructor(
    protected service: SemiProductStorageItemService,
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

  update(semiProductStorageItem: SemiProductStorageItem) {
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
