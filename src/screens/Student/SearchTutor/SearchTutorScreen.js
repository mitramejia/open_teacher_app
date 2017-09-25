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
import { graphql } from 'react-apollo';
import SearchTutorForm from './Form/SearchTutorForm';
import SearchResults from './SearchResults/SearchResults';
import { StudentHomeScreenData } from '../../../api/graphql/queries';

class SearchTutorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSelection: [],
      selectedSubject: '',
      modalVisible: false,
    };
  }
  static navigationOptions = {
    header: null,
  };
  _onSubjectChange(value) {
    this.setState({
      selectedSubject: value,
    });
  }
  _addTimeSelection(newTime) {
    let timeSelection = this.state.timeSelection;
    if (!timeSelection.includes(newTime)) {
      this.setState({ timeSelection: _.concat(timeSelection, newTime) });
    }
  }

  _removeTimeSelection(time) {
    let timeSelection = this.state.timeSelection;
    if (timeSelection.size === 1) {
      this.setState({ timeSelection: [] });
    } else if (timeSelection.includes(time)) {
      const newTimeSelection = timeSelection.filter(function(item) {
        return item !== time;
      });
      this.setState({ timeSelection: newTimeSelection });
    }
  }
  render() {
    return (
      <Content>
        <SearchTutorForm
          user={this.props.user}
          subjects={this.props.data.allSubjects}
          onSubjectChange={this._onSubjectChange.bind(this)}
          addTimeSelection={this._addTimeSelection.bind(this)}
          removeTimeSelection={this._removeTimeSelection.bind(this)}
        />
        <SearchResults tutors={this.props.data.allTutors} />
      </Content>
    );
  }
}

SearchTutorScreen.propTypes = {
  user: PropTypes.object.isRequired,
  subjects: PropTypes.array.isRequired,
  tutors: PropTypes.array.isRequired,
};

export default graphql(StudentHomeScreenData, { options: { fetchPolicy: 'network-only' } })(
  SearchTutorScreen
);
