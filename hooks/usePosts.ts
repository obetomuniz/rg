import { useQuery } from "@apollo/client"

import { GET_POSTS } from "@/graphql/posts/queries"

const usePosts = () => useQuery(GET_POSTS)

export default usePosts
