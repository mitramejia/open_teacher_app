import LoginScreen from '../../screens/Login/LoginScreen';
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';
import { mockApolloClient } from '../../api/graphql/graphql-test-schema';

it('renders a Login Screen', () => {
  const navigation = {};
  const tree = renderer
    .create(
      <ApolloProvider client={mockApolloClient()}>
        <LoginScreen navigation={navigation} />
      </ApolloProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
