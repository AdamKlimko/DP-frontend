import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {PurchaseOrdersComponent} from './purchase-orders/purchase-orders.component';
import {CustomerOrderDetailComponent} from './customer-orders/customer-order-detail/customer-order-detail.component';
import {ProductsComponent} from './products/products.component';
import {CustomersComponent} from './customers/customers.component';
import {ProductReservationsComponent} from './product-reservations/product-reservations.component';
import {CustomerOrdersComponent} from './customer-orders/customer-orders.component';
import {ShipmentsComponent} from './shipments/shipments.component';
import {SemiProductsComponent} from './semi-products/semi-products.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductionOrdersComponent} from './production-orders/production-orders.component';
import {
  ProductionOrderDetailComponent,
} from './production-orders/production-order-detail/production-order-detail.component';
import {SemiProductReservationsComponent} from './semi-product-reservations/semi-product-reservations.component';

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
      path: 'production-orders',
      component: ProductionOrdersComponent,
    },
    {
      path: 'production-orders/:id',
      component: ProductionOrderDetailComponent,
    },
    {
      path: 'products',
      component: ProductsComponent,
    },
    {
      path: 'products/:id',
      component: ProductDetailComponent,
    },
    {
      path: 'semiProducts',
      component: SemiProductsComponent,
    },
    {
      path: 'product-reservations',
      component: ProductReservationsComponent,
    },
    {
      path: 'semi-product-reservations',
      component: SemiProductReservationsComponent,
    },
    {
      path: 'shipments',
      component: ShipmentsComponent,
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
