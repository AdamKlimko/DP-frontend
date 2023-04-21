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
import {PurchaseOrdersModule} from './purchase-orders/purchase-orders.module';
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
import { ProductOrderTableComponent } from './product-orders/product-order-table/product-order-table.component';
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

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
        NbMenuModule,
        MiscellaneousModule,
        PurchaseOrdersModule,
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
  ],
})
export class PagesModule {
}
