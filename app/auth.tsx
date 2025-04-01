import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { defaultStyles } from '@/constants/Styles'
import { Images } from '@/constants/Images'
import { screen } from '@/constants/Responsive'
import { applyFont } from '@/constants/Fonts'
import Colors from '@/constants/Colors'
import OAuthButton from '@/components/OAuthButton'
import { useRouter } from 'expo-router'
import LogoHeader from '@/components/LogoHeader'

enum AuthType {
    Apple, Google

}


const Page = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const onPress = async (authType: AuthType) => {
        if (authType === AuthType.Google) {
            setIsLoading(true)
            router.replace('/usertype')
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }
        if (authType === AuthType.Apple) {
            setIsLoading(true)
            router.replace('/usertype')
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }
    }

    return (
        <SafeAreaView style={defaultStyles.container}>
            <LogoHeader title='Hi there! Let’s get started' subtitle='How would you like to create your account?' />
            <View style={[styles.oauthContainer, { marginTop: screen.hp(10) }]}>
                <OAuthButton onPress={() => onPress(AuthType.Google)} icon='google' text='Continue with Google' />
                <OAuthButton onPress={() => onPress(AuthType.Apple)} icon='apple' text='Continue with Apple' />
            </View>
        </SafeAreaView>
    )
}

export default Page

const styles = StyleSheet.create({

    oauthContainer: {
        gap: screen.hp(5),
    }
})