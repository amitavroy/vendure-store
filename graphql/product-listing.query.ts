import { gql } from "@apollo/client";

export const productListing = gql`
  query {
    products {
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
        variants {
          sku
          name
          productId
          price
        }
      }
    }
  }
`;
