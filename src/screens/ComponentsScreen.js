import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Stoian';
    return <View>
        <Text style={styles.textStyle}>Getting started with react native</Text>
        <Text style={{ fontSize: 20 }}>Hello, my name is {myName}</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

export default ComponentsScreen;