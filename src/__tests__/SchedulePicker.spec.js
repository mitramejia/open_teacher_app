import SchedulePicker from '../screens/Student/Home/Form/SchedulePicker';
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import settings from '../config/settings';
import { shallowRenderer } from './testHelper';

describe('Renders a Schedule Picker', () => {
  let subject = shallowRenderer(<SchedulePicker />);

  // beforeEach(() => {
  //   subject = shallowRenderer(<SchedulePicker />);
  // });

  it('Renders a Shedule Picker', () => {
    expect(subject).toMatchSnapshot();
  });

  it('Renders 7 rows. One for each day', () => {
    // subject = makeColums(settings.days);
    console.log(subject);
    // expect(subject.props.children).toEqual(7);
    /*

    export days from config/strings

    function makeColumn(days: array, ){
          strings.days.forEach(day => {
            <Row>
              <CheckBox selected={false} /> day
            </Row>
          })
        }

  */
  });
});
