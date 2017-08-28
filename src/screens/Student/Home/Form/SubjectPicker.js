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
import { allSubjectsQuery } from '../../../../api/graphql/queries';
import { Item, Picker } from 'native-base';

class SubjectPicker extends React.Component {
  constructor(...props) {
    super(props);
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
    return (
      <Picker
        mode="dropdown"
        placeholder="Select One"
        selectedValue={this.state.selectedOption}
        onValueChange={this._onValueChange.bind(this)}>
        <Item label="Wallet" value="key0" />
        <Item label="ATM Card" value="key1" />
        <Item label="Debit Card" value="key2" />
        <Item label="Credit Card" value="key3" />
        <Item label="Net Banking" value="key4" />
      </Picker>
    );
  }
}

export default graphql(allSubjectsQuery)(withApollo(SubjectPicker));
