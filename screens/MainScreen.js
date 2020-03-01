import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";



const MainScreen = props => {

    const [barMAXWidth, setBarMAXWidth] = useState(0)
    const [barMaxHeight, setBarMaxHeight] = useState(0)
    const [isLayoutCalculated, setIsLayoutCalculated] = useState(false)
    const [isAnimationStarted, setIsAnimationStarted] = useState(false)
    const [value] = useState(new Animated.Value(0))

    const startAnimation = () => {
        Animated.timing(value, {
            delay: 2000,
            toValue: 1,
            duration: 2000
        }).start()
    }

    if (barMAXWidth > 0 && !isAnimationStarted) {
        console.log("animation starte")
        startAnimation()
        setIsAnimationStarted(true)
    }

    // const scale = {
    //     transform: [
    //       {
    //         scaleX: value.interpolate({
    //           inputRange: [0, 1],
    //           outputRange: [1, 4]
    //         })
    //       }
    //     ]
    //   };

    const width = value.interpolate({
        inputRange: [0, 1],
        outputRange: [70, Dimensions.get('screen').width - 40]
    })

    const heightt = value.interpolate({
        inputRange: [0, 1],
        outputRange: [70, barMaxHeight]
    })

    return (
        <ScrollView contentContainerStyle={styles.screen}>

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
                <View
                    style={{ marginHorizontal: 20, backgroundColor: "yellow", width: Dimensions.get('screen').width - 40, alignItems: "center" }}
                    onLayout={(event) => {
                        if (!isLayoutCalculated) {
                            console.log("layout calculated")
                            setBarMAXWidth(event.nativeEvent.layout.width)
                            setBarMaxHeight(event.nativeEvent.layout.height)
                            // barMAXWidth = event.nativeEvent.layout.width
                            setIsLayoutCalculated(true)
                        } else {
                            // console.log("bar max width" + barMAXWidth)
                        }
                    }}>
                    <Animated.View style={[styles.tooltipContainer, {padding:20, width: width, borderRadius: barMaxHeight/2, backgroundColor: "red", overflow: "hidden" }]}><View style={{flexDirection:"row"}}><Text style={{flex:1,flexWrap:'wrap'}}>Hellow sfsdkjf  sdfsdf dfs sfdsdf screen
                    Hellow sfsdkjf  sdfsdf dfs sfdsdf screenHellow sfsdkjf  sdfsdf dfs sfdsdf screenHellow sfsdkjf  sdfsdf dfs sfdsdf screenHellow sfsdkjf  sdfsdf dfs sfdsdf screenHellow sfsdkjf  sdfsdf dfs sfdsdf screenHellow sfsdkjf  sdfsdf dfs sfdsdf screen
                    Hellow sfsdkjf  sdfsdf dfs sfdsdf screenHellow sfsdkjf  sdfsdf dfs sfdsdf screenHellow sfsdkjf  sdfsdf dfs sfdsdf screenHellow sfsdkjf  sdfsdf dfs sfdsdf screenHellow sfsdkjf  sdfsdf dfs sfdsdf screenHellow sfsdkjf  sdfsdf dfs sfdsdf screenHellow sfsdkjf  sdfsdf dfs sfdsdf screenHellow sfsdkjf  sdfsdf dfs sfdsdf screen
                    </Text></View></Animated.View>
                </View>
            </View>

        </ScrollView>
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
        alignItems: "center",
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
        justifyContent: "center",
        padding: 10,
    },
    tooltipContainer: {
        minHeight: 70,
    }
});

export default MainScreen;