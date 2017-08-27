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
import { GRAPHCOOL_SIMPLE_API, GRAPHCOOL_WEB_SOCKET_CLIENT } from 'react-native-dotenv';
import { addGraphQLSubscriptions, SubscriptionClient } from 'subscriptions-transport-ws';
import { AsyncStorage } from 'react-native';

const networkInterface = createNetworkInterface({ uri: GRAPHCOOL_SIMPLE_API });

// Use middleware to manage auth tokens
networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}; // Create the header object if needed.
      }

      AsyncStorage.getItem('token').then(
        encodedToken => {
          req.options.headers['authorization'] = `Bearer ${encodedToken}`;
          next();
        },
        failure => {
          console.error('ERROR: no token', failure);
          next();
        }
      );
    },
  },
]);

// Create WebSocket client
const wsClient = new SubscriptionClient(GRAPHCOOL_WEB_SOCKET_CLIENT, {
  reconnect: true,
});
// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(networkInterface, wsClient);

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  dataIdFromObject: o => o.id,
});

export default client;
