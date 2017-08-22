import React from 'react';
import { Alert, Image, View } from 'react-native';
import images from '../../config/images';
import strings from './Strings';
import styles from './StyleSheet';
import action from './Actions';

import { Button, Container, Content, Icon, Header, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';

class LoginScreen extends React.Component {
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
          <Image source={images.logo} style={styles.logo} />
        </View>
        <View>
          <Button rounded style={styles.facebookButton} onPress={action.logInWithFacebook(this)}>
            <Text>
              {strings.facebookButton}
            </Text>
          </Button>
        </View>
        <View>
          <Button
            style={styles.createAccountButton}
            rounded
            bordered
            onPress={action.createAccount(this)}>
            <Text>
              {strings.createAccountButton}
            </Text>
          </Button>
        </View>
        <Text style={styles.isTutorLink} onPress={action.toggleLink(this)}>
          {this.state.isTutor ? strings.im_student_link : strings.im_tutor_link}
        </Text>
      </Content>
    );
  }
}

// Export to Navigation
export default StackNavigator({
  Home: {
    screen: LoginScreen,
  },
});
