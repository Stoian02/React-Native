import React from "react";
import { StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Box screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BoxScreen;
