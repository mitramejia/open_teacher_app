import React from 'react';
import { AppLoading, Asset, Font } from 'expo';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { Container } from 'native-base';
import client from './src/api/graphql/GraphcoolConnection';
import strings from './src/config/setting';
import fonts from './src/config/fonts';
import { style } from "./src/config/style";
import RootNavigator from './src/navigation/RootNavigation';
import images from './src/config/images';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      assetsAreLoaded: false,
      userIsLoggedIn: false,
    };
  }

  render() {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    } else {
      return (
        <Container>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={style.statusBarUnderlay} />}
          <ApolloProvider client={client}>
            <RootNavigator />
          </ApolloProvider>
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
        Asset.loadAsync([images.logo]),
        Font.loadAsync([
          // This is the font that we are using for our tab bar
          { RobotoRegular: fonts.robotoRegular },
          { RobotoMedium: fonts.robotoMedium },
          { RobotoBold: fonts.robotoBold },
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
    height: 34,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
