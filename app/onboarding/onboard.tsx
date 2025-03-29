import { FlatList, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Paginator from '@/components/Paginator'
import Page1 from '@/components/First'
import Page2 from '@/components/Second'
import Page3 from '@/components/Third'
import Colors from '@/constants/Colors'
import { screen } from '@/constants/Responsive'
const { width } = Dimensions.get('window');

const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(0);
    const flatListRef = useRef<FlatList | null>(null);

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
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={({ item: Component }) => (
                    <View style={{ width }}>
                        <Component />
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
            <View style={styles.bottomContainer}>
                <Paginator data={data} currentIndex={currentIndex} />
                <TouchableOpacity onPress={handleNext} style={styles.buttonContainer}>
                    <Text style={styles.textButton}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    bottomContainer: {
        paddingBottom: screen.hp(10),
        paddingHorizontal: screen.wp(5),
    },
    buttonContainer: {
        marginTop: screen.hp(3),
    },
    textButton: {
        color: Colors.navy,
        fontSize: screen.wp(5),
        fontWeight: '600',
        overflow: 'hidden',
        alignSelf: 'flex-end'
    }
})