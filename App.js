import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {CountryList, LandingPage, Login, Signup} from './src/screens';

const {Navigator, Screen, Group} = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide(); //to ensure the javascript loads completely and avoid the brief white screen
  }, []);

  const config = {
    screens: {
      Login: 'login',
      Signup: 'register',
    },
  };
  const linking = {
    prefixes: ['amorevista://'],
    config,
  };

  return (
    <NavigationContainer linking={linking}>
      <Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="LandingPage">
        <Screen name="LandingPage" component={LandingPage} />
        <Screen name="Login" component={Login} />
        <Screen name="Signup" component={Signup} />
        <Group screenOptions={{presentation: 'modal'}}>
          <Screen name="CountryList" component={CountryList} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
}
