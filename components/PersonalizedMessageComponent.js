import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Styles from '../stylesheets/commonstyles';



const TextView = props => {
    return (props.texts.text != undefined && props.texts.text.trim().length > 0)
        ? (<Text style={ [styles.text,Styles.getTextFont(props.texts.type) ]}>
            {props.texts.text}</Text>)
        : null
}


const PersonalizedMessageComponent = props => {

    const data = props.data ;
    const texts = data.texts || {};

    console.log( <TextView texts={texts[0]} />);
    return (
        <View style={{ ...props.style }, styles.component}>
            <Image source={{ uri: props.image }} />
            <TextView texts={texts[0]} />
            <TextView texts={texts[1]} />
        </View>
    );
}

const styles = StyleSheet.create({
    component: {
        padding: 15,
        flexDirection: 'column',
    },
    text: {
        marginVertical: 5,
        lineHeight: 22,
        fontSize: 18,

    }
});

export default PersonalizedMessageComponent;