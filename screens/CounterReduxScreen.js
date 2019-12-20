import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {updateCount} from '../actions/CounterScreenActions';
const CounterReduxScreen = props => {
    const dispatch = useDispatch();
    return (
        <View style={{ width: '92%', margin: 10, flexDirection: 'row', backgroundColor: '', justifyContent: 'space-evenly', alignContent: 'center' }}>
            <View style={{ padding: 10, height: 40, borderRadius: 3, alignItems: "center", width: 40, borderWidth: 2, borderColor: 'gray' }}>
                <TouchableOpacity onPress={()=>{
                    dispatch(updateCount(1))
                }}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10 }}>
            <Text>{useSelector(state=>state.counterScreenReducer.count)}</Text>
            </View>
            <View style={{ padding: 10, borderWidth: 2, borderRadius: 3, height: 40, width: 40, borderColor: 'gray', alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{
                    dispatch(updateCount(-1))
                }}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterReduxScreen;