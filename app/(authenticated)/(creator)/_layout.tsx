import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { screen } from '@/constants/Responsive';

const CreatorLayout = () => {
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
                    headerStyle: {
                        backgroundColor: Colors.background,

                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={router.back}>
                            <Ionicons name='arrow-back' size={screen.wp(6)} color={Colors.primaryText} />
                        </TouchableOpacity>

                    )

                }}
            />

            <Stack.Screen
                name="kids-profile-setup"
                options={{
                    title: "",
                    headerBackTitle: "",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTransparent: true,

                    headerLeft: () => (
                        <TouchableOpacity onPress={router.back}>
                            <Ionicons name='arrow-back' size={screen.wp(6)} color={Colors.primaryText} />
                        </TouchableOpacity>

                    )
                }}
            />

            <Stack.Screen
                name="kids-setup-completed"
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="creator-profile-setup"
                options={{
                    title: "",
                    headerBackTitle: "",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: Colors.background,

                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={router.back}>
                            <Ionicons name='arrow-back' size={screen.wp(6)} color={Colors.primaryText} />
                        </TouchableOpacity>

                    )

                }}
            />

            <Stack.Screen name='(tabs)' options={{
                headerShown: false

            }} />

        </Stack>
    )
}

export default CreatorLayout 