import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SearchTutorScreen from '../../../screens/Student/SearchTutor/SearchTutorScreen';

it('renders a Search Tutor Screen', () => {
  const user = {};
  const data = ['Francés', 'Matemáticas'];
  const tree = renderer.create(<SearchTutorScreen user={user} data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
