// =============================================================
//
// Name: loadAssets
// -> Description:
//
// Author: mitramejia
// Created at: 8/28/17
//
// =============================================================

import { Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import images from '../config/images';
import fonts from '../config/fonts';
import settings from '../config/settings';

export async function loadAssets(ref) {
  try {
    await Promise.all([
      Asset.loadAsync([images.logo, images.appIcon, images.loadingIcon, images.notificationIcon]),
      Font.loadAsync([
        // This is the font that we are using for our tab bar
        Ionicons.font,
        { Roboto_regular: fonts.robotoRegular },
        { Roboto_nedium: fonts.robotoMedium },
        { Roboto_bold: fonts.robotoBold },
      ]),
    ]);
  } catch (error) {
    console.warn(settings.loadAssetsErrorMessage);
    console.error('Assets Error:' + error);
  } finally {
    ref.setState({ assetsAreLoaded: true });
  }
}
