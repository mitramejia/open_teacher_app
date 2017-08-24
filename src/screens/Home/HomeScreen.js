import React from 'react';
import { Button, Text, Content } from 'native-base';
import { ApolloProvider, compose, gql, graphql, withApollo } from 'react-apollo';
import StudentHomeScreen from '../Student/Home/StudentHomeScreen';
import LoginScreen from '../Login/LoginScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <StudentHomeScreen
        client={this.props.client}
        // user={this.props.data.user}
        navigation={this.props.navigation}
      />
    );
  }
}

const userQuery = gql`
  query {
    user {
      id
      firstName
      lastName
      email
      birthdate
    }
  }
`;

export default graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
  withApollo(HomeScreen)
);
