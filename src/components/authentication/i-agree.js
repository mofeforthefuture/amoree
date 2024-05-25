import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

export default function IAgree({color}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color}]}>
        I agree with{' '}
        <Pressable>
          <Text style={[styles.hyperLink, {color}]}>Privacy Policy</Text>
        </Pressable>{' '}
        and{' '}
        <Pressable>
          <Text style={[styles.hyperLink, {color}]}>Terms of Use</Text>
        </Pressable>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  text: {
    fontSize: 14,
    alignSelf: 'center',
  },
  hyperLink: {
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
