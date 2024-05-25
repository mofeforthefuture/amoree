import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';

import {Base, Button, IAgree, OrSignupWith, PhoneInput} from '../../components';
import {COLORS, SIZES} from '../../constants/theme';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

export default function Signup() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();
  return (
    <Base padding={SIZES.height * 0.2}>
      <Text style={styles.title}>sign up</Text>
      <PhoneInput />
      <View style={styles.row}>
        <CheckBox
          style={{
            marginVertical: 20,
            marginRight: 10,
            height: 20,
            width: 20,
            backgroundColor: COLORS.white,
          }}
          lineWidth={1}
          disabled={false}
          value={toggleCheckBox}
          boxType="square"
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <IAgree color={COLORS.black} />
      </View>
      <Button label={'Sign Up'} disabled />
      <OrSignupWith text={'Or sign up with'} />
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>
          Already have an account?{' '}
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.hyperLink]}>Log In!</Text>
          </Pressable>{' '}
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
