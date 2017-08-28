// =============================================================
//
// Name: graphql-test-schema
// -> Description:
//
// Author: mitramejia
// Created at: 8/28/17
//
// =============================================================

import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import { ApolloClient } from 'apollo-client';

export function mockApolloClient() {
  const schema = makeExecutableSchema({ typeDefs });
  addMockFunctionsToSchema({ schema });
  const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });
  return new ApolloClient({
    networkInterface: mockNetworkInterface,
  });
}

export const typeDefs = `
      type User {
        id: Int
        firstName: String
        lastName: String
        email: String
      }

      type Query {
        user: User
      }
    `;
