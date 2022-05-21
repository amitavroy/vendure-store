import { gql } from "@apollo/client";

export const collectionQuery = gql`
  query {
    collections(options: { sort: { slug: ASC } }) {
      items {
        name
        slug
      }
    }
  }
`;
