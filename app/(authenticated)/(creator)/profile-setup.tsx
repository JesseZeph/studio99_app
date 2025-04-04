import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import { applyFont } from '@/constants/Fonts'
import { screen } from '@/constants/Responsive'
import { useHeaderHeight } from '@react-navigation/elements'

import { Images } from '@/constants/Images'
import Colors from '@/constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router';
const ProfileSetup = () => {
    const router = useRouter();
    const headerHeight = useHeaderHeight();
    return (
        <View style={[defaultStyles.container, { marginTop: headerHeight, alignItems: 'center', justifyContent: 'center' }]}>
            <View style={{ alignItems: 'center', gap: screen.wp(10) }}>
                <Text style={applyFont(styles.text, 'bold')}>Who will be using this account?</Text>

                <View style={styles.container}>
                    <TouchableOpacity style={{ gap: screen.wp(2) }} onPress={() => router.push('/kids-profile-setup')}>
                        <Image source={Images.kids} style={styles.image} />
                        <Text style={[styles.text, { fontFamily: 'Lemon' }]}>Kids</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ gap: screen.wp(2) }} onPress={() => router.push('/creator-profile-setup')}>
                        <LinearGradient colors={['#3AB5FF', '#1976D2']} start={{ x: 1.1, y: 0 }} end={{ x: 0.7, y: 1 }}
                            style={styles.iconContainer}>
                            <Image source={Images.videoIcon} style={[styles.image, { width: screen.wp(10), height: screen.wp(10) }]} />
                        </LinearGradient>

                        <Text style={applyFont(styles.text, 'bold')}>General</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default ProfileSetup

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        gap: screen.wp(10),
    },
    text: {
        fontSize: screen.wp(4),
        color: Colors.primaryText,
        textAlign: 'center',
    },
    image: {
        width: screen.wp(30),
        height: screen.wp(30),
        borderRadius: screen.wp(2),
    },

    iconContainer: {
        width: screen.wp(30),
        height: screen.wp(30),
        borderRadius: screen.wp(3),
        alignItems: 'center',
        justifyContent: 'center',
    }
}) 