// =============================================================
//
// Name: Actions
// -> Description:
//
// Author: mitramejia
// Created at: 8/21/17
//
// =============================================================
import { Alert } from 'react-native';
import { Facebook } from 'expo';
import { FACEBOOK_APP_ID } from 'react-native-dotenv';

export default {
  // Toggles link text
  toggleLink: ref => {
    ref.setState({ isTutor: !ref.state.isTutor });
  },

  createAccount: ref => {
    console.debug(`Create an Account ahs been  pressed!`);
    ref.navigation.navigate('StudentHomeScreen');
  },

  // Handles login with facebook
  logInWithFacebook: async ref => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      ref._navigateToStudentHomeScreen();
    }
  },
};
