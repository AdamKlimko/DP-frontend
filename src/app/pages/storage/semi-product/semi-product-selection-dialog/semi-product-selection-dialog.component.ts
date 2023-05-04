import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {SemiProductService} from '../../../../@core/services/semi-product.service';
import {PageBaseDirective} from '../../../../util-components/generalization/page-base.directive';
import {SemiProduct} from '../../../../@core/data/semi-product';
import {BomItemService} from '../../../../@core/services/bom-item.service';
import {BomItem} from '../../../../@core/data/bom-item';

@Component({
  selector: 'ngx-semi-product-selection-dialog',
  templateUrl: './semi-product-selection-dialog.component.html',
  styleUrls: ['./semi-product-selection-dialog.component.scss'],
})
export class SemiProductSelectionDialogComponent extends PageBaseDirective<SemiProduct> implements OnInit {
  @Input() productId;
  displayedColumns = ['id', 'partNumber', 'manufacturer', 'storedQuantity', 'select'];
  tableOptions = { edit: false, remove:  false, add: true };

  constructor(
    protected ref: NbDialogRef<SemiProductSelectionDialogComponent>,
    protected service: SemiProductService,
    private bomItemService: BomItemService,
    private toastrService: NbToastrService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.service.getPage(0, undefined, undefined).then(res => {
        this.data = res.results;
      });
  }

  onAddProduct(bomItem: BomItem) {
    this.bomItemService.create(this.productId, bomItem)
      .then(
        () => {
          this.toastrService.show('Product Order Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }
}
