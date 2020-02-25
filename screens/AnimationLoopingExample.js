import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Animated, } from 'react-native'




var currentProgressAnimation = 0
var barMAXWidth = 0
const ProgressBarsRow = props => {

    const totalBars = parseInt(props.totalBars || 4)
    const filledBars = parseInt(props.filledBars || 2)
    const containerStyle = props.containerStyle || styles.containerStyle
    const filledBarStyle = props.filledBarStyle || styles.filledBarStyle
    const unFilledBarStyle = props.unFilledBarStyle || styles.unFilledBarStyle


    // const [currentWidth] = useState(new Animated.Value(0))
    // const SINGLE_BAR_MAX_WIDTH = 0
    const UNFILLED_BARS = totalBars - filledBars
    // const [currentWidth,setCurrentWidth] = useState(0)
    // const currentWidth = 0
    // var isLayoutCalculated = false
    // const [barMAXWidth,setBarMAXWidth] = useState(0)
    const [isLayoutCalculated,setIsLayoutCalculated] = useState(false)

    const [value] = useState(new Animated.Value(0))

    useEffect(()=>{
        
    }, [value,barMAXWidth,currentProgressAnimation])

    // const startAnimation = () => {
    //     Animated.timing(value, {
    //         toValue: barMAXWidth,
    //         duration: 2000
    //     }).start(() => {
    //         // startAnimation();
    //         setBarMAXWidth(0)
    //         console.log("complete", currentProgressAnimation)
    //         currentProgressAnimation += 1
    //     });
    // }


    var animation =  Animated.loop(
        Animated.sequence([
            // Animated.delay(3000),
            Animated.timing(value, {
                toValue: barMAXWidth,
                duration: 2000
            })
        ]),
        {
            iterations: 5
        }
    )
    // const width = 0

    //     const
    //         useEffect(() => {

    // }, [currentProgressAnimation])


    var width = value.interpolate({
        inputRange: [0, barMAXWidth],
        outputRange: [0, barMAXWidth],
    })

    return (

        <View style={containerStyle}>

            {Array.from(Array(Math.floor(filledBars > totalBars ? totalBars : filledBars)), (value, key) => {
                return <View style={[styles.singleBarStyle, unFilledBarStyle]} key={key} onLayout={(event) => {
                    if (!isLayoutCalculated) {
                        // setBarMAXWidth(event.nativeEvent.layout.width)
                        barMAXWidth = event.nativeEvent.layout.width
                        animation.start((endResult)=>{
                            if(endResult.finished){
                                console.log("animation completed")
                            }
                        })
                        setIsLayoutCalculated(true)
                    }
                }}><Animated.View style={[styles.singleBarStyle, filledBarStyle, { flex: 1, marginRight: 0, width: width }]} /></View>
            })}
            {Array.from(Array(Math.floor(UNFILLED_BARS > totalBars ? totalBars : UNFILLED_BARS)), (value, key) => {
                return <View style={[styles.singleBarStyle, unFilledBarStyle]} key={key}></View>
            })}

        </View>
    )
}

const AnimationLoopingExample = props => {

    return (<View style={{ flex: 1, padding: 20 }}>
        <ProgressBarsRow totalBars={7} filledBars={5} containerStyle={styles.progressContainer} />
    </View>)
}




const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: "row"
    },
    singleBarStyle: {
        borderRadius: 4,
        overflow: "hidden",
        flex: 1 / 4,
        height: 8,
        marginRight: 10,
    },
    filledBarStyle: {
        backgroundColor: "grey"
    },
    unFilledBarStyle: {
        backgroundColor: "blue"
    }
})

export default AnimationLoopingExample