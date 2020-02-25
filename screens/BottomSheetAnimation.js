import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Animated } from 'react-native';

export default BottomSheetAnimation = props => {

    const [animation] = useState(new Animated.Value(0))
    const [heightAnimation] = useState(new Animated.Value(0))
    const [opacityAnimation] = useState(new Animated.Value(0))
    useEffect(() => {
        startAnimation()
    }, [animation, startAnimation])

    const startAnimation = () => {
        Animated.parallel([
            Animated.timing(animation, {
                toValue: -60,
                duration: 2000
            }),
            Animated.timing(heightAnimation, {
                toValue: 200,
                duration: 2000
            }),

        ]).start(() => {
            Animated.timing(opacityAnimation, {
                toValue: 1,
                duration: 2000
            }).start()
        })
    }

    // opacityValue.addListener(({value})=>{
    //     console.log(value)
    // })

    // const heightValue = animation.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0, 260],
    // })

    // opacityValue.addListener(({ value }) => {
    //     console.log(value)
    // })

    const transformStyle = {
        //opacity: opacityValue,
        // height: 200,
        // opacity: animation.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [0, 1],
        // }),
        // opacity: opacityAnimation,
        transform: [{
            translateY: animation,
        }]
    }


    animation.addListener(({ value }) => { console.log(value) })
    return (
        <View style={{ flex: 1 }}>
            <Animated.View style={[{ backgroundColor: "grey", opacity: 1, width: "100%", height: heightAnimation, bottom: 20, position: "absolute" }, transformStyle]}>
                <Animated.View style={{ opacity: opacityAnimation }}>
                    <Text>Hello World</Text>
                    <Text>Hello World</Text>
                </Animated.View>
            </Animated.View >
        </View>
    )

}


const styles = StyleSheet.create({

})

