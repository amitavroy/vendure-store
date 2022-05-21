import { gql } from "@apollo/client";

export const productListing = gql`
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
        variants {
          sku
          name
          productId
          priceWithTax
          price
        }
      }
    }
  }
`;
