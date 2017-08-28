import StudentHomeScreen from '../screens/Student/Home/StudentHomeScreen';
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ApolloProvider} from "react-apollo";
import { mockApolloClient } from '../api/graphql/graphql-test-schema';

it('renders a Login Screen', () => {
  const navigation = {};
  const user = {};

  const tree = renderer
    .create(
      <ApolloProvider client={mockApolloClient()}>
        <StudentHomeScreen navigation={navigation} user={user} />
      </ApolloProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
