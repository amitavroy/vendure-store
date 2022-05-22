import { gql } from "@apollo/client";
import { PRODUCT_LISTING_FIELDS } from "./fragments/product.fragments";

export const productListing = gql`
  ${PRODUCT_LISTING_FIELDS}
  query {
    products(options: { sort: { createdAt: DESC } }) {
      items {
        ...product
      }
    }
  }
`;
