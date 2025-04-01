import { Stack } from 'expo-router'
import React from 'react'

const CreatorLayout = () => {
    return (

        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="profile-setup"
            />
            {/* Add more student-specific screens here */}
        </Stack>


    )
}

export default CreatorLayout 