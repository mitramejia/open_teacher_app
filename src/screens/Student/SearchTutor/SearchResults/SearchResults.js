// =============================================================
//
// Name: SearchResults
// -> Description:
//
// Author: mitramejia
// Created at: 8/28/17
//
// =============================================================

import React from 'react';
import PropTypes from 'prop-types';
import { Content } from 'native-base';
import { StyleSheet } from 'react-native';
import { colors } from '../../../../config/style';
import TutorCard from './TutorCard';
import { AppLoading } from 'expo';

class SearchResults extends React.Component {
  render() {
    return (
      <Content padder style={style.searchResultsContainer}>
        {this.props.tutors.map(tutor => <TutorCard key={tutor.id} tutor={tutor} />)}
      </Content>
    );
  }
}

const style = StyleSheet.create({
  searchResultsContainer: {
    color: colors.white,
  },
});

SearchResults.PropTypes = {
  tutors: PropTypes.object.isRequired,
};

export default SearchResults;
