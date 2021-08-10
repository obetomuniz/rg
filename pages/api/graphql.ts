import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from "apollo-server-micro"
import Cors from "cors"
import { typeDefs } from "@/graphql/posts/schemas"
import { resolvers } from "@/graphql/posts/resolvers"

export const config = {
  api: {
    bodyParser: false,
  },
}

const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: Function) => {
  return new Promise((resolve, reject) =>
    fn(req, res, (result: any) =>
      result instanceof Error ? reject(result) : resolve(result)
    )
  )
}

const endpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()
  await runMiddleware(req, res, Cors({ origin: "*" }))
  const handler = server.createHandler({ path: "/api/graphql" })
  await handler(req, res)
  await server.stop()
}

export default endpoint
