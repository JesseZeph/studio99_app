import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { defaultStyles } from '@/constants/Styles'
import { applyFont } from '@/constants/Fonts'
import { screen } from '@/constants/Responsive'

const ProfileSetup = () => {
    return (
        <SafeAreaView style={defaultStyles.container}>
            <Text style={[applyFont(defaultStyles.headerBase)]}>Complete Your Creator Profile</Text>
            <Text style={[applyFont(defaultStyles.descriptionTextBase)]}>Set up your creator profile to start sharing content</Text>
            {/* Profile setup form will go here */}
        </SafeAreaView>
    )
}

export default ProfileSetup

const styles = StyleSheet.create({}) 