import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SIZES = {
  content: width * 0.9,
  width,
  height,
};

export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  disabled: '#717171',
  gradient: ['rgba(0,0,0, 0.7)', 'rgba(255,255,255, 0)', 'rgba(0,0,0,0.8)'],
};
