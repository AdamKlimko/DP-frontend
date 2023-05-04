import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {ProcurementModule} from './procurement/procurement.module';
import {StorageModule} from './storage/storage.module';
import {ManufacturingModule} from './manufacturing/manufacturing.module';
import {CustomerRelationsModule} from './customer-relations/customer-relations.module';
import {NbMenuModule} from '@nebular/theme';

@NgModule({
    imports: [
        ProcurementModule,
        StorageModule,
        ManufacturingModule,
        CustomerRelationsModule,
        PagesRoutingModule,
        ThemeModule,
        NbMenuModule,
        MiscellaneousModule,
    ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
