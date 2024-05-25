import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

import {Base, Button, OrSignupWith, PhoneInput} from '../../components';
import {SIZES} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  return (
    <Base padding={SIZES.height * 0.2}>
      <Text style={styles.title}>Log in</Text>
      <PhoneInput />
      <Button style={{marginTop: 30}} label={'Log In'} disabled />
      <OrSignupWith text={'Or Log in with'} />
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>
          Don’t have an account yet?{' '}
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text style={[styles.hyperLink]}>Create account!</Text>
          </Pressable>
        </Text>
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
    marginBottom: 20,
  },
  row: {
    width: SIZES.content,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bottomContainer: {
    height: SIZES.height * 0.1,
    width: SIZES.width,
    position: 'absolute',
    bottom: 0, // Set bottom to 0
    alignSelf: 'baseline',
  },
  text: {
    fontSize: 16,
    alignSelf: 'center',
  },
  hyperLink: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
