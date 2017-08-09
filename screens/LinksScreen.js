import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PostList from '../PostList'
import ApolloProvider from 'react-apollo'
// import client from '../constants/GraphqlConnection'
export default class LinksScreen extends React.Component {
  // super(props);
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
         {/*<ApolloProvider>*/}
           {/*<PostList/>*/}
         {/*</ApolloProvider>*/}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#eee',
  },
});
