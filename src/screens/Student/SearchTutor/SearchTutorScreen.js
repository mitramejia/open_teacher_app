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
import { Content } from 'native-base';
import PropTypes from 'prop-types';
import SearchTutorForm from './Form/SearchTutorForm';
import SearchResults from './SearchResults/SearchResults';
import { graphql, withApollo } from 'react-apollo';
import { allTutors, userQuery } from '../../../api/graphql/queries';

class SearchTutorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tutors: this.props.tutors,
    };
  }

  static navigationOptions = {
    header: null,
  };

  _getTutors() {}

  render() {
    return (
      <Content>
        <SearchTutorForm user={this.props.user} subjects={this.props.subjects} />
        <SearchResults tutors={this.state.tutors} />
      </Content>
    );
  }
}

SearchTutorScreen.propTypes = {
  user: PropTypes.object.isRequired,
  subjects: PropTypes.object.isRequired,
  tutors: PropTypes.object.isRequired,
  state: PropTypes.shape({
    tutors: PropTypes.object.isRequired,
  }),
};

export default SearchTutorScreen;
