// =============================================================
//
// Name: OptionPicker
// -> Description:
//
// Author: mitramejia
// Created at: 8/28/17
//
// =============================================================
import React from 'react';
import { graphql, withApollo } from 'react-apollo';
import PropTypes from 'prop-types';
import { allSubjectsQuery } from '../api/graphql/queries';
import { Content, Icon, Item, Picker } from 'native-base';
import { AppLoading } from 'expo';
import style from '../screens/Student/Home/style';
import { colors } from '../config/style';

class OptionPicker extends React.Component {
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
    return (
      <Content>
        <Item style={style.inputField} regular>
          <Icon name={this.props.icon} size={44} color={colors.secondary} />
          <Picker
            mode="dropdown"
            placeholder={this.props.name}
            iosHeader={this.props.name}
            headerBackButtonText="Atras"
            selectedValue={this.state.selectedOption}
            onValueChange={this._onValueChange.bind(this)}>
            {this.props.data.map(option =>
              <Item label={option.name} value={option.name} key={option.id} />
            )}
          </Picker>
        </Item>
      </Content>
    );
  }
}

OptionPicker.propTypes = {
  data: React.PropTypes.array.isRequired,
  name: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
};

export default OptionPicker;
