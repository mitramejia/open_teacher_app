// =============================================================
//
// Name: Post
// -> Description:
//
// Author: mitramejia
// Created at: 8/13/17
//
// =============================================================
import React from 'react'
import {Text, View} from 'react-native'

class Posts extends React.Component {

  render() {
    return (
      <View>
        {this.props.posts.map(post => (
            <View key={post.id}>
              <Text>{post.description}</Text>
            </View>
          )
        )}
      </View>)
  }


}

export default Posts