// =============================================================
//
// Name: TimeCheckBox
// -> Description:
//
// Author: mitramejia
// Created at: 9/6/17
//
// =============================================================

import React from 'react';
import PropTypes from 'prop-types';
import { Button, CheckBox, Row, View } from 'native-base';
import style from '../../../../config/style';

class TimeCheckBox extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      isChecked: false,
    };
  }
  _handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
    if (this.state.isChecked === false) {
      this.props.addTimeSelection(this.props.value);
    } else {
      this.props.removeTimeSelection(this.props.value);
    }
  }

  render() {
    return (
      <Row>
        <View style={style.checkBoxContainer}>
          <CheckBox checked={this.state.isChecked} onPress={this._handleChecked.bind(this)} />
        </View>
      </Row>
    );
  }
}

TimeCheckBox.propTypes = {
  state: PropTypes.shape({
    isChecked: PropTypes.bool,
  }),
  value: PropTypes.string.isRequired,
  addTimeSelection: PropTypes.func.isRequired,
  removeTimeSelection: PropTypes.func.isRequired,
};

export default TimeCheckBox;
