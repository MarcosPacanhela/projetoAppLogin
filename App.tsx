import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ScreenLogin } from './src/app';

export default function App() {
  return (
    <View style={styles.container}>
      <ScreenLogin />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
    justifyContent: 'flex-end'
  },
});
