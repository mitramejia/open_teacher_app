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
import { Content, Button, Text, Toast } from 'native-base';
import propTypes from 'prop-types';
import { AsyncStorage } from 'react-native';
import strings from './strings';
import style from './style';

class StudentHomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'StudentHomeScreen',
  };
  _logout = async () => {
    await AsyncStorage.removeItem('token');
    this.props.client.resetStore();
    Toast.show({
      text: 'Adios',
      position: 'bottom',
      buttonText: 'Ocultar',
      type: 'success',
      duration: 4000,
    });
  };
  render() {
    return (
      <Content padder contentContainerStyle={style.container}>
        <Button onPress={this._logout.bind(this)}>
          <Text>
            {strings.test}
          </Text>
        </Button>
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
