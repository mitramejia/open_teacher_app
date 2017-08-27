import React from 'react';
import { AppLoading } from 'expo';
import { Button, Text, Content } from 'native-base';
import { ApolloProvider, compose, gql, graphql, withApollo } from 'react-apollo';
import PropTypes from 'prop-types';
import StudentHomeScreen from '../Student/Home/StudentHomeScreen';
import LoginScreen from '../Login/LoginScreen';
import TutorHomeScreen from '../Tutor/Home/TutorHomeScreen';
import { userQuery } from '../../api/graphql/queries';
import { AsyncStorage } from "react-native";

class HomeScreen extends React.Component {
  state = {
    user: null,
  };


  _logout = async () => {
    await AsyncStorage.removeItem('token');
    this.props.client.resetStore();
  };

  _userIsLoggedIn = () => {
    return this.props.data.user;
  };

  _userIsTutor = () => {
    return this.props.data.user.isTutor;
  };

  render() {
    if (this.props.data.loading) {
      return <AppLoading />;
    } else {
      if (this._userIsLoggedIn()) {
        if (this._userIsTutor()) {
          return (
            <TutorHomeScreen
              client={this.props.client}
              user={this.props.data.user}
              navigation={this.props.navigation}
            />
          );
        } else {
          return (
            <StudentHomeScreen
              client={this.props.client}
              user={this.props.data.user}
              navigation={this.props.navigation}
            />
          );
        }
      } else {
        return <LoginScreen client={this.props.client} navigation={this.props.navigation} />;
      }
    }
  }
}

HomeScreen.propTypes = {
  client: React.PropTypes.object.isRequired,
  navigation: React.PropTypes.object.isRequired,
};

export default graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
  withApollo(HomeScreen)
);
