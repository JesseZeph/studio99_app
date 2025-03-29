import { StyleSheet, View, SafeAreaView, Animated, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { images } from '@/constants/images';
import Colors from '@/constants/Colors';
import OnboardingText from '@/components/OnboardingText';
import { screen } from '@/constants/Responsive';


const Page = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;
    const slideAnim2 = useRef(new Animated.Value(-100)).current;


    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim2, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <View>
            <View style={{ position: 'relative', height: screen.hp(65) }}>
                <Image source={images.gradHat} style={[styles.miniImages, { position: 'absolute', right: screen.wp(19), top: screen.hp(15.3), backgroundColor: Colors.lightBlue, borderRadius: 100 }]} />
                <Animated.Image source={images.onboard1} style={[styles.image, { position: 'absolute', left: screen.wp(16), }, { opacity: fadeAnim, transform: [{ translateX: slideAnim2 }] }]} />
                <Animated.Image source={images.onboard1o} style={[styles.image, { position: 'absolute', right: screen.wp(16), top: screen.hp(20.3) }, { opacity: fadeAnim, transform: [{ translateX: slideAnim }] }]} />
                <Image source={images.books} style={[styles.miniImages, { position: 'absolute', left: screen.wp(25), top: screen.hp(42) }]} />
            </View>

            <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
                <OnboardingText title='Learn Anytime, Anywhere' subtitle='Access course materials, upload lectures, and stay connected, all from the comfort of your home.' />
            </Animated.View>
        </View>
    )
}

export default Page

const styles = StyleSheet.create({
    image: {
        width: screen.wp(50),
        height: screen.hp(50),
        resizeMode: 'contain'
    },
    miniImages: {
        width: screen.wp(9),
        height: screen.hp(4),
        resizeMode: 'contain'
    },

})
