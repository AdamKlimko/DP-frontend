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
import { CustomerOrdersComponent } from './customer-orders/customer-orders-table/customer-orders.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { CustomerOrderDialogComponent } from './customer-orders/customer-order-dialog/customer-order-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerOrderDetailComponent } from './customer-orders/customer-order-detail/customer-order-detail.component';

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
  ],
  declarations: [
    PagesComponent,
    CustomerOrdersComponent,
    CustomerOrderDialogComponent,
    CustomerOrderDetailComponent,
  ],
})
export class PagesModule {
}
