import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerOrdersComponent} from './customer-order/customer-orders/customer-orders.component';
import {CustomerOrderTableComponent} from './customer-order/customer-order-table/customer-order-table.component';
import {CustomerOrderDialogComponent} from './customer-order/customer-order-dialog/customer-order-dialog.component';
import {CustomerOrderDetailComponent} from './customer-order/customer-order-detail/customer-order-detail.component';
import {CustomerTableComponent} from './customer/customer-table/customer-table.component';
import {CustomersComponent} from './customer/customers/customers.component';
import {CustomerDialogComponent} from './customer/customer-dialog/customer-dialog.component';
import {ProductOrderTableComponent} from './customer-order/product-order-table/product-order-table.component';
import {ShipmentTableComponent} from './shipment/shipment-table/shipment-table.component';
import {ShipmentDialogComponent} from './shipment/shipment-dialog/shipment-dialog.component';
import {
  ShipmentSelectionDialogComponent,
} from './shipment/shipment-selection-dialog/shipment-selection-dialog.component';
import {ShipmentsComponent} from './shipment/shipments/shipments.component';
import {ProductOrderTabComponent} from './customer-order/product-order-tab/product-order-tab.component';
import {
  ProductReservationTabComponent,
} from './customer-order/product-reservation-tab/product-reservation-tab.component';
import {ProductionOrderTabComponent} from './customer-order/production-order-tab/production-order-tab.component';
import {ShipmentDetailComponent} from './shipment/shipment-detail/shipment-detail.component';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule, NbFormFieldModule,
  NbIconModule, NbInputModule, NbListModule,
  NbRadioModule,
  NbSelectModule, NbTabsetModule, NbToggleModule,
} from '@nebular/theme';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {UtilComponentsModule} from '../../util-components/util-components.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ManufacturingModule} from '../manufacturing/manufacturing.module';



@NgModule({
  declarations: [
    CustomerOrdersComponent,
    CustomerOrderTableComponent,
    CustomerOrderDialogComponent,
    CustomerOrderDetailComponent,
    CustomerTableComponent,
    CustomersComponent,
    CustomerDialogComponent,
    ProductOrderTableComponent,
    ShipmentTableComponent,
    ShipmentDialogComponent,
    ShipmentSelectionDialogComponent,
    ShipmentsComponent,
    ProductOrderTabComponent,
    ProductReservationTabComponent,
    ProductionOrderTabComponent,
    ShipmentDetailComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatTooltipModule,
    MatMenuModule,
    NbIconModule,
    NbButtonModule,
    MatIconModule,
    MatPaginatorModule,
    NbRadioModule,
    UtilComponentsModule,
    NbCardModule,
    ReactiveFormsModule,
    NbDatepickerModule,
    NbSelectModule,
    NbInputModule,
    NbListModule,
    RouterLink,
    NbTabsetModule,
    NbFormFieldModule,
    FormsModule,
    ManufacturingModule,
    NbToggleModule,
  ],
})
export class CustomerRelationsModule { }
