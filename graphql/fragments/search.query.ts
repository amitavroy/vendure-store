import { gql } from "@apollo/client";

export const searchQuery = (term: string) => gql`
  query {
    search(input: { term: "${term}" }) {
      totalItems
      items {
        productName
        sku
        slug
      }
    }
  }
`;
