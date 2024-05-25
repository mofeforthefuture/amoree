import {View, StyleSheet} from 'react-native';
import React from 'react';

import {COLORS, SIZES} from '../../screens/constants/theme';
import LinearGradient from 'react-native-linear-gradient';

export default function Base({children}) {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.innerContainer}
        colors={COLORS.gradientBase}>
        {children}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.base,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
