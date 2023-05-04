import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PurchaseOrderTableComponent} from './purchase-order/purchase-order-table/purchase-order-table.component';
import {
  PurchaseRequisitionsComponent,
} from './purchase-requisition/purchase-requisitions/purchase-requisitions.component';
import {PurchaseOrdersComponent} from './purchase-order/purchase-orders/purchase-orders.component';
import {
  PurchaseRequisitionTableComponent,
} from './purchase-requisition/purchase-requisition-table/purchase-requisition-table.component';
import {PurchaseOrderDialogComponent} from './purchase-order/purchase-order-dialog/purchase-order-dialog.component';
import {
  PurchaseRequisitionDialogComponent,
} from './purchase-requisition/purchase-requisition-dialog/purchase-requisition-dialog.component';
import {
  PurchaseRequisitionSelectionDialogComponent,
} from './purchase-requisition/purchase-requisition-selection-dialog/purchase-requisition-selection-dialog.component';
import {PurchaseOrderDetailComponent} from './purchase-order/purchase-order-detail/purchase-order-detail.component';
import {
  PurchaseOrderProcessDialogComponent,
} from './purchase-order/purchase-order-process-dialog/purchase-order-process-dialog.component';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule, NbFormFieldModule,
  NbIconModule, NbInputModule,
  NbListModule, NbSelectModule,
  NbTabsetModule,
} from '@nebular/theme';
import {RouterLink} from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {PagesRoutingModule} from '../pages-routing.module';

@NgModule({
  declarations: [
    PurchaseOrdersComponent,
    PurchaseOrderTableComponent,
    PurchaseOrderDialogComponent,
    PurchaseOrderDetailComponent,
    PurchaseOrderProcessDialogComponent,
    PurchaseRequisitionsComponent,
    PurchaseRequisitionTableComponent,
    PurchaseRequisitionDialogComponent,
    PurchaseRequisitionSelectionDialogComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    RouterLink,
    MatTooltipModule,
    NbListModule,
    NbTabsetModule,
    NbDatepickerModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbInputModule,
    MatTableModule,
    MatMenuModule,
    NbFormFieldModule,
    FormsModule,
    MatPaginatorModule,
    MatIconModule,
    PagesRoutingModule,
  ],
  exports: [
    PurchaseRequisitionTableComponent,
  ],
})
export class ProcurementModule { }
