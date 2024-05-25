import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {Base, PhoneInput} from '../../components';
import {SIZES} from '../constants/theme';

export default function Signup() {
  return (
    <Base padding={SIZES.height * 0.2}>
      <View>
        <Text style={styles.title}>sign up</Text>
        <PhoneInput />
      </View>
    </Base>
  );
}

const styles = StyleSheet.create({
  title: {
    textTransform: 'capitalize',
    fontSize: 48,
    fontWeight: '700',
    alignSelf: 'center',
  },
});
