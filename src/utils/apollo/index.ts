import { ApolloClient,  InMemoryCache, NormalizedCacheObject, HttpLink } from '@apollo/client'

const GRAPHQL_DEV = process.env.APOLLO_LINK_DEV || 'http://35.247.163.253:8000/graphql'
const GRAPHQL_PROD = process.env.APOLLO_LINK_PROD || ''

const cache = new InMemoryCache()

const link = new HttpLink({
  uri: process.env.NODE_ENV === 'development'? GRAPHQL_DEV: GRAPHQL_PROD,
  headers: {
    bearer: 'access token example'
  }
})

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
})

export { client }