import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Button} from 'react-native';

import {useStore} from '../store/useStore';

export default function AddPlayer() {
  const {players, setPlayer, removePlayer} = useStore();
  const [name, onChangeName] = React.useState('');

  const addPlayer = () => {
    if (name) {
      setPlayer(name);
      onChangeName('');
    }
  };

  const removePlayerHandler = (key) => {
    console.log(key);
    removePlayer(key);
  };

  const playersList = (player) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1, alignSelf: 'center'}}>{player.name}</Text>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            borderRadius: 4,
            backgroundColor: '#E87878 ',
          }}
          onPress={() => removePlayerHandler(player.key)}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              marginTop: 4,
            }}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

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
            backgroundColor: '#4EB8BA',
          }}
          onPress={addPlayer}>
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
          return <View style={styles.player}>{playersList(itemData.item)}</View>;
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
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    marginTop: '10%',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderRadius: 4,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
  player: {
    flex: 1,
    backgroundColor: '#ccc',
    marginTop: 10,
    padding: 8,
    borderRadius: 6,
  },
});