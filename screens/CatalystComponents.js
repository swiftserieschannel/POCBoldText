import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import PersonalizedMessageComponent from '../components/PersonalizedMessageComponent'





const CatalystComponents = props => {
    return (

        <SafeAreaView styles={{ flex: 1 }}>
            <View style={styles.screen}>
                <PersonalizedMessageComponent
                    data={{
                        texts: [{ type: "t3", text: "hi welcome how are you this is multi line text" },
                        { type: "t1", text: "hi welcome how are you this is multi line text" }]
                    }}
                />
            </View>
        </SafeAreaView>

    );
}

CatalystComponents.navigationOptions = (navigationData) => {
    return {
        headerTitle: "Catalyst",
    }
}

const styles = StyleSheet.create({
    screen: {
        padding: 0,
    }
});

export default CatalystComponents;