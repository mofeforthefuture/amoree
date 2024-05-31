import {Text, StyleSheet, Pressable, Linking} from 'react-native';
import React from 'react';
import {SIZES} from '../../constants/theme';

export default function Repository({item}) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => Linking.openURL(item.node.url)}>
      <Text style={styles.name}>{item?.node.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.9,
    resizeMode: 'contain',
    height: 57,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(113, 164, 245, 0.7)',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
});
