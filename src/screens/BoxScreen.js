import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textOneStyle}>Box screen 1</Text>
      <Text style={styles.textTwoStyle}>Box screen 2</Text>
      <Text style={styles.textThreeStyle}>Box screen 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderWidth: 3,
    borderColor: "black",
  },
  textOneStyle: {
    borderWidth: 2,
    borderColor: "red",
  },
  textTwoStyle: {
    borderWidth: 2,
    borderColor: "red",
    fontSize: 18,
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 2,
    borderColor: "red",
  },
});

export default BoxScreen;
