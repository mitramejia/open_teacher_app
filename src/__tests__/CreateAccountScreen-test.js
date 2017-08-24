import CreateAccountScreen from '../screens/CreateAccount/CreateAccountScreen';
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders a Create Account Screen', () => {
  const tree = renderer.create(<CreateAccountScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
