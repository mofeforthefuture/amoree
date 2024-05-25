import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {LandingPage} from './src/screens';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide(); //to ensure the javascript loads completely and avoid the brief white screen
  }, []);

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="LandingPage">
        <Screen name="LandingPage" component={LandingPage} />
      </Navigator>
    </NavigationContainer>
  );
}
