import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {allCountries} from '../../constants/countries';
import {SIZES} from '../../constants/theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Country} from '../../components';

export default function CountryList() {
  const route = useRoute().params;
  const navigation = useNavigation();
  const handleGoBack = val => {
    route.onGoBack(val);
    navigation.goBack();
  };

  const renderItem = ({item}) => <Country item={item} onPress={handleGoBack} />;
  return (
    <View>
      <FlatList data={allCountries} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: SIZES.width,
    height: SIZES.height,
    justifyContent: 'center',
  },
});
