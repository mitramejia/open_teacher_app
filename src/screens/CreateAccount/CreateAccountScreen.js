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
import { AppLoading } from 'expo';
import { Content, Button, Text, Item, Toast } from 'native-base';
import { Keyboard, TextInput, AsyncStorage } from 'react-native';
import { compose, gql, graphql, withApollo } from 'react-apollo';
import _ from 'lodash';
import propTypes from 'prop-types';
import {
  Form,
  Separator,
  InputField,
  LinkField,
  SwitchField,
  PickerField,
  DatePickerField,
  TimePickerField,
} from 'react-native-form-generator';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import style from './style';
import { createAccount, signinUser, userQuery } from '../../api/graphql/queries';

class CreateAccountScreen extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      showToast: false,
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      formError: true,
    };
  }

  static navigationOptions = {
    title: 'Crear Cuenta',
  };

  _handleFormChange(formData) {
    this.setState({ formData });
    this.props.onFormChange && this.props.onFormChange(formData);
  }

  _createAccount() {
    const { firstName, lastName, email, password } = this.state.formData;
    this.props
      .createAccount({ variables: { firstName, lastName, email, password } })
      .then(response => {
        console.log(response);
        this.props
          .signinUser({ variables: { email, password } })
          .then(response => {
            console.log(response);
            AsyncStorage.setItem('token', response.data.signinUser.token);
            this.props.navigation.navigate('Home');
            Toast.show({
              text: `Hola ${firstName}`,
              position: 'bottom',
              buttonText: 'Ocultar',
              type: 'success',
              duration: 4000,
            });
          })
          .catch(e => {
            console.error(e.message);
            this.props.navigation.navigate('Home');
          });
      })
      .catch(e => {
        console.error(e.message);
        this.props.navigation.navigate('Home');
      });
    console.log('User: ' + this.props.data.user);
  }

  _checkAllFieldsAreValid() {
    return _.every(this.state.formData, value => {
      // Check all form fields aren't empty or undefined
      if (value !== '' || value !== undefined) {
        return true;
      }
    });
  }

  render() {
    if (this.props.data.loading) {
      return <AppLoading />;
    } else {
      return (
        <KeyboardAwareScrollView
          contentContainerStyle={style.container}
          keyboardShouldPersistTaps="always"
          ref="scroll">
          <Form
            ref="registrationForm"
            onChange={this._handleFormChange.bind(this)}
            label="Create Account">
            <InputField style={style.inputField} ref="firstName" label="Nombre" />
            <InputField style={style.inputField} ref="lastName" label="Apellido" />
            <InputField
              style={style.inputField}
              ref="email"
              label="Email"
              keyboardType="email-address"
            />
            <InputField
              style={style.inputField}
              ref="password"
              label="Contraseña"
              secureTextEntry={true}
            />
          </Form>
          {this._checkAllFieldsAreValid() &&
            <Button
              rounded
              block
              style={style.submitButton}
              onPress={this._createAccount.bind(this)}>
              <Text>Crear Cuenta</Text>
            </Button>}
          <Text>
            {JSON.stringify(this.state.formData)}
          </Text>
        </KeyboardAwareScrollView>
      );
    }
  }
}

CreateAccountScreen.propTypes = {
  client: React.PropTypes.object.isRequired,
  navigation: React.PropTypes.object.isRequired,
  createAccount: React.PropTypes.func.isRequired,
  signinUser: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired,
};

export default graphql(createAccount, { name: 'createAccount' })(
  graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
    graphql(signinUser, { name: 'signinUser' })(withApollo(CreateAccountScreen))
  )
);
