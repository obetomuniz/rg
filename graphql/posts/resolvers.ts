export const resolvers = {
  Query: {
    posts: async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_DATABASE_ENDPOINT)
      return response.json()
    },
    post: async (_: any, { id }: Post) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DATABASE_ENDPOINT}/${id}`
      )

      return response.json()
    },
  },
}
