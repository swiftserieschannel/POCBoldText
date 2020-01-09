import React,{useRef,useEffect} from "react";
import { View, StyleSheet, Dimensions } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

const RatingScreen = props => {
    const ratingRef = useRef(null)

    useEffect(()=>{
        console.log("reference value ");
        console.log(ratingRef);
    },[ratingRef])

    return (
        <View style={styles.screen}>

            <AirbnbRating 
                defaultRating = {2.5}
                count = {5}
                ref = {ratingRef}
                showRating = {false}
                // isDisabled = {true}
                size = {25}
                
            />

            <Rating
                showRating = {false}
                ratingCount = {5}
                readonly = {true}
                startingValue = {2.6}
                fractions = {1}
                minValue = {0}
                imageSize = {24}
                type="custom"
            />
        </View>
    );
}

RatingScreen.navigationOptions = navigationData => {
    return {
        headerTitle: "Rating Screen"
    }
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
});

export default RatingScreen;