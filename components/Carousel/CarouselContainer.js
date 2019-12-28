import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Pagination from './pagination/Pagination'
import { pure } from 'recompose';


export default class CarouselContainer extends Component {

    static defaultProps = {
        //carouselContainerStyle: styles.container,
        //progressViewStyle: styles.progressView,
        isProgressVisible: true,
        isPaginationVisible: true,
        dataSource: ["testing1","testing2"],
        //paginationContainerStyle: styles.paginationContainerStyle,
        //dotContainerStyle: styles.dotContainerStyle,
        //dotStyle: styles.dotStyle,
        autoplay: false,
        autoplayDelay: 2000,
        renderItem: this._renderItem,
    }

    constructor(props) {
        super(props)
        this.progressAnimation = new Animated.Value(0);
        this.currentVisibleIndex = 0
        this.CONTAINER_WIDTH = Dimensions.get('screen').width
    }

    componentDidMount() {
        this.props.isProgressVisible ? this.StartProgressBarAnimation(0) : null
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
        return (
            <Pagination
                ref={v => this.slider1Pagination = v}
                dotsLength={this.props.dataSource.length || 4}
                containerStyle={this.props.paginationContainerStyle || styles.paginationContainerStyle}
                dotContainerStyle={this.props.dotContainerStyle || styles.dotContainerStyle}
                dotStyle={this.props.dotStyle || styles.dotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                carouselRef={this._carousel}
                dotColor={"#008DF6"}
                inactiveDotColor={"#E0E0E0"}
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

    _renderSnapCarousel = pure(() => {
        return <Carousel
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
                this.props.isPaginationVisible ? this.slider1Pagination.setActiveIndexDot(index) : null
                // if progressview visible then restart progress animation
                if (this.props.isProgressVisible) {
                    this.progressAnimation.stopAnimation();
                    this.StartProgressBarAnimation(0)
                }
            }}
            onTouchStart={(event) => {
                if (this.props.isProgressVisible) {
                    this.isProgressStopped = true
                    this.progressAnimation.stopAnimation(number => this.animationValue = number)
                }
            }}
            onScrollEndDrag={(event) => {
                this.props.isProgressVisible ? this.StartProgressBarAnimation(this.animationValue) : null
            }}
            onTouchEndCapture={(event) => {
                if (this.props.isProgressVisible) {
                    this.isProgressStopped = false
                    this.StartProgressBarAnimation(this.animationValue)
                }
            }}
        >

        </Carousel>
    });

    render() {

        const progressWidth = this.progressAnimation.interpolate(
            {
                inputRange: [0, 1],
                outputRange: [0, this.CONTAINER_WIDTH]
            });
        return (
            <View style={[styles.container]} onLayout={(event) => {
                this.CONTAINER_WIDTH = event.nativeEvent.layout.width
            }}>
                <this._renderSnapCarousel />
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
        backgroundColor: "#E0E0E0",
        marginHorizontal: 15
    },
    progressView: {// default styles for progress view
        marginHorizontal: 0,
        height: 3,
        backgroundColor: '#008DF6',
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
        width: 6,
        height: 6,
        borderRadius: 5,
        marginHorizontal: 0,
        backgroundColor: '#E0E0E0'
    }
});

