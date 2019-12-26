import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class CarouselContainer extends Component {

    static defaultProps = {
        //carouselContainerStyle: styles.container,
        //progressViewStyle: styles.progressView,
        isProgressVisible: true,
        isPaginationVisible: true,
        dataSource: ["1","2"],
        //paginationContainerStyle: styles.paginationContainerStyle,
        //dotContainerStyle: styles.dotContainerStyle,
        //dotStyle: styles.dotStyle,
        autoplay: false,
        autoplayDelay: 0,
        renderItem: this._renderItem,
    }

    state = {
        activeSlide: 0
    }

    constructor(props) {
        super(props)
        this.progressAnimation = new Animated.Value(0);
        this.currentVisibleIndex = 0
        this.CONTAINER_WIDTH = Dimensions.get('screen').width
    }

    componentDidMount() {
        if(this.props.isProgressVisible){
            this.StartProgressBarAnimation(0) 
        }
    }

    componentWillUnmount() {
        this.progressAnimation.stopAnimation();
    }

    StartProgressBarAnimation = (value = 0) => {
        this.progressAnimation.setValue(value);
        this.progressAnimationValue = 0;
        Animated.timing(
            this.progressAnimation,
            {
                toValue: 1,
                duration: 2000 * (1 - value)
            }
        ).start((result) => {
            if (result.finished) {
                this._carousel.snapToNext()
            }
        });
    }

    get pagination() {
        const { activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={this.props.dataSource.length || 4}
                activeDotIndex={activeSlide}
                containerStyle={this.props.paginationContainerStyle || styles.paginationContainerStyle}
                dotContainerStyle={this.props.dotContainerStyle || styles.dotContainerStyle}
                dotStyle={this.props.dotStyle || styles.dotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                carouselRef={this._carousel}
            />
        );
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={{ padding: 80, backgroundColor: 'grey' }}>
                <Text>Please Pass Render Item In Props.</Text>
                <Text>Item Index {item}</Text>
            </View>
        );
    }

    get _renderSnapCarousel() {
        return (
            <Carousel
                loopClonesPerSide={5}
                ref={(c) => { this._carousel = c; }}
                data={this.props.dataSource}
                renderItem={this.props._renderItem || this._renderItem}
                sliderWidth={this.CONTAINER_WIDTH}
                itemWidth={this.CONTAINER_WIDTH}
                layout={'default'}
                autoplay={this.props.autoplay}
                autoplayDelay={this.props.autoplayDelay}
                loop={true}
                onSnapToItem={(index) => {
                    this.currentIndex = index
                    this.setState({ activeSlide: index })
                    // if progressview visible then restart progress animation
                    if (this.props.isProgressVisible) {
                        this.progressAnimation.stopAnimation();
                        this.StartProgressBarAnimation(0)
                    }
                }}
                onTouchStart={(event) => {
                    this.isProgressStopped = true
                    this.progressAnimation.stopAnimation(number => this.animationValue = number)
                }}
                onScrollEndDrag={(event) => { //working
                    this.StartProgressBarAnimation(this.animationValue)
                }}
                onTouchEndCapture={(event) => {
                    this.isProgressStopped = false
                    this.StartProgressBarAnimation(this.animationValue)
                }}
            >
                
            </Carousel>
        )
    }

    render() {

        const progressWidth = this.progressAnimation.interpolate(
            {
                inputRange: [0, 1],
                outputRange: [0, Dimensions.get('window').width - 0]
            });

        return (
            <View style={[styles.container, this.props.CarouselContainerStyle]} onLayout={(event) => {
                this.CONTAINER_WIDTH = event.nativeEvent.layout.width
            }}>
                {this._renderSnapCarousel}
                {this.props.isPaginationVisible ? this.pagination : null}
                {this.props.isProgressVisible ? <Animated.View style={[styles.progressView, { width: progressWidth }]} /> : null}
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {// default styles for carousel container
        marginTop: 8,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "#FFF",
        marginHorizontal: 18
    },
    progressView: {// default styles for progress view
        marginHorizontal: 0,
        height: 3,
        backgroundColor: 'rgba(52, 140, 235,1)',
        width: '0%',
    },
    paginationContainerStyle: {// default styles for paginationContainer view
        height: 20,
        paddingVertical: 10,
        marginTop: -30,
        marginHorizontal: 0
    },
    dotContainerStyle: {
        height: 0,
        padding: 0,
        margin: 0
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        backgroundColor: 'rgba(52, 140, 235,1)'
    }
});

