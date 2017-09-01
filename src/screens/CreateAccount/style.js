// =============================================================
//
// Name: StyleSheet
// -> Description: Login Screen StyleSheet
//
// Author: mitramejia
// Created at: 8/20/17
//
// =============================================================
import { StyleSheet } from 'react-native';
import { colors } from '../../config/style';

export default StyleSheet.create({
  container: {
    marginTop: 40,
  },
  inputField: {
    height: 50,
  },
  submitButton: {
    backgroundColor: colors.primary,
    width: 250,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  createAccountButton: {
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 280,
    resizeMode: 'contain',
    alignContent: 'center',
    marginTop: 3,
  },
  isTutorLink: {
    textDecorationLine: 'underline',
    marginTop: 40,
    color: colors.primary,
  },
});
