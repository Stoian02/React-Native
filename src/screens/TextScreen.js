import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <View>
      <Text>Enter your name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter your name"
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter your pass"
        secureTextEntry={true}
        value={pass}
        onChangeText={(newValue) => setPass(newValue)}
      />
      <Text>Your name is {name}</Text>
      {pass.length < 5 ? <Text>Password must be longer than 5 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
