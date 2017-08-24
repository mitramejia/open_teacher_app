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
import { Content, Button, Text, Item } from 'native-base';
import { Keyboard, TextInput } from 'react-native';
import { compose, gql, graphql } from 'react-apollo';
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import style from './style';

const createAccountMutation = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $birthday: DateTime!
    $password: String!
  ) {
    createUser(
      authProvider: { email: { email: $email, password: $password } }
      firstName: $firstName
      lastName: $lastName
      email: $email
      birthday: $birthday
    ) {
      id
      firstName
      lastName
      email
      birthday
      password
    }
  }
`;

class CreateAccountScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
    };
  }

  static navigationOptions = {
    title: 'CREAR CUENTA',
  };

  handleFormChange(formData) {
    /*
    formData will contain all the values of the form,
    in this example.
    */

    this.setState({ formData });
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(event, reactNode) {
    this.refs.scroll.scrollToFocusedInput(event, reactNode);
  }

  async _createAccount() {
    const { firstName, lastName, email, birthday, password } = this.state.formData;
    await this.props.createAccountMutation({
      variables: { firstName, lastName, email, birthday, password },
    });
    this.props.onComplete();
  }

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={style.container}
        keyboardShouldPersistTaps="always"
        onKeyboardWillShow={(frames: Object) => {
          console.log('Keyboard event', frames);
        }}
        ref="scroll">
        <Form
          ref="registrationForm"
          onFocus={this.handleFormFocus.bind(this)}
          onChange={this.handleFormChange.bind(this)}
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
          <DatePickerField
            ref="birthday"
            minimumDate={new Date('1/1/1900')}
            maximumDate={new Date()}
            placeholder="Cumpleaños"
          />
        </Form>
        <Button
          disabled
          rounded
          block
          style={style.submitButton}
          onPress={this._createAccount.bind(this)}>
          <Text>Crear Cuenta</Text>
        </Button>
        <Text>
          {JSON.stringify(this.state.formData)}
        </Text>
      </KeyboardAwareScrollView>
    );
  }
}

const CreateAccount = graphql(createAccountMutation, { name: 'createAccountMutation' })(
  CreateAccountScreen
);
export default CreateAccount;
