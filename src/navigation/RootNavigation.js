import React from 'react';
import { Notifications } from 'expo';
import { Root } from 'native-base';
import { StackNavigator } from 'react-navigation';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import SearchTutorScreen from '../screens/Student/SearchTutor/SearchTutorScreen';
import TutorHomeScreen from '../screens/Tutor/Home/TutorHomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import CreateAccountScreen from '../screens/CreateAccount/CreateAccountScreen';

// ==================================================================================
// Global Navigation Configuration
// See: https://reactnavigation.org/docs/intro/
// ==================================================================================
const RootStackNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  CreateAccount: {
    screen: CreateAccountScreen,
  },
  StudentHome: {
    screen: SearchTutorScreen,
  },
  TutorHome: {
    screen: TutorHomeScreen,
  },
});

// ==================================================================================
// RootNavigator Component defined to handle push notifications and render
// the RootStackNavigator component
// ==================================================================================
export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return (
      <Root>
        <RootStackNavigator />
      </Root>
    );
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
