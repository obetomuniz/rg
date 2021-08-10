import { gql } from "apollo-server-micro"

export const typeDefs = gql`
  type Post {
    id: Int
    userId: Int
    title: String
    body: String
  }

  type Query {
    post(id: Int!): Post
    posts: [Post]
  }
`
