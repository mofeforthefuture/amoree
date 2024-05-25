import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import images from '../../assets/images';
import {SIZES} from '../constants/theme';

export default function LandingPage() {
  return (
    <ImageBackground
      style={styles.image}
      source={images.landing}
      resizeMode="contain">
      <View style={styles.innerContainer}></View>
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
    backgroundColor: 'rgba(0,0,0, 0.2)',
    paddingTop: SIZES.height * 0.3,
  },
});
