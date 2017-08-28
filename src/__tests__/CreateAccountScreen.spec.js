import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';
import { mockApolloClient } from '../api/graphql/graphql-test-schema';
import CreateAccountScreen from '../screens/CreateAccount/CreateAccountScreen';

it('renders a Create Account Screen', () => {
  const navigation = {};
  const user = {};
  const tree = renderer
    .create(
      <ApolloProvider client={mockApolloClient()}>
        <CreateAccountScreen navigation={navigation} user={user} />
      </ApolloProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
