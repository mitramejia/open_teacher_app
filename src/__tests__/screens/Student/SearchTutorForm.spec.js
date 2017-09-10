import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SearchTutorForm from '../../../screens/Student/SearchTutor/Form/SearchTutorForm';

it('renders a Search Tutor Screen', () => {
  const user = {};
  const data = ['Francés', 'Matemáticas'];
  const tree = renderer.create(<SearchTutorForm user={user} data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
