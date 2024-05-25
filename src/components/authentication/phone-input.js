import {
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  Text,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS, SIZES} from '../../screens/constants/theme';
import icons from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';

const FLAG_CDN_URL = 'https://flagcdn.com/w80/';
const FORMAT = '.png';

export default function PhoneInputComp() {
  const [value, setValue] = useState({
    Code: 'NG',
    MobileCode: '+234',
    Name: 'Nigeria',
    Timezone: 'W. Central Africa Standard Time',
    UTC: 'UTC+01:00',
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          navigation.navigate('CountryList', {
            onGoBack: data => {
              setValue(data);
            },
          })
        }
        style={styles.flagContainer}>
        <Image
          style={styles.flag}
          source={{uri: FLAG_CDN_URL + value.Code.toLocaleLowerCase() + FORMAT}}
        />
        <Text>{value.MobileCode}</Text>
        <Image source={icons.carretDown} style={styles.carretDown} />
      </Pressable>
      <TextInput
        style={styles.inputContainer}
        placeholderTextColor={COLORS.placeholder}
        placeholder="Phone Number"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.white,
    height: 59,
    marginTop: 20,
    borderRadius: 8,
    flexDirection: 'row',
  },
  flagContainer: {
    width: SIZES.width * 0.3,
    backgroundColor: COLORS.white,
    height: 59,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    width: SIZES.width * 0.6,
    backgroundColor: COLORS.white,
    height: 59,
    borderRadius: 4,
    paddingLeft: 20,
    fontSize: 16,
  },
  title: {
    textTransform: 'capitalize',
    fontSize: 48,
    fontWeight: '700',
  },
  carretDown: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  flag: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.black,
  },
});
