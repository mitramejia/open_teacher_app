// =============================================================
//
// Name: StyleSheet
// -> Description:
//
// Author: mitramejia
// Created at: 8/21/17
//
// =============================================================

import { StyleSheet } from 'react-native';
import { colors } from '../../../config/style';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
  },
  formContainer: {
    backgroundColor: colors.primary,
    paddingBottom: 30,
    paddingTop: 24,
  },
  inputField: {
    borderRadius: 12,
    paddingLeft: 24,
    height: 72,
    backgroundColor: colors.white,
    borderColor: colors.secondary,
    marginBottom: 24,
  },
  userIcon: {
    alignSelf: 'flex-end',
  },
});
