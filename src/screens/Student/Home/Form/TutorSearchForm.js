// =============================================================
//
// Name: TutorSearch
// -> Description:
//
// Author: mitramejia
// Created at: 8/28/17
//
// =============================================================

import React from 'react';
import {
  Container,
  View,
  Content,
  Header,
  Form,
  Item,
  Text,
  Input,
  Toast,
  Button,
  Icon,
  StyleProvider,
  connectStyle,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import propTypes from 'prop-types';
import strings from '../strings';
import style from '../style';
import { colors } from '../../../../config/style';
import SubjectPicker from './SubjectPicker';

class TutorSearchForm extends React.Component {
  render() {
    return (
      <Content padder style={style.formContainer}>
        <View style={style.formContainer}>
          <Icon
            style={style.userIcon}
            name="ios-contact-outline"
            size={44}
            color={colors.secondary}
          />
        </View>
        <Form ref="registrationForm">
          <SubjectPicker />
          <Item style={style.inputField} regular>
            <Icon name="ios-calendar-outline" size={28} color={colors.secondary} />
            <Input
              placeholder={strings.timeInputField}
              ref={input => {
                this.time = input;
              }}
            />
          </Item>
        </Form>
      </Content>
    );
  }
}

TutorSearchForm.propTypes = {
  client: React.PropTypes.object.isRequired,
};

export default TutorSearchForm;
