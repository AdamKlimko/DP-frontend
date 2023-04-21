import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../../@core/data/product';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../@core/services/product.service';
import {ProductDialogComponent} from '../product-dialog/product-dialog.component';
import {
  SemiProductSelectionDialogComponent,
} from '../../semi-products/semi-product-selection-dialog/semi-product-selection-dialog.component';
import {BomItemService} from '../../../@core/services/bom-item.service';

@Component({
  selector: 'ngx-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product;
  displayedColumns = ['id', 'partNumber', 'manufacturer', 'uom', 'quantity', 'action'];
  tableOptions = { edit: false, remove: true, add: false };
  sub;
  constructor(
    private dialogService: NbDialogService,
    private service: ProductService,
    private bomItemService: BomItemService,
    private route: ActivatedRoute,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
    this.updateData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private updateData() {
    this.sub = this.route.params.subscribe(params => {
      this.service.getById(params.id)
        .then(res => {
          this.product = res;
        });
    });
  }

  edit() {
    this.dialogService.open(ProductDialogComponent, {
      context: {
        product: this.product,
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }

  addBomItem() {
    this.dialogService.open(SemiProductSelectionDialogComponent, {
      context: {
        productId: this.product.id,
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }

  onDeleteBomItem(bomItemId: string) {
    this.bomItemService.delete(this.product.id, bomItemId)
      .then(() => {
        this.toastrService.show('BOM Item Deleted', `Success`, { status: 'success' });
        this.updateData();
      })
      .catch(error => {
        this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
      });
  }
}
