import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';



const MainScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate({ routeName: "BoldText" })
                    }}>
                    <Text>Go To Bold Text POC</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate({ routeName: "CarouselPOC" })
                    }}>
                    <Text> Go To Carousel POC </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate({ routeName: "ThirdScreen" })
                    }}>
                    <Text> Go To Carousel POC </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate({ routeName: "SnapCarousel" })
                    }}>
                    <Text> Go To Snap Carousel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate({ routeName: "SnapCarousel" })
                    }}>
                    <Text> Go To Counter With Redux</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

MainScreen.navigationOptions = (navigationData) => {
    return ({
        headerTitle: "POS'S",

    });
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems:"center",
    },
    btnContainer: {
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        margin: 10,
        width: "100%",
        borderColor: "blue",
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 5,
        height: 40,
        alignItems: "center",
        justifyContent:"center",
        padding: 10,
    }
});

export default MainScreen;