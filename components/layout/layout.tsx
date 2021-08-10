import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  cache: new InMemoryCache({
    addTypename: false,
  }),
})


const Layout: React.FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export default Layout
