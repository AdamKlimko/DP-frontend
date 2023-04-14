import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule, NbListModule,
  NbMenuModule, NbRadioModule, NbSelectModule, NbTabsetModule,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {PurchaseOrdersModule} from './purchase-orders/purchase-orders.module';
import { CustomerOrdersComponent } from './customer-orders/customer-order-table/customer-orders.component';
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
import {MatMenuModule} from "@angular/material/menu";

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
  ],
  declarations: [
    PagesComponent,
    CustomerOrdersComponent,
    CustomerOrderDialogComponent,
    CustomerOrderDetailComponent,
    ProductTableComponent,
    ProductsComponent,
    ProductDialogComponent,
    CustomerTableComponent,
    CustomersComponent,
    CustomerDialogComponent,
  ],
})
export class PagesModule {
}
