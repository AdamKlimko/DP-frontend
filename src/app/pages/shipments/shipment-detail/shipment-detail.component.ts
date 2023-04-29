import {Component, OnDestroy, OnInit} from '@angular/core';
import {Shipment} from '../../../@core/data/shipment';
import {ShipmentService} from '../../../@core/services/shipment.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {ShipmentDialogComponent} from '../shipment-dialog/shipment-dialog.component';
import {CustomerOrder} from '../../../@core/data/customer-order';

@Component({
  selector: 'ngx-shipment-detail',
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.scss'],
})
export class ShipmentDetailComponent implements OnInit, OnDestroy {
  shipment: Shipment;
  displayedColumns: string[] = [
    'state', 'priority', 'productionSeq', 'price', 'orderProfit', 'orderCost', 'orderDate', 'action',
  ];
  tableOptions = { edit: false, remove: true};
  sub: Subscription;
  customerOrders: CustomerOrder[];
  constructor(
    private service: ShipmentService,
    private route: ActivatedRoute,
    private dialogService: NbDialogService,
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
          this.shipment = res;
          this.customerOrders = this.shipment.customerOrders as CustomerOrder[];
        });
    });
  }

  edit() {
    this.dialogService.open(ShipmentDialogComponent, {
      context: {
        shipment: this.shipment,
      },
    })
      .onClose.subscribe(() => {
      this.updateData();
    });
  }
}
