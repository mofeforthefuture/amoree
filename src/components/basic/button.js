import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../screens/constants/theme';

export default function Button({label, disabled, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) =>
        pressed || disabled ? styles.pressedContainer : styles.container
      }
      disabled={disabled}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.black,
    height: 56,
    alignSelf: 'center',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressedContainer: {
    width: SIZES.width * 0.9,
    height: 56,
    alignSelf: 'center',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.disabled,
  },
  label: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 16,
    textTransform: 'capitalize',
  },
});
