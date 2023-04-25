import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {SemiProductReservationService} from '../../../@core/services/semi-product-reservation.service';
import {SemiProductReservation} from '../../../@core/data/semi-product-reservation';
import {BomItem} from '../../../@core/data/bom-item';
import {SemiProduct} from '../../../@core/data/semi-product';

@Component({
  selector: 'ngx-semi-product-reservation-dialog',
  templateUrl: './semi-product-reservation-dialog.component.html',
  styleUrls: ['./semi-product-reservation-dialog.component.scss'],
})
export class SemiProductReservationDialogComponent implements OnInit {
  @Input() bomItem: BomItem;
  @Input() productionOrderId: string;
  semiProduct: SemiProduct;
  form = new FormGroup({
    reservedQuantity: new FormControl<number>({ value: null, disabled: true }),
    location: new FormControl<string>(null),
  });

  constructor(
    protected ref: NbDialogRef<SemiProductReservationDialogComponent>,
    private service: SemiProductReservationService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
    this.semiProduct = this.bomItem.semiProduct as SemiProduct;
    this.form.controls.reservedQuantity.patchValue(this.bomItem.quantity);
  }

  create() {
    const productReservation = new SemiProductReservation(
      this.semiProduct.id,
      this.productionOrderId,
      this.form.controls.reservedQuantity.value,
      this.form.controls.location.value,
    );
    this.service.create(productReservation)
      .then(
        () => {
          this.ref.close();
          this.toastrService.show('Semi-Product Reservation Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }
}
