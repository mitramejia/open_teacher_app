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
import { allSubjectsQuery } from '../../../../api/graphql/queries';
import { graphql, withApollo } from 'react-apollo';
class TutorSearchForm extends React.Component {
  render() {
    return (
      <Content padder style={style.formContainer}>
        <View style={style.formContainer}>
          <Ionicons
            style={style.userIcon}
            name="ios-contact-outline"
            size={44}
            color={colors.secondary}
          />
        </View>
        <Form ref="registrationForm">
          <Item style={style.inputField} regular>
            <Ionicons name="ios-clipboard-outline" size={28} color={colors.secondary} />
            <Input
              placeholder={strings.subjectInputField}
              ref={input => {
                this.subject = input;
              }}
            />
          </Item>
          <Item style={style.inputField} regular>
            <Ionicons name="ios-calendar-outline" size={28} color={colors.secondary} />
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

export default graphql(allSubjectsQuery)(withApollo(TutorSearchForm));
