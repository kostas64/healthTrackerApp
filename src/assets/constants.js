import {Platform, Dimensions} from 'react-native';

import {DimUtils} from '../utils/DimensionUtils';

export const colors = {
  black: 'black',
  lightGrey: '#c5c4cd',
  purple: 'rgba(82,67,172,1)',
  lightPurple: '#7569be',
  veryLightPurple: '#dcd8ee',
  lightestPurple: 'rgb(243,242,249)',
  lightRed: 'rgb(236,145,148)',
  cyan: '#0fbefb',
  orange: '#ff8354',
};

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const S_SPACE = DimUtils.getDP(4);
export const M_SPACE = DimUtils.getDP(8);
export const L_SPACE = DimUtils.getDP(12);
export const XL_SPACE = DimUtils.getDP(16);

export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;
