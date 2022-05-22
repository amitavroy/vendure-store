import { gql } from "@apollo/client";

export const userLoginMutation = gql`
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password, rememberMe: true) {
      ... on CurrentUser {
        id
        identifier
      }
      ... on InvalidCredentialsError {
        errorCode
        message
        authenticationError
      }
      ... on NotVerifiedError {
        errorCode
        message
      }
      ... on NativeAuthStrategyError {
        errorCode
        message
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
