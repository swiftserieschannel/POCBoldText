import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { CounterScreenReducer } from "./reducers/CounterScreenReducer";
import {
  View,
  StyleSheet, Text, SafeAreaView
} from 'react-native';


import HomeNavigator from './navigation/HomeNavigators';
import BoldTextScreen from './screens/BoldTextScreen';

const combinedReducers = combineReducers({
  counterScreenReducer: CounterScreenReducer
})
const store = createStore(combinedReducers)

const App = () => {
  return <Provider store={store}>
    <HomeNavigator />
  </Provider>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  }
});

export default App;