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
} from 'native-base';
import PropTypes from 'prop-types';
import local from './style';
import strings from './strings';
import common from '../../../../config/style';
import SchedulePicker from './SchedulePicker';

class SearchTutorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  static navigationOptions = {
    header: null,
  };

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

  render() {
    return (
      <Content padder style={local.formContainer}>
        <Form>
          <Icon style={local.userIcon} name="ios-contact-outline" />
          <Item style={common.inputItem} regular>
            <Icon name="ios-book-outline" style={common.inputIcon} />
            <Picker
              mode="dropdown"
              placeholder={strings.subjectInputField}
              iosHeader="Materias"
              headerBackButtonText="Atras"
              selectedValue={this.props.selectedSubject}
              onValueChange={this.props.onSubjectChange.bind(this)}>
              {this.props.subjects.map(subject =>
                <Item label={subject.name} value={subject.name} key={subject.id} />
              )}
            </Picker>
          </Item>

          <Item regular last style={common.inputItem}>
            <Icon name="ios-calendar-outline" style={common.inputIcon} />
            <Text style={common.modalButtonText} onPress={() => this._setModalVisible(true)}>
              {strings.timeInputField}
            </Text>
            <SchedulePicker
              addTimeSelection={this.props.addTimeSelection.bind(this)}
              removeTimeSelection={this.props.removeTimeSelection.bind(this)}
              toggleModal={this._toggleModal.bind(this)}
              handleSubmit={this._toggleModal.bind(this)}
              visible={this.state.modalVisible}
            />
          </Item>
        </Form>
      </Content>
    );
  }
}

SearchTutorForm.propTypes = {
  user: PropTypes.object.isRequired,
  subjects: PropTypes.array.isRequired,
};

export default SearchTutorForm;
