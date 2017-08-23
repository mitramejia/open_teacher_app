import React from 'react';
import { Button, Text, Content } from 'native-base';
import StudentHomeScreen from '../Student/Home/StudentHomeScreen';
import LoginScreen from '../Login/LoginScreen';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLoggedIn: false,
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    if (this.state.userIsLoggedIn) {
      return <StudentHomeScreen navigation={this.props.navigation} />;
    } else {
      return <LoginScreen navigation={this.props.navigation} />;
    }
  }
}
