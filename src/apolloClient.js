import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://assured-ewe-89.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "iniadminsecret",
  },
  cache: new InMemoryCache(),
});

export default client;
