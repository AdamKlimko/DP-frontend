import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {SemiProduct} from '../../../../@core/data/semi-product';
import {SemiProductService} from '../../../../@core/services/semi-product.service';

@Component({
  selector: 'ngx-semi-product-dialog',
  templateUrl: './semi-product-dialog.component.html',
  styleUrls: ['./semi-product-dialog.component.scss'],
})
export class SemiProductDialogComponent implements OnInit {
  @Input() semiProduct: SemiProduct;

  form = new FormGroup({
    partNumber: new FormControl<string>(null),
    description: new FormControl<string>(null),
    manufacturer: new FormControl<string>(null),
    uom: new FormControl<string>(null),
    storedQuantity: new FormControl<number>(0),
  });
  constructor(
    protected ref: NbDialogRef<SemiProductDialogComponent>,
    private service: SemiProductService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
    if (this.semiProduct) {
      this.fillForm();
    }
  }

  private fillForm(): void {
    this.form.controls.partNumber.patchValue(this.semiProduct.partNumber);
    this.form.controls.description.patchValue(this.semiProduct.description);
    this.form.controls.manufacturer.patchValue(this.semiProduct.manufacturer);
    this.form.controls.uom.patchValue(this.semiProduct.uom);
    this.form.controls.storedQuantity.patchValue(this.semiProduct.storedQuantity);
  }

  create() {
    const semiProduct = new SemiProduct(
      undefined,
      this.form.controls.partNumber.value,
      this.form.controls.description.value,
      this.form.controls.manufacturer.value,
      0,
      this.form.controls.uom.value,
    );
    this.service.create(semiProduct)
      .then(
        () => {
          this.ref.close(true);
          this.toastrService.show('Semi Product Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }

  update() {
    const semiProduct = new SemiProduct(
      undefined,
      this.form.controls.partNumber.value,
      this.form.controls.description.value,
      this.form.controls.manufacturer.value,
      this.form.controls.storedQuantity.value,
      this.form.controls.uom.value,
    );
    this.service.updateById(this.semiProduct.id, semiProduct)
      .then(
        () => {
          this.ref.close(true);
          this.toastrService.show('Semi Product Updated', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }
}
