import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

export default function Loader({loading}) {
  if (!loading) return;
  return <ActivityIndicator />;
}
