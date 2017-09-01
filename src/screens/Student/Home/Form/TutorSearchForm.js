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
  Input,
  Toast,
  Button,
  Icon,
  StyleProvider,
  connectStyle,
} from 'native-base';
import PropTypes from 'prop-types';
import strings from '../strings';
import style from '../style';
import { colors } from '../../../../config/style';
import OptionPicker from '../../../../components/OptionPicker';

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
          <OptionPicker name="Materias" icon="ios-book-outline" data={this.props.subjects} />
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
  subjects: React.PropTypes.array.isRequired,
};

export default TutorSearchForm;
