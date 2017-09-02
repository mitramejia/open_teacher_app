import React from 'react';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';
import { Button, Content } from 'native-base';
import { compose, graphql, withApollo } from 'react-apollo';
import propTypes from 'prop-types';
import StudentHomeScreen from '../Student/Home/StudentHomeScreen';
import LoginScreen from '../Login/LoginScreen';
import TutorHomeScreen from '../Tutor/Home/TutorHomeScreen';
import { currentUserAndAllSubjects } from '../../api/graphql/queries';

export class HomeScreen extends React.Component {
  state = {
    user: null,
  };

  static navigationOptions = {
    header: null,
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
    if (this.props.data.loading && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    } else {
      if (this._userIsLoggedIn()) {
        if (this._userIsTutor()) {
          return <TutorHomeScreen user={this.props.data.user} navigation={this.props.navigation} />;
        } else {
          return (
            <StudentHomeScreen
              user={this.props.data.user}
              data={this.props.data.allSubjects}
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
  navigation: React.PropTypes.object.isRequired,
};

export default graphql(currentUserAndAllSubjects, { options: { fetchPolicy: 'network-only' } })(
  HomeScreen
);
