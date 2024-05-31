import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_REPOSITORIES} from '../../apis/graphqlQueries';
import {Loader, Repository} from '../../components';
import {useRoute} from '@react-navigation/native';

export default function Dashboard() {
  const params = useRoute().params;
  const {user} = JSON.parse(params.user);

  const {data, loading, error, refetch} = useQuery(GET_REPOSITORIES, {
    variables: {owner: 'mofeforthefuture', name: 'cityrefill-client'},
  });

  const repositories = data?.viewer?.repositories?.edges || [];

  return (
    <View style={{alignItems: 'center'}}>
      <SafeAreaView />
      <Image
        source={{uri: user?.photo}}
        style={{width: 60, height: 60, borderRadius: 30}}
      />
      <Text style={{marginVertical: 20}}>name: {user?.name}</Text>
      <Text>email: {user?.email}</Text>

      <Loader loading={loading} />

      {error ? (
        <Text style={{color: 'red'}}>Error: {error.message}</Text>
      ) : (
        <FlatList
          data={repositories}
          renderItem={({item, index}) => <Repository item={item} key={index} />}
          onRefresh={() => refetch()}
          refreshing={loading}
        />
      )}
    </View>
  );
}
