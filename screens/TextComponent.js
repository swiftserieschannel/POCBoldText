import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TextComponent = props => {
    const data = "Hello sfks gddfkjsd"
    return (
        <View style={styles.component}>
            <Text>
                {data}
            </Text>
            <Button title="click me" />
        </View>
    )
}


const styles = StyleSheet.create({
    component: {
        backgroundColor: "grey",
        flex: 1,
    }
})


export default TextComponent;


