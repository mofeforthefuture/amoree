import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

export default function Link({text, color}) {
  return (
    <Pressable>
      <Text style={[styles.text, {color}]}>{text}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginVertical: 20,
  },
});
