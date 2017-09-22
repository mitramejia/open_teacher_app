import React from 'react';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';
import { Button, Content } from 'native-base';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import SearchTutorScreen from '../Student/SearchTutor/SearchTutorScreen';
import LoginScreen from '../Login/LoginScreen';
import TutorHomeScreen from '../Tutor/Home/TutorHomeScreen';
import { StudentHomeScreenData } from '../../api/graphql/queries';

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

  render() {
    if (this.props.data.loading && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    } else {
      if (this.props.data.user) {
        if (this.props.data.user.isTutor) {
          return <TutorHomeScreen user={this.props.data.user} navigation={this.props.navigation} />;
        } else {
          return (
            <SearchTutorScreen
              user={this.props.data.user}
              subjects={this.props.data.allSubjects}
              tutors={this.props.data.allTutors}
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
  state: PropTypes.shape({
    user: PropTypes.any.isRequired,
  }),
  navigation: PropTypes.object.isRequired,
};

export default graphql(StudentHomeScreenData, { options: { fetchPolicy: 'network-only' } })(
  HomeScreen
);
