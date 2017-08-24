import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import renderer from 'react-test-renderer';

it('renders the loading screen', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the root without loading screen', () => {
  const tree = renderer.create(<HomeScreen skipLoadingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
