import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SearchTutorScreen from '../../../screens/Student/SearchTutor/SearchTutorScreen';
import { User, Subject } from '../../utils/factories';

describe('SearchTutorScreen', () => {
  it('renders a Search Tutor Screen', () => {
    const user = User.build();
    const data = [Subject.build(), Subject.build(), Subject.build];
    console.log('subjects', data);
    const tree = renderer.create(<SearchTutorScreen user={user} data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
