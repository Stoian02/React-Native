import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Box screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "black",
  },
  textStyle: {
    borderWidth: 2,
    borderColor: "red",
    margin: 20,
  },
});

export default BoxScreen;
