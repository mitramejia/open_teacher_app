// =============================================================
//
// Name: StudentHomeScreen
// -> Description:
//
// Author: mitramejia
// Created at: 8/21/17
//
// =============================================================

import React from 'react';
import { Container, Content, Header, Form, Item, Input, Toast, Button } from 'native-base';
import PropTypes from 'prop-types';
import style from './style';
import TutorSearchForm from './Form/TutorSearchForm';
import { allSubjectsQuery } from '../../../api/graphql/queries';
import { graphql, withApollo } from 'react-apollo';
import { AppLoading } from 'expo';

class StudentHomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    if (this.props.allSubjectsQuery.loading) {
      return <AppLoading />;
    } else {
      return (
        <Content contentContainerStyle={style.container}>
          <TutorSearchForm subjects={this.props.allSubjectsQuery.allSubjects} />
        </Content>
      );
    }
  }
}

StudentHomeScreen.propTypes = {
  client: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired,
  allSubjectsQuery: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    allSubjects: PropTypes.array,
  }).isRequired,
};

export default graphql(allSubjectsQuery, { name: 'allSubjectsQuery' })(
  withApollo(StudentHomeScreen)
);
