import { gql } from "@apollo/client";
import { PRODUCT_VARIANT_FIELDS } from "./fragments/product.fragments";

export const productListing = gql`
  ${PRODUCT_VARIANT_FIELDS}
  query {
    products(options: { sort: { createdAt: DESC } }) {
      items {
        id
        name
        description
        slug
        featuredAsset {
          name
          width
          height
          preview
        }
        variantList {
          totalItems
        }
        variants {
          ...variant
        }
      }
    }
  }
`;
