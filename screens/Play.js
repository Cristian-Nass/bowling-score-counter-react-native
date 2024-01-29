import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Play() {
  return (
    <View style={styles.container}>
      <Text>Please Input the name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: '10%',
  },
});
