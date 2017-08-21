import 'react-native';
import React from 'react';
import App from '../App';
import ProfileScreen from '../screens/ProfileScreen';
import RootNavigation from '../navigation/RootNavigation';
import renderer from 'react-test-renderer';
import _ from 'lodash';
import Shallow from 'react-test-renderer/shallow';
import strings from '../constants/strings/screens/ProfileScreen-strings';

it('renders the loading screen', async () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the root without loading screen', async () => {
  const tree = renderer.create(<App skipLoadingScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a navigation bar', () => {
  const tree = renderer.create(<RootNavigation/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a profile page', () => {
  const tree = renderer.create(<ProfileScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
})

it('profile page has a button', () => {
  // in your test:
  const shallow = new Shallow();
  shallow.render(<ProfileScreen/>);
  const result = shallow.getRenderOutput();
  const button = _.first(result.props.children);
  expect(button.props.title).toEqual(strings.heading);
});

it('renders a profile heading', () => {
  const tree = renderer.create(<ProfileScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});
