import { GraphQLClient } from "graphql-request";

const endpoint = "https://www.homeviewdubai.com/blogs/graphql";

export const client = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
  },
});