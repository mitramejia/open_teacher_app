import React from 'react';
import TutorHomeScreen from '../../screens/Tutor/Home/TutorHomeScreen';
import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';
import { mockApolloClient } from '../../api/graphql/graphql-test-schema';

it('renders the Home Screen', () => {
  const navigation = {};
  const user = {};
  const tree = renderer
    .create(
      <ApolloProvider client={mockApolloClient()}>
        <TutorHomeScreen navigation={navigation} user={user} />
      </ApolloProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
