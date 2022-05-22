import { gql } from "@apollo/client";

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
      lines {
        id
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
