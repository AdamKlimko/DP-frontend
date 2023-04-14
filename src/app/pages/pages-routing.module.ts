import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {PurchaseOrdersComponent} from './purchase-orders/purchase-orders.component';
import {CustomerOrdersComponent} from './customer-orders/customer-order-table/customer-orders.component';
import {CustomerOrderDetailComponent} from './customer-orders/customer-order-detail/customer-order-detail.component';
import {ProductsComponent} from './products/products.component';
import {CustomersComponent} from './customers/customers.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'purchase-orders',
      component: PurchaseOrdersComponent,
    },
    {
      path: 'customers',
      component: CustomersComponent,
    },
    {
      path: 'customer-orders',
      component: CustomerOrdersComponent,
    },
    {
      path: 'customer-orders/:id',
      component: CustomerOrderDetailComponent,
    },
    {
      path: 'products',
      component: ProductsComponent,
    },
    {
      path: '',
      redirectTo: 'purchase-orders',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
