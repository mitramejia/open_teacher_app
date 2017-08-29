// =============================================================
//
// Name: SubjectPicker
// -> Description:
//
// Author: mitramejia
// Created at: 8/28/17
//
// =============================================================
import React from 'react';
import { graphql, withApollo } from 'react-apollo';
import PropTypes from 'prop-types';
import { allSubjectsQuery } from '../../../../api/graphql/queries';
import { Content, Icon, Item, Picker } from 'native-base';
import { AppLoading } from 'expo';
import style from '../style';
import { colors } from '../../../../config/style';

class SubjectPicker extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      selectedOption: undefined,
    };
  }
  _onValueChange(value) {
    this.setState({
      selectedOption: value,
    });
  }
  render() {
    if (this.props.allSubjectsQuery.loading) {
      return <AppLoading />;
    } else {
      return (
        <Content>
          <Item style={style.inputField} regular>
            <Icon
              name="ios-book-outline"
              size={44}
              color={colors.secondary}
            />
            <Picker
              mode="dropdown"
              placeholder="Materias"
              iosHeader="Materias"
              headerBackButtonText="Atras"
              selectedValue={this.state.selectedOption}
              onValueChange={this._onValueChange.bind(this)}>
              {this.props.allSubjectsQuery.allSubjects.map(subject =>
                <Item label={subject.name} value={subject.name} key={subject.id} />
              )}
            </Picker>
          </Item>
        </Content>
      );
    }
  }
}
SubjectPicker.propTypes = {
  allSubjectsQuery: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    allSubjects: PropTypes.array,
  }).isRequired,
};

export default graphql(allSubjectsQuery, { name: 'allSubjectsQuery' })(withApollo(SubjectPicker));
