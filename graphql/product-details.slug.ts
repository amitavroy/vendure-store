import { gql } from "@apollo/client";

export const productDetailsBySlug = (slug: string) => gql`
  query {
    product(id: "", slug: "${slug}") {
      id
      name
      createdAt
      updatedAt
      name
      description
      featuredAsset {
        width
        height
        preview
        name
      }
      facetValues {
        name
        code
      }
      variantList {
        totalItems
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
`;
