import { gql } from "@apollo/client";

export const addAddress = gql`
  mutation (
    $countryCode: String!
    $fullName: String
    $streetLine1: String!
    $streetLine2: String
    $city: String
    $province: String
    $phoneNumber: String
  ) {
    createCustomerAddress(
      input: {
        fullName: $fullName
        streetLine1: $streetLine1
        streetLine2: $streetLine2
        city: $city
        province: $province
        countryCode: $countryCode
        phoneNumber: $phoneNumber
      }
    ) {
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
      createdAt
    }
  }
`;
