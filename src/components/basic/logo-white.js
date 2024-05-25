import {View, StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../screens/constants/theme';
import images from '../../assets/images';

export default function LogoWhite() {
  return (
    <View>
      <Image source={images.logo} style={styles.logo} />
      <Text style={styles.tagline}>
        Where your chemistry is more than an algorithm
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: SIZES.width * 0.9,
    resizeMode: 'contain',
    height: 57,
  },
  tagline: {
    color: COLORS.white,
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
  },
});
