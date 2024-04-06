import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Hi there</Text>
            <Button
                onPress={() => console.log("Button pressed")}
                title="Go to Components Demo"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;
