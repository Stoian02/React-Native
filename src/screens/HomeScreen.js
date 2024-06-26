import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Hi there</Text>
            <Button
                onPress={() => navigation.navigate("Components")}
                title="Go to Components Demo"
            />
            <Button
                onPress={() => navigation.navigate("List")}
                title="Go to List Demo"
            />
            <Button
                onPress={() => navigation.navigate("Image")}
                title="Go to Image Demo"
            />
            <Button
                onPress={() => navigation.navigate("Counter")}
                title="Go to Counter Demo"
            />
            <Button
                onPress={() => navigation.navigate("Color")}
                title="Go to Colors Demo"
            />
            <Button
                onPress={() => navigation.navigate("Square")}
                title="Go to Square Demo"
            />
            <Button
                onPress={() => navigation.navigate("Register")}
                title="Go to Register Demo"
            />
            <Button
                onPress={() => navigation.navigate("Register2")}
                title="Go to Register2 Demo"
            />
            <Button
                onPress={() => navigation.navigate("TextScreen")}
                title="Go to TextInput Demo"
            />
            <Button
                onPress={() => navigation.navigate("BoxScreen")}
                title="Go to Box Demo"
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
