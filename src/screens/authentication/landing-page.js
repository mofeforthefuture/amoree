import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import images from '../../assets/images';
import {SIZES, COLORS} from '../constants/theme';
import {LogoWhite} from '../../components';

export default function LandingPage() {
  return (
    <ImageBackground
      style={styles.image}
      source={images.landing}
      resizeMode="contain">
      <LinearGradient style={styles.innerContainer} colors={COLORS.gradient}>
        <LogoWhite />
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: SIZES.width,
    height: SIZES.height,
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    paddingTop: SIZES.height * 0.2,
    alignItems: 'center',
  },
});
