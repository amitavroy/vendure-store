import { ApolloClient, ApolloQueryResult, InMemoryCache } from "@apollo/client";
import { productDetailsBySlug } from "../graphql/product-details.slug";
import { productListing } from "../graphql/product-listing.query";
import { productSlug } from "../graphql/product-slug.query";

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

  public fetchProductSlugs = async (): Promise<ApolloQueryResult<any>> => {
    const response = await this._client.query({
      query: productSlug,
    });
    return response;
  };

  public fetchProductBySlugs = async (
    slug: string
  ): Promise<ApolloQueryResult<any>> => {
    const response = await this._client.query({
      query: productDetailsBySlug(slug),
    });
    return response;
  };
}
