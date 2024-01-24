import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useStore } from "./store/useStore";

export default function App() {
  const { players, setPlayer } = useStore();
  const [name, onChangeName] = React.useState("");
  const onPress = () => {
    if (name) {
      setPlayer(name);
      console.log(players);
      onChangeName("");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text>Please Input the name</Text>
      <View style={stylesFlex.container}>
        <TextInput
          placeholder='Input the name'
          style={styleInput.input}
          onChangeText={onChangeName}
          value={name}
        />
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            marginTop: 18,
            borderRadius: 4,
            backgroundColor: "blue",
          }}
          onPress={onPress}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              marginTop: 4,
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const stylesFlex = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});

const styleButton = StyleSheet.create({
  input: {
    color: "red",
    height: 10,
    width: 10,
  },
});

const styleInput = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderRadius: 4,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
});
