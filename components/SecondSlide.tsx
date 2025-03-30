import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { screen } from '@/constants/Responsive';
import SlidesText from './SlidesText';
import { Image } from 'react-native';
import { Images } from '@/constants/Images';
import Colors from '@/constants/Colors';
import { applyFont } from '@/constants/Fonts';

const Page = ({ currentIndex }: { currentIndex: number }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;
    const slideAnim2 = useRef(new Animated.Value(-100)).current;
    useEffect(() => {
        if (currentIndex === 1) {
            fadeAnim.setValue(0);
            slideAnim.setValue(50);
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
                Animated.timing(slideAnim2, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
            ]).start();
        }
    }, [currentIndex]);

    return (
        <View>
            <View style={{ justifyContent: 'center', height: screen.hp(65) }}>
                <View style={styles.bubbleContainer} >
                    <Animated.View style={[styles.textContainer, { transform: [{ rotateZ: '-15deg' }, { translateY: slideAnim2 }], opacity: fadeAnim }]}>
                        <Image source={Images.firstTag} style={styles.image} />
                        <Text style={applyFont({ fontSize: 16 })}>@yummymum liked your video.</Text>
                    </Animated.View>
                    <Animated.View style={[styles.textContainer, { zIndex: 10, backgroundColor: Colors.navy, marginLeft: screen.wp(5), opacity: fadeAnim, transform: [{ translateX: slideAnim }] }]}>
                        <Image source={Images.secondTag} style={styles.image} />
                        <Text style={applyFont({ fontSize: 16, color: '#fff' })}>@coolkid01 paid to watch your premium video.</Text>
                    </Animated.View>
                    <Animated.View style={[styles.textContainer, { transform: [{ rotateZ: '15deg' }, { translateY: slideAnim }], opacity: fadeAnim }]}>
                        <Image source={Images.thirdTag} style={styles.image} />
                        <Text style={applyFont({ fontSize: 16 })}>@lifewithme followed you</Text>
                    </Animated.View>
                </View>
            </View>
            <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
                <SlidesText title='Create Content and Earn' subtitle='Upload videos, grow your audience, and monetize your creativity. Share free or premium content and get rewarded for your passion!' />
            </Animated.View>
        </View>
    );
};

export default Page;

const styles = StyleSheet.create({
    image: {
        width: screen.wp(6),
        height: screen.hp(6),
        resizeMode: 'contain',
    },
    bubbleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: screen.hp(3),
        marginTop: screen.hp(10)
    },
    textContainer: {
        width: screen.wp(75),
        paddingVertical: screen.hp(1),
        backgroundColor: Colors.blue700,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: screen.wp(2),
        paddingHorizontal: screen.wp(8)
    },
});
