import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle} />
      </View>
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: "green",
  },
  viewTwoParent: {
    borderWidth: 2, // just to visualize the parent view
    height: 200,
    justifyContent: "flex-end",
  },
  viewThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },
});

export default BoxScreen;
