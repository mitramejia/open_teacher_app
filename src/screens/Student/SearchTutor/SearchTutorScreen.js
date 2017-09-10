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
import _ from 'lodash';
import {
  Container,
  View,
  Content,
  Header,
  Form,
  Item,
  Input,
  Toast,
  Button,
  Icon,
  StyleProvider,
  connectStyle,
  Picker,
  Text,
  Label,
  CheckBox,
  Left,
  Body,
  Title,
  Right,
  H2,
  H3,
  Grid,
  Row,
  Col,
} from 'native-base';
import PropTypes from 'prop-types';
import local from './Form/style';
import strings from './Form/strings';
import common from '../../../config/style';
import SchedulePicker from './Form/SchedulePicker';
import SearchTutorForm from "./Form/SearchTutorForm";

class StudentHomeScreen extends React.Component {
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

  _toggleModal() {
    this._setModalVisible(!this.state.modalVisible);
  }

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  _onTimeChange(value) {
    this.setState({
      selectedTime: value,
    });
  }
  componentDidMount() {
    // console.log(this.refs.schedulePicker);
  }
  _handleSubmit() {
    //  extract the node list from the form
    //  it looks like an array, but lacks array methods
    // const { pet } = this.form;
    console.log('geello');
    // console.log(this.refs.schedulePicker);
    // console.log(this.props);
    // convert node list to an array
    // const checkboxArray = Array.prototype.slice.call(pet);
    //
    // // extract only the checked checkboxes
    // const checkedCheckboxes = checkboxArray.filter(input => input.checked);
    // console.log('checked array:', checkedCheckboxes);
    //
    // // use .map() to extract the value from each checked checkbox
    // const checkedCheckboxesValues = checkedCheckboxes.map(input => input.value);
    // console.log('checked array values:', checkedCheckboxesValues);
  }

  render() {
    return (
      <Content>
        <SearchTutorForm user={this.props.user} data={this.props.data} />
      </Content>
    );
  }
}

StudentHomeScreen.propTypes = {
  user: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};

export default StudentHomeScreen;
