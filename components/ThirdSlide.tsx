import { Animated, Easing, StyleSheet, Text, View, Image } from 'react-native'
import React, { useRef, useEffect } from 'react'
import { screen } from '@/constants/Responsive';
import SlidesText from './SlidesText';
import { Images } from '@/constants/Images';
import Colors from '@/constants/Colors';

const Page = ({ currentIndex }: { currentIndex: number }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(-100)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (currentIndex === 2) {
            fadeAnim.setValue(0);
            slideAnim.setValue(-100);
            rotateAnim.setValue(0);

            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
                Animated.timing(rotateAnim, {
                    toValue: 1,
                    duration: 1200,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
            ]).start();
        }
    }, [currentIndex]);

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View>
            <View style={styles.imageContainer}>
                <View style={styles.ellipseContainer}>
                    <View style={styles.topImageContainer}>
                        <Animated.View style={[styles.dottedBorder, { opacity: fadeAnim }, { transform: [{ translateY: slideAnim }] }]}>

                            <Animated.Image source={Images.camEllipse}
                                style={[styles.image, {
                                    transform: [
                                        { translateY: slideAnim },
                                        { rotateY: spin }
                                    ],
                                    opacity: fadeAnim
                                }]} />
                        </Animated.View>
                    </View>
                    <Animated.Image source={Images.plusEmoji} style={[styles.plus, { transform: [{ rotateZ: spin }] }]} />
                    <View style={styles.bottomImageContainer}>
                        <Animated.View style={[styles.dottedBorder, { opacity: fadeAnim }, { transform: [{ translateY: slideAnim }] }]}>
                            <Animated.Image source={Images.ellipse}
                                style={[styles.image, {
                                    transform: [
                                        { translateY: slideAnim },
                                        { rotateY: spin }
                                    ],
                                    opacity: fadeAnim
                                }]} />
                        </Animated.View>
                    </View>
                </View>
            </View>
            <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
                <SlidesText title='Where Learning Meets Fun' subtitle='We provide an opportunity for you to learn and also have fun watching stuff you love right on the same platform.' />
            </Animated.View>
        </View>
    )
}

export default Page

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: screen.hp(65),
    },
    ellipseContainer: {
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: screen.wp(10),
        justifyContent: 'space-between',
        height: '70%',
        marginTop: screen.hp(6),
    },
    topImageContainer: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: -screen.hp(6),
    },
    bottomImageContainer: {
        width: '100%',
        alignItems: 'flex-start',
        marginTop: -screen.hp(6),
    },
    image: {
        width: screen.wp(30),
        height: screen.hp(20),
        borderRadius: screen.wp(200),
        resizeMode: 'contain',
    },
    plus: {
        width: screen.wp(10),
        height: screen.hp(10),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    dottedBorder: {
        borderWidth: 2,
        borderColor: Colors.navy,
        borderStyle: 'dashed',
        padding: screen.wp(1),
        width: 150,
        height: 150,
        borderRadius: screen.wp(200),
        justifyContent: 'center',
        alignItems: 'center',
    }
});