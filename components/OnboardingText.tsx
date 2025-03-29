import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { screen } from '@/constants/Responsive';
interface OnboardingTextProps {
    title: string;
    subtitle: string;
}

const OnboardingText = ({ title, subtitle }: OnboardingTextProps) => {
    return (
        <View>

            <Text
                style={[
                    styles.title
                ]}
            >
                {title}
            </Text>
            <Text
                style={[
                    styles.subtitle,
                ]}
            >
                {subtitle}
            </Text>
        </View>
    )
}

export default OnboardingText

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
    }
})