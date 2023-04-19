import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../../@core/data/product';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {ProductService} from '../../../@core/services/product.service';

@Component({
  selector: 'ngx-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
  @Input() product: Product | undefined;

  form = new FormGroup({
    partNumber: new FormControl<string>(null),
    description: new FormControl<string>(null),
    storedQuantity: new FormControl<number>(0),
    uom: new FormControl<string>(null),
    size: new FormControl<string>(null),
  });
  constructor(
    protected ref: NbDialogRef<ProductDialogComponent>,
    private service: ProductService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
    if (this.product) {
      this.fillForm();
    }
  }

  private fillForm(): void {
    this.form.controls.partNumber.patchValue(this.product.partNumber);
    this.form.controls.description.patchValue(this.product.description);
    this.form.controls.storedQuantity.patchValue(this.product.storedQuantity);
    this.form.controls.uom.patchValue(this.product.uom);
    this.form.controls.size.patchValue(this.product.size);
  }

  create() {
    const product = new Product(
      undefined,
      this.form.controls.partNumber.value,
      this.form.controls.description.value,
      this.form.controls.storedQuantity.value,
      this.form.controls.uom.value,
      this.form.controls.size.value,
      [],
    );
    this.service.create(product)
      .then(
        () => {
          this.ref.close(true);
          this.toastrService.show('Product Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }

  update() {
    const product = new Product(
      undefined,
      this.form.controls.partNumber.value,
      this.form.controls.description.value,
      this.form.controls.storedQuantity.value,
      this.form.controls.uom.value,
      this.form.controls.size.value,
      [],
    );
    this.service.updateById(this.product.id, product)
      .then(
        () => {
          this.ref.close(true);
          this.toastrService.show('Product Updated', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }
}
