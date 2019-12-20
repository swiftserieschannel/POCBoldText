import React, { Component } from 'react';
import {
  View,
  StyleSheet, Text, SafeAreaView
} from 'react-native';


import HomeNavigator from './navigation/HomeNavigators';
import BoldTextScreen from './screens/BoldTextScreen';

const App = () => {
  return <HomeNavigator />;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  }
});

export default App;