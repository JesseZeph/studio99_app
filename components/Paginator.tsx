import { StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { screen } from '@/constants/Responsive';
interface PaginatorProps {
    data: any[];
    currentIndex: number;
}

const Paginator = ({ data, currentIndex }: PaginatorProps) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: screen.hp(4) }}>
            {data.map((_, i) => {
                return (
                    <View
                        key={i}
                        style={[
                            styles.dot,
                            i === currentIndex && styles.activeDot
                        ]}
                    />
                )
            })}
        </View>
    )
}

export default Paginator

const styles = StyleSheet.create({
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.gray
    },
    activeDot: {
        backgroundColor: Colors.navy,
        width: 20,
        opacity: 1
    }
})