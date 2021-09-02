
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './components/index'

export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
