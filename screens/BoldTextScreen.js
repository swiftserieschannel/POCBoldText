import React, { useState } from 'react';
import {
  View,
  StyleSheet, ScrollView, Text
} from 'react-native';
import HTMLView from 'react-native-htmlview';

const BoldTextScreen = props => {
  
  const [html, setHTML] = useState('<p>createDrawerNavigator <b>does not</b> provide stack navigation by default, if you are looking to &#128540; see &#128513;a <b>header with</b> the menu icon, then you have to make your screens (one, two) be stackNavigation</p>')

  return (
    <View style={styles.container}>
      <ScrollView>
        <HTMLView
          value={html}
          stylesheet={htmlStyleSheet}
        />
        {/* <Text style={htmlStyleSheet.p}>{" provide stack navigation by default, if you are looking to see a header with the menu icon, \u1F609  \u2603 \uf0e8  \u20B940  unicode value here  "}</Text> */}
      </ScrollView>
    </View>
  );
}

BoldTextScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Bold Text Screen"
  }
};

const text = {
  color:"cyan",
  fontSize: 8,
}

const text1 = {
  color:"orange"
}

const htmlStyleSheet = StyleSheet.create({
    p:{
      color: 'red',
      fontSize: 20,
      fontFamily: "Arial-BoldMT",
    ...text,...text1
    },
    b: {
      color: 'grey',
      fontWeight: 'bold',
      fontSize: 12,
      // fontFamily: "Georgia, serif"
    },
})

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  }
})

console.log(StyleSheet.compose(htmlStyleSheet));
export default BoldTextScreen;