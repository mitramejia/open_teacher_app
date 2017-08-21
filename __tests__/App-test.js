import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { ApolloProvider } from 'react-apollo';
import TestUtils from 'react-dom/test-utils';

it('renders the loading screen', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the root without loading screen', () => {
  const tree = renderer.create(<App skipLoadingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
