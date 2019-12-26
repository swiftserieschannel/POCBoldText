import { StyleSheet } from 'react-native';
import React from 'react';
export default commonStyles = {
    styles: StyleSheet.create({
        text_regular_black: {
            color: 'black',
            fontWeight: 'normal',
        },
        text_regular_grey: {
            color: 'grey',
            fontWeight: 'normal',
        },
        text_bold_black: {
            color: 'black',
            fontWeight: 'bold',
        },
        text_bold_grey: {
            color: 'grey',
            fontWeight: 'bold',
        },
        text_regular_white: {
            color: 'white',
            fontWeight: 'normal',
        },
        text_regular_blue: {
            color: 'blue',
            fontWeight: 'normal',
        },
        text_regular_green: {
            color: 'green',
            fontWeight: 'normal',
        }
    }),
    getTextFont: (textType) => {
        let font = commonStyles.styles.text_regular_black;

        switch (textType) {
            case 't1':
                font = commonStyles.styles.text_regular_black;
                break;
            case 't2':
                font = commonStyles.styles.text_regular_grey;
                break;
            case 't3':
                font = commonStyles.styles.text_bold_black;
                break;
            case 't4':
                font = commonStyles.styles.text_bold_grey;
                break;
            case 't5':
                font = commonStyles.styles.text_regular_white;
                break;
            case 't6':
                font = commonStyles.styles.text_regular_blue;
                break;
            case 't7':
                font = commonStyles.styles.text_regular_green;
                break;
            default:
                commonStyles.styles.text_regular_black;

        }

        return font
    }

};
