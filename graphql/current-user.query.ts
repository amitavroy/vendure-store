import { gql } from "@apollo/client";

export const currentUserQuery = gql`
  query {
    activeCustomer {
      addresses {
        id
        fullName
        streetLine1
        streetLine2
        city
        province
        postalCode
        country {
          code
          name
        }
        phoneNumber
      }
    }
  }
`;
