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
                        props.navigation.navigate({ routeName: "CounterRedux" })
                    }}>
                    <Text> Go To Counter With Redux</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate({ routeName: "CatalystScreen" })
                    }}>
                    <Text> Go To Catalyst Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate({ routeName: "RerenderOptScreen" })
                    }}>
                    <Text> ReRender Optimisation</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate({ routeName: "CarouselContainer" })
                    }}>
                    <Text> Carousel Container Component</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate({ routeName: "RatingScreen" })
                    }}>
                    <Text> Rating Screen  Component</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate({ routeName: "TextComponent" })
                    }}>
                    <Text> Text Component</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate({ routeName: "ReactNativeTabViewScreen" })
                    }}>
                    <Text> ReactNativeTabViewScreen </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate({ routeName: "AnimationLoopingExample" })
                    }}>
                    <Text> AnimationLoopingExample </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate({ routeName: "BottomSheetAnimation" })
                    }}>
                    <Text> BottomSheetAnimation </Text>
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