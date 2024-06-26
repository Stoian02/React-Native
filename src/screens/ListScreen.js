import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 28 },
        { name: 'Friend #2', age: 29 },
        { name: 'Friend #3', age: 30 },
        { name: 'Friend #4', age: 31 },
        { name: 'Friend #5', age: 42 },
        { name: 'Friend #6', age: 22 },
        { name: 'Friend #7', age: 12 },
        { name: 'Friend #8', age: 62 },
        { name: 'Friend #9', age: 35 },
    ];

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
    }
});

export default ListScreen;


