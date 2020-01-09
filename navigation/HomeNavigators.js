import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import BoldTextScreen from '../screens/BoldTextScreen';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen'
import CarouselPOCScreen from '../screens/CarouselPOCScreen';
import ThirdScreen from "../screens/ThirdScreen";
import SnapCarouselScreen from '../screens/SpanCarouselScreen'
import CounterReduxScreen from '../screens/CounterReduxScreen';
import CatalystScreen from '../screens/CatalystComponents';
import RerenderOptScreen from '../screens/RerenderOptScreen';
import CarouselContainer from '../components/Carousel/CarouselContainer';
import RatingScreen from '../screens/RatingScreen';
import TextComponent from '../screens/TextComponent';
const HomeNavigator = createStackNavigator({
    MainScreen: MainScreen,
    BoldText: BoldTextScreen,
    CarouselPOC: CarouselPOCScreen,
    ThirdScreen: ThirdScreen,
    SnapCarousel: SnapCarouselScreen,
    CounterRedux: CounterReduxScreen,
    CatalystScreen: CatalystScreen,
    RerenderOptScreen: RerenderOptScreen,
    CarouselContainer: CarouselContainer,
    RatingScreen: RatingScreen,
    TextComponent: TextComponent,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? '#00e6e6' : 'white',
        },
        headerTintColor: Platform.OS === 'ios' ? 'black' : 'white',
        headerTitleStyle: {
            fontWeight: "bold",
        }
    }
});

export default createAppContainer(HomeNavigator);



