import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';

import {useStore} from '../store/useStore';

export default function AddPlayer() {
  const {players, setPlayer} = useStore();
  const [name, onChangeName] = React.useState('');
  const onPress = () => {
    if (name) {
      setPlayer(name);
      onChangeName('');
    }
  };
  console.log(players);
  return (
    <View style={styles.container}>
      <Text>Please Input the name</Text>
      <View style={styles.flexContainer}>
        <TextInput
          placeholder="Input the name"
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
        />
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            marginTop: 18,
            borderRadius: 4,
            backgroundColor: 'blue',
          }}
          onPress={onPress}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              marginTop: 4,
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={players}
        renderItem={(itemData) => {
          return (
            <View>
              <Text>{itemData.item.name}</Text>
            </View>
          );
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '16%',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 4,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
});
