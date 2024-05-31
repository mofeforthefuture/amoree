import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import {
  CountryList,
  Dashboard,
  LandingPage,
  Login,
  Signup,
} from './src/screens';

const {Navigator, Screen, Group} = createNativeStackNavigator();

const cache = new InMemoryCache();

export default function App() {
  useEffect(() => {
    SplashScreen.hide(); //to ensure the javascript loads completely and avoid the brief white screen
  }, []);

  const authHeader = process.env.GITHUB_ACCESS_TOKEN
    ? {Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`}
    : {};
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache,
    headers: authHeader,
  });

  const config = {
    screens: {
      Login: 'login',
      Signup: 'register',
      Dashboard: 'home',
    },
  };
  const linking = {
    prefixes: ['amorevista://'],
    config,
  };

  return (
    <ApolloProvider client={client}>
      <NavigationContainer linking={linking}>
        <Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="LandingPage">
          <Screen name="LandingPage" component={LandingPage} />
          <Screen name="Login" component={Login} />
          <Screen name="Signup" component={Signup} />
          <Screen name="Dashboard" component={Dashboard} />
          <Group screenOptions={{presentation: 'modal'}}>
            <Screen name="CountryList" component={CountryList} />
          </Group>
        </Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
