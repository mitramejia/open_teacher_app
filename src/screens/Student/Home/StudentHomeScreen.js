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
import style from './style';
import strings from './strings';
import { colors } from '../../../config/style';
import OptionPicker from '../../../components/OptionPicker';

class StudentHomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

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
          <OptionPicker name="Materias" icon="ios-book-outline" data={this.props.data} />
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

StudentHomeScreen.propTypes = {
  user: React.PropTypes.object.isRequired,
  data: React.PropTypes.array.isRequired,
};

export default StudentHomeScreen;
