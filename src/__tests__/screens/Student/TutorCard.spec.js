import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Factory from '../../utils/factories';
import TutorCard from '../../../screens/Student/SearchTutor/SearchResults/TutorCard';

it('renders a Search Tutor Screen', () => {
  let tutor = Factory.build('tutor');
  const tree = renderer.create(<TutorCard tutor={tutor} />).toJSON();
  expect(tree).toMatchSnapshot();
});
