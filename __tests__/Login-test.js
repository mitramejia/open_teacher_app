import Login from '../screens/Login/Login';
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders a Login Screen', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});
