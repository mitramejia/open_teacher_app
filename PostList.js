// =============================================================
//
// Name: PostList
// -> Description:
//
// Author: mitramejia
// Created at: 8/6/17
//
// =============================================================

import React from 'react';
import {Button, Text, View} from 'react-native';
import {compose, gql, graphql} from 'react-apollo';
import Faker from 'faker';
import Posts from './Posts';
// export default class App extends React.Component {
// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when ready
const allPosts = gql`
    query allPosts {
        allPosts {
            id
            description
            imageUrl
        }
    }
`;

const createPostMutation = gql`
    mutation createPostMutation($description: String!, $imageUrl: String!) {
        createPost(description: $description, imageUrl: $imageUrl) {
            id
            description
            imageUrl
        }
    }`;


const postsSubscription = gql`
    subscription {
        Post(filter: {mutation_in: [CREATED, UPDATED, DELETED]}) {
            node {
                id
                description
                imageUrl
                createdAt
            }
        }
    }
`;

class PostList extends React.Component {

  // static propTypes = {
  //   allPostsQuery: React.PropTypes.any.isRequired,
  // };

  state = {
    testDescription: Faker.lorem.sentence(),
    imageUrl: Faker.image.imageUrl()
  };


 async componentDidMount() {
    await this._subscribeToNewPosts(this)
  }

  _createPost = async () => {
    console.debug('Create test post: ', this.state.testDescription, this.props.createPostMutation);
    await this.props.createPostMutation({
      variables: {
        description: this.state.testDescription,
        imageUrl: this.state.imageUrl,
      }
    })
  };

  _subscribeToNewPosts = (componentRef) => {
    this.props.allPostsQuery.subscribeToMore({
      document: postsSubscription,
      updateQuery: (previousState, {subscriptionData}) => {
        const newPost = subscriptionData.data.Post.node;
        const posts = [newPost].concat(previousState.allPosts);
        return {
          allPosts: posts
        }
      },
      onError: (error) => {
        console.error('Chat - An error occured while being subscribed: ', error, 'Subscribe again');
        componentRef._subscribeToNewPosts(componentRef)
      }
    });
  };

  render() {
    if (this.props.allPostsQuery.loading) {
      return <Text>Loading</Text>;
    } else {
      return (
        <View>
          <Posts posts={this.props.allPostsQuery.allPosts}/>
          <Button title="Create Post" onPress={this._createPost}/>
        </View>
      );
    }
  }
}


// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList here)

export default compose(
  graphql(allPosts, {name: 'allPostsQuery'}),
  graphql(createPostMutation, {name: 'createPostMutation'}),
)(PostList)

