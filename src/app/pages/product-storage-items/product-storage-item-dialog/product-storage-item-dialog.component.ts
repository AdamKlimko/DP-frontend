import {Component, Input, OnInit} from '@angular/core';
import {ProductionOrder} from '../../../@core/data/production-order';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {ProductStorageItemService} from '../../../@core/services/product-storage-item.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../../@core/data/product';
import {ProductOrder} from '../../../@core/data/product-order';
import {ProductStorageItem} from '../../../@core/data/product-storage-item';

@Component({
  selector: 'ngx-product-storage-item-dialog',
  templateUrl: './product-storage-item-dialog.component.html',
  styleUrls: ['./product-storage-item-dialog.component.scss'],
})
export class ProductStorageItemDialogComponent implements OnInit {
  @Input() productionOrder: ProductionOrder;
  product: Product;
  form = new FormGroup({
    productionOrder: new FormControl<string>({ value: null, disabled: true }),
    storedQuantity: new FormControl<number>({ value: null, disabled: true }),
    location: new FormControl<string>(null),
  });
  constructor(
    protected ref: NbDialogRef<ProductStorageItemDialogComponent>,
    protected service: ProductStorageItemService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
    const productOrder = this.productionOrder.productOrder as ProductOrder;
    this.product = productOrder.product as Product;
    this.form.controls.productionOrder.patchValue(this.productionOrder.id);
    this.form.controls.storedQuantity.patchValue(productOrder.quantity);
  }

  assemble() {
    const productStorageItem = new ProductStorageItem(
      this.product.id,
      this.productionOrder.id,
      this.form.controls.storedQuantity.value,
      this.form.controls.location.value,
    );
    this.service.create(productStorageItem)
      .then(
        () => {
          this.ref.close();
          this.toastrService.show('Product Storage Item Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }
}
