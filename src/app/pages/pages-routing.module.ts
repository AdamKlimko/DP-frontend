import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {PurchaseOrdersComponent} from './procurement/purchase-order/purchase-orders/purchase-orders.component';
import {CustomerOrderDetailComponent} from './customer-relations/customer-order/customer-order-detail/customer-order-detail.component';
import {ProductsComponent} from './storage/product/products/products.component';
import {CustomersComponent} from './customer-relations/customer/customers/customers.component';
import {ProductReservationsComponent} from './manufacturing/product-reservation/product-reservations/product-reservations.component';
import {CustomerOrdersComponent} from './customer-relations/customer-order/customer-orders/customer-orders.component';
import {ShipmentsComponent} from './customer-relations/shipment/shipments/shipments.component';
import {SemiProductsComponent} from './storage/semi-product/semi-products/semi-products.component';
import {ProductDetailComponent} from './storage/product/product-detail/product-detail.component';
import {ProductionOrdersComponent} from './manufacturing/production-order/production-orders/production-orders.component';
import {
  ProductionOrderDetailComponent,
} from './manufacturing/production-order/production-order-detail/production-order-detail.component';
import {SemiProductReservationsComponent} from './manufacturing/semi-product-reservation/semi-product-reservations/semi-product-reservations.component';
import {SemiProductStorageItemsComponent} from './storage/semi-product-storage-item/semi-product-storage-items/semi-product-storage-items.component';
import {PurchaseRequisitionsComponent} from './procurement/purchase-requisition/purchase-requisitions/purchase-requisitions.component';
import {ProductStorageItemsComponent} from './storage/product-storage-item/product-storage-items/product-storage-items.component';
import {PurchaseOrderDetailComponent} from './procurement/purchase-order/purchase-order-detail/purchase-order-detail.component';
import {ShipmentDetailComponent} from './customer-relations/shipment/shipment-detail/shipment-detail.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'purchase-orders',
      component: PurchaseOrdersComponent,
    },
    {
      path: 'purchase-orders/:id',
      component: PurchaseOrderDetailComponent,
    },
    {
      path: 'purchase-requisitions',
      component: PurchaseRequisitionsComponent,
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
      path: 'product-storage-items',
      component: ProductStorageItemsComponent,
    },
    {
      path: 'semi-products',
      component: SemiProductsComponent,
    },
    {
      path: 'semi-product-storage-items',
      component: SemiProductStorageItemsComponent,
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
      path: 'shipments/:id',
      component: ShipmentDetailComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
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
