import { AssetType } from "./commons/asset-type.interface";

export interface ActiveOrder {
  id: number;
  active: boolean;
  code: string;
  state: string;
  total: number;
  totalQuantity: number;
  totalWithTax: number;
  lines: Array<OrderLines>;
}

export interface OrderLines {
  productVariant: {
    id: number;
    name: string;
    price: number;
    sku: string;
    __typename: string;
    product: {
      featuredAsset: AssetType;
    };
  };
}
