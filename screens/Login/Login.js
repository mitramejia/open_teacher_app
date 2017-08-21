import React from 'react';
import { Alert, Image, View } from 'react-native';
import {Facebook} from 'expo';
import { FACEBOOK_APP_ID } from 'react-native-dotenv';
import { Button, Container, Content, Icon, Header, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import strings from './Strings';
import styles from './StyleSheet';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTutor: false,
    };
  }

  static navigationOptions = {
    title: 'Login',
    header: null,
  };

  render() {
    return (
      <Content contentContainerStyle={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        </View>
        <View>
          <Button rounded style={styles.facebookButton} onPress={this._logInWithFacebook}>
            <Text>
              {strings.facebookButton}
            </Text>
          </Button>
        </View>
        <View>
          <Button style={styles.createAccountButton} rounded bordered onPress={this._CreateAccount}>
            <Text>
              {strings.createAccountButton}
            </Text>
          </Button>
        </View>
        <Text style={styles.isTutorLink} onPress={this._toggleLink}>
          {this.state.isTutor ? strings.im_student_link : strings.im_tutor_link}
        </Text>
      </Content>
    );
  }

  // Toggles link text
  _toggleLink() {
    this.setState({ isTutor: !this.state.isTutor });
  }

  _CreateAccount() {
    console.debug(`Create an Account ahs been  pressed!`);
  }

  // Handles login with facebook
  async _logInWithFacebook() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    }
  }
}
