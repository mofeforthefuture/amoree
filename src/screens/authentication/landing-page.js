import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import images from '../../assets/images';
import {SIZES, COLORS} from '../constants/theme';

export default function LandingPage() {
  return (
    <ImageBackground
      style={styles.image}
      source={images.landing}
      resizeMode="contain">
      <LinearGradient
        style={styles.innerContainer}
        colors={COLORS.gradient}></LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: SIZES.width,
    height: SIZES.height,
    justifyContent: 'center',
  },
  container: {
    width: SIZES.width * 0.8,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: SIZES.height * 0.3,
  },
  innerContainer: {
    flex: 1,
  },
});
