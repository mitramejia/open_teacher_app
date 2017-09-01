import StudentHomeScreen from '../../screens/Student/Home/StudentHomeScreen';
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';
import { mockApolloClient } from '../../api/graphql/graphql-test-schema';

it('renders a Login Screen', () => {
  const navigation = {};
  const user = {};
  const client = mockApolloClient();
  const tree = renderer
    .create(
      <ApolloProvider client={client}>
        <StudentHomeScreen navigation={navigation} user={user} client={client} />
      </ApolloProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
