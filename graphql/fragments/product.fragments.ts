import { gql } from "@apollo/client";

export const PRODUCT_VARIANT_FIELDS = gql`
  fragment variant on ProductVariant {
    id
    sku
    name
    productId
    priceWithTax
    price
  }
`;

export const ASSET_FIELDS = gql`
  fragment asset on Asset {
    name
    width
    height
    preview
  }
`;
