import "../styles/globals.css";
import type { AppProps } from "next/app";
import apolloClient from "../config/apollo.config";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
