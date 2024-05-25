import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import {Base, Button, IAgree, OrSignupWith, PhoneInput} from '../../components';
import {COLORS, SIZES} from '../../constants/theme';
import CheckBox from '@react-native-community/checkbox';

export default function Signup() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <Base padding={SIZES.height * 0.2}>
      <View>
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
  row: {
    width: SIZES.content,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
