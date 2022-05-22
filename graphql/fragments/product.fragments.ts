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

export const PRODUCT_LISTING_FIELDS = gql`
  ${ASSET_FIELDS}
  ${PRODUCT_VARIANT_FIELDS}
  fragment product on Product {
    id
    name
    description
    slug
    featuredAsset {
      ...asset
    }
    variantList {
      totalItems
    }
    variants {
      ...variant
    }
  }
`;
