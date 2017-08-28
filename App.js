import React from 'react';
import { AppLoading} from 'expo';
import { Platform, StatusBar, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { Container } from 'native-base';
import client from './src/api/graphql/GraphcoolConnection';
import { styles } from './src/config/style';
import RootNavigator from './src/navigation/RootNavigation';
import { loadAssets } from './src/assets/loadAssets';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      assetsAreLoaded: false,
      userIsLoggedIn: false,
    };
  }
  async componentWillMount() {
    loadAssets(this);
  }
  render() {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    } else {
      return (
        <Container>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <ApolloProvider client={client}>
            <RootNavigator />
          </ApolloProvider>
        </Container>
      );
    }
  }
}
