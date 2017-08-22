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
import { StackNavigator } from 'react-navigation';
import { Content, Text } from 'native-base';
import strings from './Strings';
import styles from './StyleSheet';

class StudentHomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'StudentHomeScreen',
    header: null,
  };

  render() {
    return (
      <Content contentContainerStyle={styles.container}>
        <Text>
          {strings.test}
        </Text>
      </Content>
    );
  }
}

// Export to Navigation
export default StackNavigator({
  StudentHomeScreen: {
    screen: StudentHomeScreen,
  },
});
