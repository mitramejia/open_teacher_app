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
import images from '../config/images';
import settings from '../config/settings';

export async function loadAssets(ref) {
  try {
    await Promise.all([
      Asset.loadAsync([images.logo, images.appIcon, images.loadingIcon, images.notificationIcon]),
      Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      }),
    ]);
  } catch (error) {
    console.warn(settings.loadAssetsErrorMessage);
  } finally {
    ref.setState({ assetsAreLoaded: true });
  }
}
