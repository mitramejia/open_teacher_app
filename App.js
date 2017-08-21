require('react-devtools-core').connectToDevTools({
  port: 19001,
});
import React from 'react';
import Login from './screens/Login/Login';
import client from './graphql/GraphcoolConnection';
import strings from './constants/strings/global';
import { AppLoading, Asset, Font } from 'expo';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { Container } from 'native-base';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      assetsAreLoaded: false,
    };
  }

  render() {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    } else {
      return (
        <Container>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <ApolloProvider client={client} children={<Login />} />
        </Container>
      );
    }
  }

  async componentWillMount() {
    this._loadAssets();
  }

  async _loadAssets() {
    try {
      await Promise.all([
        Asset.loadAsync([require('./assets/images/logo.png')]),
        Font.loadAsync([
          // This is the font that we are using for our tab bar
          { Roboto: require('./assets/fonts/Roboto-Regular.ttf') },
          { Roboto_medium: require('./assets/fonts/Roboto-Medium.ttf') },
          { Roboto_bold: require('./assets/fonts/Roboto-Bold.ttf') },
        ]),
      ]);
    } catch (error) {
      console.warn(strings.loadAssetsErrorMessage);
      console.error(error);
    } finally {
      this.setState({ assetsAreLoaded: true });
    }
  }
}

const styles = StyleSheet.create({
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
