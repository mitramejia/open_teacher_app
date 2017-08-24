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
import strings from './strings';
import style from './style';

export default class StudentHomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'StudentHomeScreen',
  };

  render() {
    return (
      <Content contentContainerStyle={style.container}>
        <Button>
          <Text>
            {strings.test}
          </Text>
        </Button>
      </Content>
    );
  }
}
