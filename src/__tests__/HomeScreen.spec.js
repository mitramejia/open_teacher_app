import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';
import { mockApolloClient } from '../api/graphql/graphql-test-schema';

it('renders the Home Screen', () => {
  const navigation = {};
  const tree = renderer
    .create(
      <ApolloProvider client={mockApolloClient()}>
        <HomeScreen navigation={navigation} />
      </ApolloProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
