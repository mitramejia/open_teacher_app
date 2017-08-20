require('react-devtools-core').connectToDevTools({
  port: 19001
});
import React from 'react'
import {Platform, StatusBar, StyleSheet, View} from 'react-native'
import {AppLoading, Asset, Font} from 'expo'
import {Ionicons} from '@expo/vector-icons'
import RootNavigation from './navigation/RootNavigation'
import {ApolloProvider} from 'react-apollo'
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {addGraphQLSubscriptions, SubscriptionClient} from 'subscriptions-transport-ws'
import {GRAPHQL_SIMPLE_API_URL, WEB_SOCKET_CLIENT_URL} from 'react-native-dotenv'
import PostList from './PostList';

console.log(GRAPHQL_SIMPLE_API_URL);
console.log(WEB_SOCKET_CLIENT_URL );

const networkInterface = createNetworkInterface({uri: GRAPHQL_SIMPLE_API_URL});
// Create WebSocket client
const wsClient = new SubscriptionClient(WEB_SOCKET_CLIENT_URL, {
  reconnect: true,
});
// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  dataIdFromObject: o => o.id
});

export default class App extends React.Component {
  state = {
    assetsAreLoaded: false,
  };

  constructor(...args) {
    super(...args);
  };

  componentWillMount() {
    this._loadAssetsAsync();
  };


  render() {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading/>;
    } else {
      return (
        <ApolloProvider client={client}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
            {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay}/>}

            <RootNavigation/>
            <View>
              <PostList/>
            </View>
          </View>
        </ApolloProvider>
      );
    }
  }


  async _loadAssetsAsync() {
    try {
      await Promise.all([
        Asset.loadAsync([
          require('./assets/images/robot-dev.png'),
          require('./assets/images/robot-prod.png'),
        ]),
        Font.loadAsync([
          // This is the font that we are using for our tab bar
          Ionicons.font,
          // We include SpaceMono because we use it in HomeScreen.js. Feel free
          // to remove this if you are not using it in your app
          {'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')},
        ]),
      ]);
    } catch (e) {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(
        'There was an error caching assets (see: App.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e);
    } finally {
      this.setState({assetsAreLoaded: true});
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
