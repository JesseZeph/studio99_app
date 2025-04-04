import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import Colors from '@/constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from '@expo/vector-icons/build/Ionicons'
import { screen } from '@/constants/Responsive'

const LecturerLayout = () => {
    const router = useRouter();
    return (
        <Stack>
            <Stack.Screen
                name="profile-setup"
                options={{
                    title: "",
                    headerBackTitle: "",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTransparent: true,
                    // headerStyle: {
                    //     backgroundColor: Colors.background,

                    // },
                    headerLeft: () => (
                        <TouchableOpacity onPress={router.back}>
                            <Ionicons name='arrow-back' size={screen.wp(6)} color={Colors.primaryText} />
                        </TouchableOpacity>

                    )

                }}
            />
        </Stack>
    )
}

export default LecturerLayout

const styles = StyleSheet.create({})