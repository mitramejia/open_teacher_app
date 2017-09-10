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
import { colors } from '../../../../config/style';

export default StyleSheet.create({
  formContainer: {
    backgroundColor: colors.primary,
    paddingTop: 44,
  },
  userIcon: {
    alignSelf: 'flex-end',
    color: colors.secondary,
    fontSize: 40,
    marginBottom: 20,
  },
});
