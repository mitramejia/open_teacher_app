import React from 'react';
import {Text, View} from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when ready
function PostList({data: {loading, allPosts}}) {
  if (loading) {
    return <Text>Loading</Text>;
  } else {
    return (
      <View>
        {allPosts.map(post => (
          <View key={post.id}>
            <Text>{post.description}</Text>
          </View>
        ))}
      </View>
    );
  }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList here)
export default graphql(gql`
  query allPosts {
    allPosts {
      id
      description
      imageUrl
    }
  }
`)(PostList);// =============================================================
//
// Name: PostList
// -> Description: 
//
// Author: mitramejia 
// Created at: 8/6/17
//
// =============================================================