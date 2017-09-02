import StudentHomeScreen from '../../screens/Student/Home/StudentHomeScreen';
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders a Student Home Screen', () => {
  const user = {};
  const data = ['Francés', 'Matemáticas'];
  const tree = renderer.create(<StudentHomeScreen user={user} data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
