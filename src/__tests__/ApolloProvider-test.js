import React from 'react';
import renderer from 'react-test-renderer';
import { MockComponent } from 'react-native/jest/mockComponent';
import { ApolloProvider } from 'react-apollo';
import { TestUtils } from 'react-dom/test-utils';

it('renders the Apollo Provider component', () => {
  const client = {};
  const mockComponent = React.createElement('Text');
  const tree = renderer
    .create(<ApolloProvider client={client} children={mockComponent} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
