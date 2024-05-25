import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SIZES = {
  content: width * 0.9,
  width,
  height,
};

const appTheme = {SIZES};

export default appTheme;
