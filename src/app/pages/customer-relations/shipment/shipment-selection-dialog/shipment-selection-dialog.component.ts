import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbDialogService, NbToastrService} from '@nebular/theme';
import {ShipmentService} from '../../../../@core/services/shipment.service';
import {ShipmentDialogComponent} from '../shipment-dialog/shipment-dialog.component';
import {Shipment} from '../../../../@core/data/shipment';
import {Customer} from '../../../../@core/data/customer';
import {ShipmentTableOptions} from '../shipment-table/shipment-table.component';
import {State} from '../../../../@core/enums/state';

@Component({
  selector: 'ngx-shipment-selection-dialog',
  templateUrl: './shipment-selection-dialog.component.html',
  styleUrls: ['./shipment-selection-dialog.component.scss'],
})
export class ShipmentSelectionDialogComponent implements OnInit {
  @Input() customerOrderId: string;
  dataSource = [];
  displayedColumns = ['customer', 'address', 'state', 'priority', 'customerOrders', 'add'];
  tableOptions: ShipmentTableOptions = { detail: false, edit: false, remove: false, add: true };
  constructor(
    protected ref: NbDialogRef<ShipmentSelectionDialogComponent>,
    private service: ShipmentService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
    this.updateData();
  }

  updateData() {
    this.service.getPage(0, undefined, undefined, State.PLANNED).then(res => {
      this.dataSource = res.results;
    });
  }

  createShipment() {
    this.dialogService.open(ShipmentDialogComponent)
      .onClose.subscribe(() => {
      this.updateData();
    });
  }

  onAdd(shipment: Shipment) {
    const customer = shipment.customer as Customer;
    const newCustomerOrders = shipment.customerOrders as string[];
    newCustomerOrders.push(this.customerOrderId);
    const newShipment = new Shipment(undefined,
      shipment.state,
      customer.id,
      shipment.priority,
      shipment.address,
      shipment.customerOrders);
    this.service.updateById(shipment.id, newShipment)
      .then(() => {
        this.toastrService.show('Customer Order added to Shipment', `Success`, { status: 'success' });
        this.updateData();
      })
      .catch(error => {
        this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
      });
    this.ref.close();
  }
}
