import { Component, OnInit } from '@angular/core';
import {PurchaseOrderService} from '../../@core/services/purchase-order.service';

@Component({
  selector: 'ngx-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss'],
})
export class PurchaseOrdersComponent implements OnInit {
  source = [];

  settings = {
    actions: {
      add: false,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
    },
    columns: {
      state: {
        title: 'State',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
      currency: {
        title: 'Currency',
        type: 'string',
      },
      promisedDeliveryDate: {
        title: 'Promised DD',
        type: 'date',
      },
      wantedDeliveryDate: {
        title: 'Wanted DD',
        type: 'date',
      },
      supplier: {
        title: 'Supplier',
        type: 'string',
      },
    },
  };

  constructor(private service: PurchaseOrderService) { }

  ngOnInit(): void {
    this.service.getPage().then(res => {
      this.source = res.results;
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
