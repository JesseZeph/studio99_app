import { FlatList, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Paginator from '@/components/Paginator'
import Page1 from '@/components/FirstSlide'
import Page2 from '@/components/SecondSlide'
import Page3 from '@/components/ThirdSlide'
import Colors from '@/constants/Colors'
import { screen } from '@/constants/Responsive'
import { applyFont } from '@/constants/Fonts'
import { useRouter } from 'expo-router'
const { width } = Dimensions.get('window');

const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(0);
    const flatListRef = useRef<FlatList | null>(null);
    const router = useRouter();

    const data = [
        Page1,
        Page2,
        Page3,
    ]

    const handleNext = () => {
        if (currentIndex < data.length - 1) {
            flatListRef.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true
            });
        } else {
            router.replace('/auth');
        }

    };

    return (
        <View>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={({ item: Component, index }) => (
                    <View style={{ width }}>
                        <Component currentIndex={currentIndex === index ? currentIndex : -1} />
                    </View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(_, index) => index.toString()}
                onScroll={(event) => {
                    const scrollPosition = event.nativeEvent.contentOffset.x;
                    scrollX.current = scrollPosition;
                    setCurrentIndex(Math.round(scrollPosition / width));
                }}
                scrollEventThrottle={16}
            />
            <View style={{ marginTop: screen.hp(3) }}>
                <Paginator data={data} currentIndex={currentIndex} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleNext}>
                    <Text style={applyFont(styles.textButton)}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({

    buttonContainer: {
        paddingHorizontal: screen.wp(5),
    },
    textButton: {
        color: Colors.navy,
        fontSize: screen.wp(5),
        fontWeight: 600,
        overflow: 'hidden',
        alignSelf: 'flex-end'
    }
})