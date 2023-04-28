import { NgModule } from '@angular/core';
import {
    NbButtonModule,
    NbCardModule,
    NbDatepickerModule, NbFormFieldModule,
    NbIconModule,
    NbInputModule, NbListModule,
    NbMenuModule, NbRadioModule, NbSelectModule, NbTabsetModule,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CustomerOrderTableComponent } from './customer-orders/customer-order-table/customer-order-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { CustomerOrderDialogComponent } from './customer-orders/customer-order-dialog/customer-order-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerOrderDetailComponent } from './customer-orders/customer-order-detail/customer-order-detail.component';
import { ProductTableComponent } from './products/product-table/product-table.component';
import { ProductsComponent } from './products/products.component';
import { ProductDialogComponent } from './products/product-dialog/product-dialog.component';
import { CustomerTableComponent } from './customers/customer-table/customer-table.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDialogComponent } from './customers/customer-dialog/customer-dialog.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProductReservationsComponent } from './product-reservations/product-reservations.component';
import { ProductReservationTableComponent } from './product-reservations/product-reservation-table/product-reservation-table.component';
import {UtilComponentsModule} from '../util-components/util-components.module';
import { ProductOrderTableComponent } from './customer-orders/customer-order-detail/product-order-table/product-order-table.component';
import {MatIconModule} from '@angular/material/icon';
import {ProductSelectionDialogComponent} from './products/product-selection-dialog/product-selection-dialog.component';
import { ProductReservationDialogComponent } from './product-reservations/product-reservation-dialog/product-reservation-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CustomerOrdersComponent} from './customer-orders/customer-orders.component';
import { ShipmentTableComponent } from './shipments/shipment-table/shipment-table.component';
import { ShipmentDialogComponent } from './shipments/shipment-dialog/shipment-dialog.component';
import { ShipmentSelectionDialogComponent } from './shipments/shipment-selection-dialog/shipment-selection-dialog.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { SemiProductsComponent } from './semi-products/semi-products.component';
import { SemiProductTableComponent } from './semi-products/semi-product-table/semi-product-table.component';
import { SemiProductDialogComponent } from './semi-products/semi-product-dialog/semi-product-dialog.component';
import { SemiProductSelectionDialogComponent } from './semi-products/semi-product-selection-dialog/semi-product-selection-dialog.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { BomItemTableComponent } from './products/bom-item-table/bom-item-table.component';
import { ProductionOrdersComponent } from './production-orders/production-orders.component';
import { ProductionOrderDialogComponent } from './production-orders/production-order-dialog/production-order-dialog.component';
import { ProductionOrderTableComponent } from './production-orders/production-order-table/production-order-table.component';
import { ProductionOrderDetailComponent } from './production-orders/production-order-detail/production-order-detail.component';
import { SemiProductReservationsComponent } from './semi-product-reservations/semi-product-reservations.component';
import { SemiProductReservationTableComponent } from './semi-product-reservations/semi-product-reservation-table/semi-product-reservation-table.component';
import { SemiProductReservationDialogComponent } from './semi-product-reservations/semi-product-reservation-dialog/semi-product-reservation-dialog.component';
import { SemiProductOrderTableComponent } from './production-orders/production-order-detail/semi-product-order-table/semi-product-order-table.component';
import { SemiProductOrderTabComponent } from './production-orders/production-order-detail/semi-product-order-tab/semi-product-order-tab.component';
import {PurchaseOrdersComponent} from './purchase-orders/purchase-orders.component';
import { PurchaseOrderTableComponent } from './purchase-orders/purchase-order-table/purchase-order-table.component';
import { SemiProductStorageItemsComponent } from './semi-product-storage-item/semi-product-storage-items.component';
import { SemiProductStorageItemTableComponent } from './semi-product-storage-item/semi-product-storage-item-table/semi-product-storage-item-table.component';
import { PurchaseRequisitionsComponent } from './purchase-requisitions/purchase-requisitions.component';
import { PurchaseRequisitionTableComponent } from './purchase-requisitions/purchase-requisition-table/purchase-requisition-table.component';
import { ProductStorageItemsComponent } from './product-storage-items/product-storage-items.component';
import { ProductStorageItemTableComponent } from './product-storage-items/product-storage-item-table/product-storage-item-table.component';
import { ProductOrderTabComponent } from './customer-orders/customer-order-detail/product-order-tab/product-order-tab.component';
import { ProductReservationTabComponent } from './customer-orders/customer-order-detail/product-reservation-tab/product-reservation-tab.component';
import { ProductionOrderTabComponent } from './customer-orders/customer-order-detail/production-order-tab/production-order-tab.component';
import { PurchaseRequisitionDialogComponent } from './purchase-requisitions/purchase-requisition-dialog/purchase-requisition-dialog.component';
import { PurchaseRequisitionTabComponent } from './production-orders/production-order-detail/purchase-requisition-tab/purchase-requisition-tab.component';
import { PurchaseRequisitionSelectionDialogComponent } from './purchase-requisitions/purchase-requisition-selection-dialog/purchase-requisition-selection-dialog.component';
import { PurchaseOrderDialogComponent } from './purchase-orders/purchase-order-dialog/purchase-order-dialog.component';
import { PurchaseOrderDetailComponent } from './purchase-orders/purchase-order-detail/purchase-order-detail.component';
import { PurchaseOrderProcessDialogComponent } from './purchase-orders/purchase-order-detail/purchase-order-process-dialog/purchase-order-process-dialog.component';
import { SemiProductReservationTabComponent } from './production-orders/production-order-detail/semi-product-reservation-tab/semi-product-reservation-tab.component';
import { ProductStorageItemDialogComponent } from './product-storage-items/product-storage-item-dialog/product-storage-item-dialog.component';

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
        NbMenuModule,
        MiscellaneousModule,
        NbCardModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule,
        NbButtonModule,
        NbIconModule,
        NbInputModule,
        NbDatepickerModule,
        ReactiveFormsModule,
        NbSelectModule,
        FormsModule,
        NbRadioModule,
        NbListModule,
        NbTabsetModule,
        MatMenuModule,
        UtilComponentsModule,
        MatIconModule,
        NbFormFieldModule,
        MatTooltipModule,
    ],
  declarations: [
    PagesComponent,
    CustomerOrdersComponent,
    CustomerOrderTableComponent,
    CustomerOrderDialogComponent,
    CustomerOrderDetailComponent,
    ProductTableComponent,
    ProductsComponent,
    ProductDialogComponent,
    CustomerTableComponent,
    CustomersComponent,
    CustomerDialogComponent,
    ProductReservationsComponent,
    ProductReservationTableComponent,
    ProductOrderTableComponent,
    ProductSelectionDialogComponent,
    ProductReservationDialogComponent,
    ShipmentTableComponent,
    ShipmentDialogComponent,
    ShipmentSelectionDialogComponent,
    ShipmentsComponent,
    SemiProductsComponent,
    SemiProductTableComponent,
    SemiProductDialogComponent,
    SemiProductSelectionDialogComponent,
    ProductDetailComponent,
    BomItemTableComponent,
    ProductionOrdersComponent,
    ProductionOrderDialogComponent,
    ProductionOrderTableComponent,
    ProductionOrderDetailComponent,
    SemiProductReservationsComponent,
    SemiProductReservationTableComponent,
    SemiProductReservationDialogComponent,
    SemiProductOrderTableComponent,
    SemiProductOrderTabComponent,
    PurchaseOrdersComponent,
    PurchaseOrderTableComponent,
    SemiProductStorageItemsComponent,
    SemiProductStorageItemTableComponent,
    PurchaseRequisitionsComponent,
    PurchaseRequisitionTableComponent,
    ProductStorageItemsComponent,
    ProductStorageItemTableComponent,
    ProductOrderTabComponent,
    ProductReservationTabComponent,
    ProductionOrderTabComponent,
    PurchaseRequisitionDialogComponent,
    PurchaseRequisitionTabComponent,
    PurchaseRequisitionSelectionDialogComponent,
    PurchaseOrderDialogComponent,
    PurchaseOrderDetailComponent,
    PurchaseOrderProcessDialogComponent,
    SemiProductReservationTabComponent,
    ProductStorageItemDialogComponent,
  ],
})
export class PagesModule {
}
