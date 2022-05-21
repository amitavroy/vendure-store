import { gql } from "@apollo/client";
import {
  ASSET_FIELDS,
  PRODUCT_VARIANT_FIELDS,
} from "./fragments/product.fragments";

export const productDetailsBySlug = (slug: string) => gql`
  ${PRODUCT_VARIANT_FIELDS}
  ${ASSET_FIELDS}
  query {
    product(id: "", slug: "${slug}") {
      id
      name
      createdAt
      updatedAt
      name
      description
      featuredAsset {
        ...asset
      }
      facetValues {
        name
        code
      }
      variantList {
        totalItems
      }
      variants {
        ...variant
      }
    }
  }
`;
