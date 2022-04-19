import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://assured-ewe-89.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "d9tYqpkkgmNGSicdr54rbbuSBunKo6xylQ7JTz0PqlDes5Mh3C36a6bpGMqwpubM",
  },
  cache: new InMemoryCache(),
});

export default client;
