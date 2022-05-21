import { gql } from "@apollo/client";

export const PRODUCT_VARIANT_FIELDS = gql`
  fragment variant on ProductVariant {
    sku
    name
    productId
    priceWithTax
    price
  }
`;

export const ASSET_FIELDS = gql`
  fragment asset on Asset {
    width
    height
    preview
    name
  }
`;
