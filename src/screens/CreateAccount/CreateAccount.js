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
import { Content, Text } from 'native-base';

export default class CreateAccountScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'CreateAccountScreen',
  };

  render() {
    return (
      <Content>
        <Text>Hello</Text>
      </Content>
    );
  }
}
