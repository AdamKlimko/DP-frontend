import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PurchaseOrdersComponent} from './purchase-orders.component';
import {NbCardModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {MatTableModule} from '@angular/material/table';
import {ThemeModule} from '../../@theme/theme.module';


@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    Ng2SmartTableModule,
    MatTableModule,
    ThemeModule,
  ],
  declarations: [
    PurchaseOrdersComponent,
  ],
})
export class PurchaseOrdersModule { }
