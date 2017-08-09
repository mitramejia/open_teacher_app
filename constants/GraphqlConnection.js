// =============================================================
//
// Name: graphqlConnection
// -> Description: 
//
// Author: mitramejia 
// Created at: 8/6/17
//
// =============================================================

import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {GRAPHQL_SIMPLE_API_URL} from 'react-native-dotenv'

export default client =new ApolloClient({
  networkInterface: createNetworkInterface({uri: GRAPHQL_SIMPLE_API_URL}),
});
