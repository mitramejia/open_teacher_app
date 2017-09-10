import 'react-native';
import React from 'react';
import SchedulePicker from '../../../screens/Student/SearchTutor/Form/SchedulePicker';
import { renderShallow } from '../../utils/testHelper';

describe('Renders a Schedule Picker', () => {
  let subject;

  beforeEach(() => {
    subject = renderShallow(<SchedulePicker />);
  });

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
