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
import { Colors } from '../../config/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookButton: {
    backgroundColor: Colors.primary,
    marginBottom: 20,
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
    textDecorationLine: `underline`,
    marginTop: 40,
    color: Colors.primary,
  },
});
