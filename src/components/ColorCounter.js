import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ColorCounter = ({ color, onIncrement, onDecrement }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrement()} title={`Increase ${color}`} />
            <Button onPress={() => onDecrement()} title={`Decrease ${color}`} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;
