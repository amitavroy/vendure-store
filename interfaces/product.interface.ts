import { AssetType } from "./commons/asset-type.interface";

export interface Product {
  id: number;
  name: string;
  description: string;
  slug: string;
  featuredAsset: AssetType;
  variants: Array<Variant>;
}

export interface Variant {
  sku: string;
  name: string;
  productId: number;
  priceWithTax: number;
  price: number;
}

export interface Products {
  __typename: string;
  items: Array<Product>;
}
