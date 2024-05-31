import {View, Text, StyleSheet, Image, Pressable, Linking} from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {COLORS, SIZES} from '../../constants/theme';
import icons from '../../assets/icons';

const googleAuth = () => {
  GoogleSignin.configure({
    androidClientId: 'ADD_YOUR_ANDROID_CLIENT_ID_HERE',
    iosClientId: process.env.OAUTH_IOS_CLIENT_ID,
  });
  GoogleSignin.hasPlayServices()
    .then(hasPlayService => {
      if (hasPlayService) {
        GoogleSignin.signIn()
          .then(userInfo => {
            console.log(JSON.stringify(userInfo));
            Linking.openURL(
              `amorevista://home?user=${JSON.stringify(userInfo)}`,
            );
          })
          .catch(e => {
            console.log('ERROR IS: ' + JSON.stringify(e));
          });
      }
    })
    .catch(e => {
      console.log('ERROR IS: ' + JSON.stringify(e));
    });
};

export default function OrSignupWith({text}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.line} />
        <Text style={styles.text}>{text}</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.row}>
        <View style={styles.actionButton}>
          <Image source={icons.fb} style={styles.actionIcon} />
        </View>
        <Pressable style={styles.actionButton} onPress={googleAuth}>
          <Image source={icons.apple} style={styles.actionIcon} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  row: {
    width: SIZES.content,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    width: SIZES.content * 0.35,
    height: 1,
    backgroundColor: COLORS.disabled,
  },
  text: {color: COLORS.disabled, fontWeight: '400', fontSize: 12},
  actionButton: {
    width: SIZES.content * 0.48,
    height: 59,
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    width: 32,
    height: 32,
  },
});
