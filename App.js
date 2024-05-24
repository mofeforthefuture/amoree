import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide(); //to ensure the javascript loads completely and avoid the brief white screen
  }, []);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
