import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#1D374C',
  secondary: '#5090CD',
  tintColor: '#2f95dc',
  tabIconDefault: '#ccc',
  tabIconSelected: '#2f95dc',
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: '#2f95dc',
  noticeText: '#fff',
  white: '#FAFCFF',
  gray: '#617382',
  lightGray: '#ababab',
};

export default StyleSheet.create({
  statusBarUnderlay: {
    height: 34,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  inputIcon: {
    color: colors.secondary,
    fontSize: 28,
  },
  inputItem: {
    borderRadius: 12,
    paddingLeft: 24,
    height: 72,
    backgroundColor: colors.white,
    borderColor: colors.secondary,
    marginBottom: 24,
  },
  modalButtonText: {
    color: colors.lightGray,
    marginLeft: 14,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  heading: {
    fontWeight: '600',
    color: colors.primary,
  },
  checkBoxContainer: {
    height: 50,
  }
});
