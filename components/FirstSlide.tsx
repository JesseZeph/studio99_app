import { StyleSheet, View, Animated, Image, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Colors from '@/constants/Colors';
import { screen } from '@/constants/Responsive';
import SlidesText from '@/components/SlidesText';
import { Images } from '@/constants/Images';


const Page = ({ currentIndex }: { currentIndex: number }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;
    const slideAnim2 = useRef(new Animated.Value(-100)).current;


    useEffect(() => {
        if (currentIndex === 0) {
            fadeAnim.setValue(0);
            slideAnim.setValue(50);
            slideAnim2.setValue(-100);

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
            <View style={{ position: 'relative', height: screen.hp(65) }}>
                <Image source={Images.gradHat} style={[styles.miniImages, { position: 'absolute', right: screen.wp(19), top: screen.hp(15.3), backgroundColor: Colors.lightBlue, borderRadius: screen.wp(100) }]} />
                <Animated.Image source={Images.onboard1} style={[styles.image, { position: 'absolute', left: screen.wp(16), }, { opacity: fadeAnim, transform: [{ translateX: slideAnim2 }] }]} />
                <Animated.Image source={Images.onboard1o} style={[styles.image, { position: 'absolute', right: screen.wp(16), top: screen.hp(20.3) }, { opacity: fadeAnim, transform: [{ translateX: slideAnim }] }]} />
                <Image source={Images.books} style={[styles.miniImages, { position: 'absolute', left: screen.wp(25), top: screen.hp(42) }]} />
            </View>

            <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }], marginTop: screen.hp(3) }}>
                <SlidesText title='Learn Anytime, Anywhere' subtitle='Access course materials, upload lectures, and stay connected, all from the comfort of your home.' />
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
        width: 35,
        height: 35,
        resizeMode: 'contain'
    },

})
