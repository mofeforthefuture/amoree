import {View, Text, SafeAreaView, Image, FlatList} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {GET_REPOSITORIES} from '../../apis/graphqlQueries';
import {Loader, Repository} from '../../components';

export default function Dashboard() {
  const params = useRoute().params;
  const {user} = JSON.parse(params.user);

  const {loading, error, data} = useQuery(GET_REPOSITORIES, {
    variables: {
      owner: 'mofeforthefuture',
      name: 'cityrefill-client',
    },
  });

  const DATA = data.viewer.repositories.edges;
  return (
    <View>
      <SafeAreaView />
      <Image
        source={{uri: user.photo}}
        style={{width: 60, height: 60, borderRadius: 30}}
      />
      <Text>name: {user.name}</Text>
      <Text>name: {user.email}</Text>

      <Loader loading={loading} />

      <FlatList
        data={DATA}
        renderItem={({item, index}) => <Repository item={item} key={index} />}
      />
    </View>
  );
}
