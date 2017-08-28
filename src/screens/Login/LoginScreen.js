import React from 'react';
import { Facebook } from 'expo';
import { Alert, Image, View, AsyncStorage } from 'react-native';
import images from '../../config/images';
import strings from './strings';
import styles from './style';
import { FACEBOOK_APP_ID } from 'react-native-dotenv';
import propTypes from 'prop-types';
import { compose, gql, graphql, withApollo } from 'react-apollo';
import { Button, Container, Content, Icon, Header, Text, Toast } from 'native-base';
import { createAccount, signinUser, userQuery } from '../../api/graphql/queries';
import settings from '../../config/settings';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTutor: false,
      fbUserData: null,
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
    this.props.navigation.navigate('CreateAccount');
  }

  // Handles login with facebook
  async _logInWithFacebook() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
      permissions: ['public_profile', 'email', 'user_friends'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?fields=email,first_name,last_name,age_range  ,cover&locale=es_ES&access_token=${token}`
      );
      // Get user data and set component State
      const userData = await response.json();
      this.setState({
        userIsLoggedIn: true,
        fbUserData: {
          firstName: userData.first_name,
          lastName: userData.last_name,
          email: userData.email,
          password: settings.fbLoginProvisionalPassword,
        },
      });
      // Notify user has logged in
      Toast.show({
        text: `Hola ${userData.first_name}`,
        position: 'bottom',
        buttonText: 'Ocultar',
        type: 'success',
        duration: 4000,
      });

      // Sign In user via Graphcool Email+Password auth
      // Give the user  a basic password
      const { email, password } = this.state.fbUserData;
      this.props
        .signinUser({ variables: { email, password } })
        .then(response => {
          console.log(response);
          AsyncStorage.setItem('token', response.data.signinUser.token);
          this.props.navigation.navigate('Home');
        })
        .catch(e => {
          console.error(e.message);
          this.props.navigation.navigate('Home');
        });
    }
  }

  render() {
    return (
      <Content contentContainerStyle={styles.container}>
        {/* App Logo */}
        <View style={styles.welcomeContainer}>
          <Image source={images.logo} style={styles.logo} />
        </View>
        {/* Log In with Facebook Button */}
        <View>
          <Button
            rounded
            style={styles.facebookButton}
            onPress={this._logInWithFacebook.bind(this)}>
            <Text>
              {strings.facebookButton}
            </Text>
          </Button>
        </View>
        {/* Create Account Button */}
        <View>
          <Button
            style={styles.createAccountButton}
            rounded
            bordered
            onPress={this._navigateToCreateAccount.bind(this)}>
            <Text>
              {strings.createAccountButton}
            </Text>
          </Button>
        </View>
        <Text style={styles.isTutorLink} onPress={this._toggleLink.bind(this)}>
          {this.state.isTutor ? strings.imStudentLink : strings.imTutorLink}
        </Text>
      </Content>
    );
  }
}

LoginScreen.propTypes = {
  client: React.PropTypes.object.isRequired,
  navigation: React.PropTypes.object.isRequired,
  createAccount: React.PropTypes.func.isRequired,
  signinUser: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired,
};

export default graphql(createAccount, { name: 'createAccount' })(
  graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
    graphql(signinUser, { name: 'signinUser' })(withApollo(LoginScreen))
  )
);
