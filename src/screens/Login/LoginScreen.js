import React from 'react';
import { Facebook } from 'expo';
import { Alert, Image, View } from 'react-native';
import images from '../../config/images';
import strings from './strings';
import style from './style';
import { FACEBOOK_APP_ID } from 'react-native-dotenv';
import { Button, Container, Content, Icon, Header, Text } from 'native-base';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTutor: false,
      facebookUserData: null,
      userIsLoggedIn: this.props.userIsLoggedIn,
    };
  }

  static navigationOptions = {
    title: 'LoginScreen',
  };

  // Toggles link text
  _toggleLink() {
    console.log(this.state);
    this.setState({ isTutor: !this.state.isTutor });
  }
  // Goes to the CreateAccount Screen
  _navigateToCreateAccount() {
    console.log(`Create an Account ahs been  pressed!`);
    this.props.navigation.navigate('CreateAccount');
  }

  // Handles login with facebook
  async _logInWithFacebook() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      this.setState({ userIsLoggedIn: true });
      this.setState({ facebookUserData: response });
      this.props.navigation.navigate('StudentHome');
    }
  }

  render() {
    return (
      <Content contentContainerStyle={style.container}>
        {/* App Logo */}
        <View style={style.welcomeContainer}>
          <Image source={images.logo} style={style.logo} />
        </View>
        {/* Log In with Facebook Button */}
        <View>
          <Button rounded style={style.facebookButton} onPress={this._logInWithFacebook.bind(this)}>
            <Text>
              {strings.facebookButton}
            </Text>
          </Button>
        </View>
        {/* Create Account Button */}
        <View>
          <Button
            style={style.createAccountButton}
            rounded
            bordered
            onPress={this._navigateToCreateAccount.bind(this)}>
            <Text>
              {strings.createAccountButton}
            </Text>
          </Button>
        </View>
        <Text style={style.isTutorLink} onPress={this._toggleLink.bind(this)}>
          {this.state.isTutor ? strings.imStudentLink : strings.imTutorLink}
        </Text>
      </Content>
    );
  }
}
