// =============================================================
//
// Name: StudentHomeScreen
// -> Description:
//
// Author: mitramejia
// Created at: 8/21/17
//
// =============================================================
import React from 'react';
import { Content, Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import {
  Form,
  Separator,
  InputField,
  LinkField,
  SwitchField,
  PickerField,
  DatePickerField,
  TimePickerField,
} from 'react-native-form-generator';
import { KeyboardAwareScrollView } from 'react-native-form-generator/src/KeyboardAwareScrollView';

export default class CreateAccountScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
    };
  }

  static PropTypes = {
    isUserLoggedIn: PropTypes.bool,
  };

  static navigationOptions = {
    title: 'CreateAccountScreen',
  };
  handleFormChange(formData) {
    /*
    formData will contain all the values of the form,
    in this example.

    formData = {
    first_name:"",
    last_name:"",
    gender: '',
    birthday: Date,
    has_accepted_conditions: bool
    }
    */

    this.setState({ formData });
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(event, reactNode) {
    //console.log(e, component);
    this.refs.scroll.scrollToFocusedInput(event, reactNode);
  }
  render() {
    return (
      <Content>
        <KeyboardAwareScrollView ref="scroll">
          <Form
            ref="registrationForm"
            onFocus={this.handleFormFocus.bind(this)}
            onChange={this.handleFormChange.bind(this)}
            label="Create Account">
            <Separator />
            <InputField
              ref="first_name"
              label="First Name"
              placeholder="First Name"
              helpText={(self => {
                if (Object.keys(self.refs).length !== 0) {
                  if (!self.refs.registrationForm.refs.first_name.valid) {
                    return self.refs.registrationForm.refs.first_name.validationErrors.join('\n');
                  }
                }
                // if(!!(self.refs && self.refs.first_name.valid)){
                // }
              })(this)}
              validationFunction={this._nameValidations()}
            />
            <InputField ref="last_name" placeholder="Last Name" />
            <InputField
              multiline={false}
              ref="other_input"
              placeholder="Other Input"
              helpText="this is an helpful text it can be also very very long and it will wrap"
            />
            <Separator />
            <SwitchField
              label="I accept Terms & Conditions"
              ref="has_accepted_conditions"
              helpText="Please read carefully the terms & conditions"
            />
            <PickerField
              ref="gender"
              label="Gender"
              options={{
                '': '',
                male: 'Male',
                female: 'Female',
              }}
            />
            <DatePickerField
              ref="birthday"
              minimumDate={new Date('1/1/1900')}
              maximumDate={new Date()}
              placeholder="Birthday"
            />
            <TimePickerField ref="alarm_time" placeholder="Set Alarm" />
            <DatePickerField
              ref="meeting"
              minimumDate={new Date('1/1/1900')}
              maximumDate={new Date()}
              mode="datetime"
              placeholder="Meeting"
            />
          </Form>
          <Text>
            {JSON.stringify(this.state.formData)}
          </Text>
        </KeyboardAwareScrollView>
      </Content>
    );
  }

  _nameValidations(): array {
    return [
      value => {
        if (value === '') return 'Required';
        //Initial state is null/undefined
        if (!value) return true;
        // Check if First Name Contains Numbers
        let matches = value.match(/\d+/g);
        if (matches !== null) {
          return "First Name can't contain numbers";
        }
        return true;
      },
      value => {
        ///Initial state is null/undefined
        if (!value) return true;
        if (value.indexOf('4') !== -1) {
          return "I can't stand number 4";
        }
        return true;
      },
    ];
  }
}
