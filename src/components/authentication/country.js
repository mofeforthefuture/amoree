import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants/theme';

const FLAG_CDN_URL = 'https://flagcdn.com/w80/';
const FORMAT = '.png';

export default function Country({item, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <Image
        style={styles.flag}
        source={{uri: FLAG_CDN_URL + item.Code.toLocaleLowerCase() + FORMAT}}
      />
      <Text style={styles.text}>
        {item.Name}({item.MobileCode})
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.9,
    height: 50,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {color: COLORS.black, fontWeight: '400', fontSize: 14},
  flag: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 10,
  },
});
