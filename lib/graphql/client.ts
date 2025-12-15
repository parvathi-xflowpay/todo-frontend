//graphql client from graphql-request
import { GraphQLClient } from 'graphql-request';
    
const endpoint = 'http://localhost:3001/graphql';  
export const graphQLClient = new GraphQLClient(endpoint);
