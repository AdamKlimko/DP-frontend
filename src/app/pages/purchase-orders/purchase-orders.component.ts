import { Component, OnInit } from '@angular/core';
import {PurchaseOrderService} from '../../@core/services/purchase-order.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'ngx-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss'],
})
export class PurchaseOrdersComponent implements OnInit {

  displayedColumns: string[] = [
    'state', 'price', 'currency', 'promisedDeliveryDate', 'wantedDeliveryDate', 'supplier',
  ];
  dataSource = [];
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
      this.dataSource = res.results;
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
