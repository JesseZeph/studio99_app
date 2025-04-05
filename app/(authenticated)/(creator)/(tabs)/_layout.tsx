import React from 'react';
import { Tabs } from 'expo-router';
import { StatusBar, Image } from 'react-native';
import { Images } from '@/constants/Images';
import { screen } from '@/constants/Responsive';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: 'white',

                    tabBarStyle: {
                        backgroundColor: 'black',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 80,
                        paddingTop: screen.hp(0.6),
                        borderTopWidth: 0.2,
                        elevation: 5,
                        overflow: 'hidden',
                    },
                    tabBarLabelStyle: {
                        paddingTop: screen.hp(1),
                        fontFamily: 'LeagueSpartan',
                        fontSize: screen.wp(3),
                        fontWeight: 'bold',
                    }
                }}>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color }) => <Ionicons name='home-outline' size={28} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="live"
                    options={{
                        title: 'Live Now',
                        tabBarIcon: ({ color }) => <Image source={Images.goLive}
                            style={{ width: 28, height: 28 }}
                        />,
                    }}
                />
                <Tabs.Screen
                    name="upload-files"
                    options={{
                        title: '',
                        tabBarIcon: ({ color }) => (
                            <Image source={Images.uploadIcon}
                                style={{ width: 28, height: 28, marginTop: screen.hp(1.3) }}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="updates"
                    options={{
                        title: 'Updates',
                        tabBarIcon: ({ color }) => <Ionicons name='notifications-outline' size={28} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <Image source={Images.logo}
                                style={{ width: 28, height: 28, borderRadius: 100, borderWidth: 1, borderColor: color }}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
}
