import {State} from '../enums/state';
import {Currency} from '../enums/currency';
import {SemiProduct} from './semi-product';

export class PurchaseRequisition {
  id: string;
  purchaseOrder: string | undefined;
  productionOrder: string;
  semiProduct: string | SemiProduct;
  state: State;
  quantity: number;
  unitPrice: number;
  price: number;
  currency: Currency;

  constructor(purchaseOrder: string | undefined,
              productionOrder: string,
              semiProduct: string | SemiProduct,
              state: State,
              quantity: number,
              unitPrice: number,
              currency: Currency) {
    this.purchaseOrder = purchaseOrder;
    this.productionOrder = productionOrder;
    this.semiProduct = semiProduct;
    this.state = state;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.currency = currency;
  }
}
