// =============================================================
//
// Name: GraphcoolConnection
// -> Description:
//
// Author: mitramejia
// Created at: 8/21/17
//
// =============================================================

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { GRAPHQL_SIMPLE_API_URL, WEB_SOCKET_CLIENT_URL } from 'react-native-dotenv';
import { addGraphQLSubscriptions, SubscriptionClient } from 'subscriptions-transport-ws';

// console.log(GRAPHQL_SIMPLE_API_URL);
// console.log(WEB_SOCKET_CLIENT_URL);

const networkInterface = createNetworkInterface({ uri: GRAPHQL_SIMPLE_API_URL });
// Create WebSocket client
const wsClient = new SubscriptionClient(WEB_SOCKET_CLIENT_URL, {
  reconnect: true,
});
// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(networkInterface, wsClient);

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  dataIdFromObject: o => o.id,
});

export default client;