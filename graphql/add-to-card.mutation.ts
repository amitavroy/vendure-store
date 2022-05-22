import { gql } from "@apollo/client";

export const addToCartMutation = gql`
  mutation ($variantId: ID!) {
    addItemToOrder(productVariantId: $variantId, quantity: 1) {
      ... on Order {
        id
        code
        state
        active
      }
    }
  }
`;
