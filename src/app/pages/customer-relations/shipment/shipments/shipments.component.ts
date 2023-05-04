import { Component, OnInit } from '@angular/core';
import {PageBaseDirective} from '../../../../util-components/generalization/page-base.directive';
import {Shipment} from '../../../../@core/data/shipment';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {ShipmentService} from '../../../../@core/services/shipment.service';
import {ShipmentDialogComponent} from '../shipment-dialog/shipment-dialog.component';

@Component({
  selector: 'ngx-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss'],
})
export class ShipmentsComponent extends PageBaseDirective<Shipment> implements OnInit {
  displayedColumns = ['state', 'priority', 'id', 'customer', 'address', 'customerOrders', 'action'];
  tableOptions = { edit: true, remove:  true, add: false, detail: true };

  constructor(
    protected service: ShipmentService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }

  create() {
    this.dialogService.open(ShipmentDialogComponent).onClose.subscribe(res => {
        if (res) {
          this.getFirstPage();
        }
      },
    );
  }

  update(shipment: Shipment) {
    this.dialogService.open(ShipmentDialogComponent, {
      context: {
        shipment: shipment,
      },
    })
      .onClose.subscribe(() => {
      this.getCurrentPage();
    });
  }

  delete(id: string) {
    this.service.delete(id)
      .then(() => {
        this.toastrService.show('Shipment Deleted', `Success`, { status: 'success' });
        this.getCurrentPage();
      })
      .catch(error => {
        this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
      });
  }
}
