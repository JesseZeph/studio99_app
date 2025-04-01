import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { applyFont } from '@/constants/Fonts'
import { Images } from '@/constants/Images'
import { defaultStyles } from '@/constants/Styles'
import { screen } from '@/constants/Responsive'
import Colors from '@/constants/Colors'

interface LogoHeaderProps {
    title: string
    subtitle: string
}

const LogoHeader = ({ title, subtitle }: LogoHeaderProps) => {
    return (
        <View>
            <View style={styles.logoContainer}>
                <Image source={Images.logo} style={styles.logo} />
                <Text style={[applyFont(defaultStyles.headerBase), { alignSelf: 'flex-start' }]}>{title}</Text>
                <Text style={[applyFont(defaultStyles.descriptionTextBase), { alignSelf: 'flex-start' }]}>{subtitle}</Text>
            </View>
        </View>
    )
}

export default LogoHeader

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: screen.wp(20),
        height: screen.wp(20),
    },
    subtitle: {
        fontSize: screen.wp(4),
        lineHeight: screen.hp(3),
        color: Colors.lightGray,
    },
})