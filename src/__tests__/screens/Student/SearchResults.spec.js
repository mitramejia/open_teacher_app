import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Factory } from '../../utils/factories';
import SearchResults from '../../../screens/Student/SearchTutor/SearchResults/SearchResults';

it('renders a Search Tutor Screen', () => {
  let tutors = Factory.buildList('tutor', 5);
  const tree = renderer.create(<SearchResults tutors={tutors} />).toJSON();
  expect(tree).toMatchSnapshot();
});
