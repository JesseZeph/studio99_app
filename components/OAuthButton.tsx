import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { screen } from '@/constants/Responsive'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { applyFont } from '@/constants/Fonts'
import { defaultStyles } from '@/constants/Styles'

interface OAuthButtonProps {
    onPress: () => void
    icon: 'google' | 'apple'
    text: string
}

const OAuthButton = ({ onPress, icon, text }: OAuthButtonProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Ionicons name={icon === 'google' ? 'logo-google' : 'logo-apple'} size={24} />
            <Text style={[applyFont(defaultStyles.buttonTextBase)]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default OAuthButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: screen.wp(5),
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: screen.wp(2),
        paddingVertical: screen.hp(1),
    }
})