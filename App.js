import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {CountryList, LandingPage, Login, Signup} from './src/screens';
import useInitialURL from './src/hooks/useInitialURL';

const {Navigator, Screen, Group} = createNativeStackNavigator();

export default function App() {
  const {url: initialUrl, processing} = useInitialURL();
  console.log('====================================');
  console.log(initialUrl, processing);
  console.log('====================================');
  useEffect(() => {
    SplashScreen.hide(); //to ensure the javascript loads completely and avoid the brief white screen
  }, []);

  return (
    <NavigationContainer>
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
