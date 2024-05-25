import {View, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

import {COLORS, SIZES} from '../../screens/constants/theme';
import LinearGradient from 'react-native-linear-gradient';

export default function Base({children, padding}) {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={[styles.innerContainer, {paddingTop: padding || 0}]}
        colors={COLORS.gradientBase}>
        <SafeAreaView />
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
