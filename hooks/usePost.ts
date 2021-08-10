import { useQuery } from "@apollo/client"

import { GET_POST } from "@/graphql/posts/queries"

const usePost = (id: number) =>
  useQuery(GET_POST, {
    variables: {
      id,
    },
  })

export default usePost
