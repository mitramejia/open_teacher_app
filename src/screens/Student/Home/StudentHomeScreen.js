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
import { Container, Content, Header, Form, Item, Input, Toast, Button } from 'native-base';
import propTypes from 'prop-types';
import style from './style';
import TutorSearchForm from './Form/TutorSearchForm';

class StudentHomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Content contentContainerStyle={style.container}>
        <TutorSearchForm client={this.props.client} />
      </Content>
    );
  }
}

StudentHomeScreen.propTypes = {
  client: React.PropTypes.object.isRequired,
  navigation: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired,
};

export default StudentHomeScreen;
