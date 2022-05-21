import { ApolloClient, ApolloQueryResult, InMemoryCache } from "@apollo/client";
import { productListing } from "../graphql/product-listing.query";

export class VendureService {
  private _client;
  constructor() {
    const uri = process.env.NEXT_PUBLIC_VENDURE_URL;
    this._client = new ApolloClient({
      uri,
      cache: new InMemoryCache(),
    });
  }
  public fetchProducts = async (): Promise<ApolloQueryResult<any>> => {
    const response = await this._client.query({
      query: productListing,
    });
    return response;
  };
}
