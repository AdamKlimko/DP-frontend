import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from './product/products/products.component';
import {ProductDialogComponent} from './product/product-dialog/product-dialog.component';
import {ProductTabComponent} from './product/product-tab/product-tab.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {ProductSelectionDialogComponent} from './product/product-selection-dialog/product-selection-dialog.component';
import {ProductTableComponent} from './product/product-table/product-table.component';
import {
  ProductStorageItemsComponent,
} from './product-storage-item/product-storage-items/product-storage-items.component';
import {
  ProductStorageItemTableComponent,
} from './product-storage-item/product-storage-item-table/product-storage-item-table.component';
import {
  ProductStorageItemDialogComponent,
} from './product-storage-item/product-storage-item-dialog/product-storage-item-dialog.component';
import {SemiProductStorageItemsComponent} from './semi-product-storage-item/semi-product-storage-items/semi-product-storage-items.component';
import {
  SemiProductStorageItemTableComponent,
} from './semi-product-storage-item/semi-product-storage-item-table/semi-product-storage-item-table.component';
import {SemiProductsComponent} from './semi-product/semi-products/semi-products.component';
import {SemiProductTableComponent} from './semi-product/semi-product-table/semi-product-table.component';
import {SemiProductDialogComponent} from './semi-product/semi-product-dialog/semi-product-dialog.component';
import {
  SemiProductSelectionDialogComponent,
} from './semi-product/semi-product-selection-dialog/semi-product-selection-dialog.component';
import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbTabsetModule,
} from '@nebular/theme';
import {RouterLink} from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BomItemTableComponent} from './product/bom-item-table/bom-item-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {SemiProductTabComponent} from './semi-product/semi-product-tab/semi-product-tab.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDialogComponent,
    ProductTableComponent,
    ProductTabComponent,
    ProductDetailComponent,
    ProductSelectionDialogComponent,
    ProductStorageItemsComponent,
    ProductStorageItemTableComponent,
    ProductStorageItemDialogComponent,
    SemiProductStorageItemsComponent,
    SemiProductStorageItemTableComponent,
    SemiProductsComponent,
    SemiProductTableComponent,
    SemiProductDialogComponent,
    SemiProductSelectionDialogComponent,
    BomItemTableComponent,
    SemiProductTabComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    RouterLink,
    MatTooltipModule,
    NbListModule,
    NbTabsetModule,
    ReactiveFormsModule,
    NbInputModule,
    NbFormFieldModule,
    FormsModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
  ],
  exports: [
    SemiProductStorageItemTableComponent,
    ProductStorageItemTableComponent
  ]
})
export class StorageModule { }
