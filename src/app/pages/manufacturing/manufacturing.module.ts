import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductReservationsComponent} from './product-reservation/product-reservations/product-reservations.component';
import {
  ProductReservationTableComponent,
} from './product-reservation/product-reservation-table/product-reservation-table.component';
import {
  ProductReservationDialogComponent,
} from './product-reservation/product-reservation-dialog/product-reservation-dialog.component';
import {
  SemiProductReservationsComponent,
} from './semi-product-reservation/semi-product-reservations/semi-product-reservations.component';
import {
  SemiProductReservationTableComponent,
} from './semi-product-reservation/semi-product-reservation-table/semi-product-reservation-table.component';
import {
  SemiProductReservationDialogComponent,
} from './semi-product-reservation/semi-product-reservation-dialog/semi-product-reservation-dialog.component';
import {ProductionOrdersComponent} from './production-order/production-orders/production-orders.component';
import {
  ProductionOrderDialogComponent,
} from './production-order/production-order-dialog/production-order-dialog.component';
import {
  ProductionOrderTableComponent,
} from './production-order/production-order-table/production-order-table.component';
import {
  ProductionOrderDetailComponent,
} from './production-order/production-order-detail/production-order-detail.component';
import {
  PurchaseRequisitionTabComponent,
} from './production-order/purchase-requisition-tab/purchase-requisition-tab.component';
import {
  SemiProductOrderTableComponent,
} from './production-order/semi-product-order-table/semi-product-order-table.component';
import {SemiProductOrderTabComponent} from './production-order/semi-product-order-tab/semi-product-order-tab.component';
import {
  SemiProductReservationTabComponent,
} from './production-order/semi-product-reservation-tab/semi-product-reservation-tab.component';
import {
  NbButtonModule,
  NbCardModule, NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule, NbListModule,
  NbSelectModule, NbTabsetModule,
} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import {StorageModule} from '../storage/storage.module';
import {ProcurementModule} from '../procurement/procurement.module';
import {PagesRoutingModule} from '../pages-routing.module';



@NgModule({
  declarations: [
    ProductReservationsComponent,
    ProductReservationTableComponent,
    ProductReservationDialogComponent,
    SemiProductReservationsComponent,
    SemiProductReservationTableComponent,
    SemiProductReservationDialogComponent,
    ProductionOrdersComponent,
    ProductionOrderDialogComponent,
    ProductionOrderTableComponent,
    ProductionOrderDetailComponent,
    PurchaseRequisitionTabComponent,
    SemiProductOrderTableComponent,
    SemiProductOrderTabComponent,
    SemiProductReservationTabComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    FormsModule,
    NbFormFieldModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    RouterLink,
    ReactiveFormsModule,
    NbDatepickerModule,
    NbListModule,
    MatTooltipModule,
    NbTabsetModule,
    StorageModule,
    ProcurementModule,
    PagesRoutingModule,
  ],
  exports: [
    ProductReservationTableComponent,
    ProductionOrderTableComponent,
  ],
})
export class ManufacturingModule { }
