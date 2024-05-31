import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

export default function Dashboard() {
  const params = useRoute().params;
  const {user} = JSON.parse(params.user);
  console.log(user.photo);
  return (
    <View>
      <SafeAreaView />
      <Image
        source={{uri: user.photo}}
        style={{width: 60, height: 60, borderRadius: 30}}
      />
      <Text>name: {user.name}</Text>
      <Text>name: {user.email}</Text>
    </View>
  );
}
