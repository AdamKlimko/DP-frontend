import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PurchaseOrdersComponent} from './purchase-orders.component';
import {NbCardModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    Ng2SmartTableModule,
    MatTableModule,
  ],
  declarations: [
    PurchaseOrdersComponent,
  ],
})
export class PurchaseOrdersModule { }
