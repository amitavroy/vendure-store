import { gql } from "@apollo/client";
import { ASSET_FIELDS } from "./fragments/product.fragments";

export const userAccountQuery = gql`
  query {
    activeOrder {
      id
      code
      state
      active
      totalQuantity
      total
      totalWithTax
      customer {
        emailAddress
      }
      lines {
        productVariant {
          id
          sku
          name
          price
          product {
            featuredAsset {
              width
              height
              preview
              name
            }
          }
        }
      }
    }
  }
`;
