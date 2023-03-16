export class PurchaseOrder {
  state: string;
  price: number;
  currency: String;
  promisedDeliveryDate: Date;
  wantedDeliveryDate: Date;
  supplier: string;
  purchaseRequisitions: string[];
}
