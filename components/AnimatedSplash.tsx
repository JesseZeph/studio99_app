import { images } from '@/constants/images';
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Dimensions, Animated } from 'react-native';


interface AnimatedSplashProps {
    onAnimationComplete: () => void;
    onReady?: () => void;
}

const AnimatedSplash: React.FC<AnimatedSplashProps> = ({ onAnimationComplete, onReady }) => {
    const logoScale = useRef(new Animated.Value(0)).current;
    const logoOpacity = useRef(new Animated.Value(1)).current;
    const bgOpacity = useRef(new Animated.Value(1)).current;
    const bgScale = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (onReady) {
            onReady();
        }

        Animated.sequence([
            Animated.delay(100),

            Animated.timing(logoScale, {
                toValue: 2.8,
                duration: 1200,
                useNativeDriver: true,
            }),

            Animated.parallel([
                Animated.timing(logoOpacity, {
                    toValue: 0,
                    duration: 1200,
                    useNativeDriver: true,
                }),
                Animated.timing(bgOpacity, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(bgScale, {
                    toValue: 3,
                    duration: 1500,
                    useNativeDriver: true,
                }),
            ]),
        ]).start(() => {
            onAnimationComplete();
        });
    }, []);

    const bgTransform = {
        scale: bgScale.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 30],
        }),
    };

    return (
        <View style={styles.container}>
            <Animated.Image
                source={images.logo}
                style={[
                    styles.logo,
                    {
                        transform: [{ scale: logoScale }],
                        opacity: logoOpacity,
                    },
                ]}
                resizeMode="contain"
            />
            <Animated.View
                style={[
                    styles.blueBackground,
                    {
                        opacity: bgOpacity,
                        transform: [{ scale: bgTransform.scale }],
                    },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
        zIndex: 2,
    },
    blueBackground: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#0B193E',
        zIndex: 1,
    },
});

export default AnimatedSplash; 