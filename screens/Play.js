import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Play() {
  return (
    <View style={styles.container}>
      <Text>Start The Game</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
