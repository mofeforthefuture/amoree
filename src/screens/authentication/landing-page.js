import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import images from '../../assets/images';
import {SIZES, COLORS} from '../../constants/theme';
import {Button, IAgree, Link, LogoWhite} from '../../components';

export default function LandingPage() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.image}
      source={images.landing}
      resizeMode="contain">
      <LinearGradient style={styles.innerContainer} colors={COLORS.gradient}>
        <LogoWhite />
        <View style={styles.bottomContainer}>
          <IAgree color={COLORS.white} />
          <Button
            label={'Create account'}
            onPress={() => navigation.navigate('Signup')}
          />
          <Link text={'Log In'} color={COLORS.white} />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: SIZES.width,
    height: SIZES.height,
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    paddingTop: SIZES.height * 0.2,
    alignItems: 'center',
  },
  bottomContainer: {
    height: SIZES.height * 0.25,
    width: SIZES.width,
    position: 'absolute',
    bottom: 0, // Set bottom to 0
    alignSelf: 'baseline',
  },
});
