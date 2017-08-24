import LoginScreen from '../screens/Login/LoginScreen';
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders a Login Screen', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
