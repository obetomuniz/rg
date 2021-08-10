import { gql } from "@apollo/client"

export const GET_POST = gql`
  query GetPost($id: Int!) {
    post(id: $id) {
      title
      body
    }
  }
`

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
    }
  }
`
