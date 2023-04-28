import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {SemiProductReservationService} from '../../../@core/services/semi-product-reservation.service';
import {SemiProduct} from '../../../@core/data/semi-product';
import {PageBaseDirective} from '../../../util-components/generalization/page-base.directive';
import {SemiProductStorageItem} from '../../../@core/data/semi-product-storage-item';
import {SemiProductStorageItemService} from '../../../@core/services/semi-product-storage-item.service';
import {SemiProductOrder} from '../../../@core/data/semi-product-order';
import {BomItem} from '../../../@core/data/bom-item';
import {SemiProductReservation} from '../../../@core/data/semi-product-reservation';

@Component({
  selector: 'ngx-semi-product-reservation-dialog',
  templateUrl: './semi-product-reservation-dialog.component.html',
  styleUrls: ['./semi-product-reservation-dialog.component.scss'],
})
export class SemiProductReservationDialogComponent extends PageBaseDirective<SemiProductStorageItem> implements OnInit {
  @Input() semiProductOrder: SemiProductOrder;
  @Input() productionOrderId: string;
  semiProduct: SemiProduct;
  displayedColumns = [
    'id', 'purchaseRequisition', 'partNumber', 'manufacturer', 'uom', 'storedQuantity', 'location', 'select',
  ];
  tableOptions = { edit: false, remove:  false, select: true };
  form = new FormGroup({
    reservedQuantity: new FormControl<number>({ value: null, disabled: true }),
    location: new FormControl<string>(null),
    semiProductStorageItem: new FormControl<string>({ value: null, disabled: true }),
  });

  constructor(
    protected ref: NbDialogRef<SemiProductReservationDialogComponent>,
    private semiProductReservationService: SemiProductReservationService,
    protected service: SemiProductStorageItemService,
    private toastrService: NbToastrService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    const bomItem = this.semiProductOrder.bomItem as BomItem;
    this.semiProduct = bomItem.semiProduct as SemiProduct;
    this.form.controls.reservedQuantity.patchValue(bomItem.quantity);
    this.query = this.semiProduct.id;
    this.getFirstPage();
  }

  create() {
    const semiProductReservation = new SemiProductReservation(
      this.form.controls.semiProductStorageItem.value,
      this.productionOrderId,
      this.semiProductOrder.id,
      this.form.controls.reservedQuantity.value,
      this.form.controls.location.value,
    );
    this.semiProductReservationService.create(semiProductReservation)
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

  selectStorageItem(semiProductStorageItem: SemiProductStorageItem) {
    this.form.controls.semiProductStorageItem.patchValue(semiProductStorageItem.id);
  }
}
