import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { pure } from 'recompose';

const Square = pure(({ number }) => {
    const [testState, setTestState] = useState(0);
    console.log("rerendered called" + number);
    return (
        <View style={styles.listItem}>
            <TouchableOpacity onPress={()=>{setTestState(testState+1)}}>
                <Text>{number * number}</Text>
            </TouchableOpacity>
        </View>
    );
});

const RerenderOptScreen = props => {

    const [value, setValue] = useState(0);
    const list = new Array(10).fill(0).map((v, i) => i);
    console.log("Rerender screen");
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView>
                {list.map(v => <Square key={v} number={v} />)}
                <Button title="Change State" onPress={() => setValue(value + 1)} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: "column",
        flex: 1,
    },
    listItem: {
        margin: 10,
    }
});
export default RerenderOptScreen;