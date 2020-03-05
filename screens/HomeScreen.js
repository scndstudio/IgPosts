import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={container}>

    </View>
  );
}
const {container} = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272C',
  }
});
