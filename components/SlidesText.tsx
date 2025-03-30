import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { screen } from '@/constants/Responsive';
import { applyFont } from '@/constants/Fonts';

interface SlidesTextProps {
    title: string;
    subtitle: string;
}

const SlidesText = ({ title, subtitle }: SlidesTextProps) => {
    return (
        <View>
            <Text
                style={applyFont(styles.title)}
            >
                {title}
            </Text>
            <Text
                style={applyFont(styles.subtitle)}
            >
                {subtitle}
            </Text>
        </View>
    )
}

export default SlidesText

const styles = StyleSheet.create({
    title: {
        fontSize: screen.wp(6),
        fontWeight: 'bold',
        color: Colors.primaryText,
        textAlign: 'center',
        marginBottom: screen.hp(2),
    },
    subtitle: {
        fontSize: screen.wp(4),
        color: '#929292',
        textAlign: 'center',
        lineHeight: screen.hp(2),
        paddingHorizontal: screen.wp(3),
    }
})