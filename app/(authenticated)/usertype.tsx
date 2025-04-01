import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { defaultStyles } from '@/constants/Styles'
import { screen } from '@/constants/Responsive'
import UserTypeCard from '@/components/UserTypeCard'
import { Images } from '@/constants/Images'
import { applyFont } from '@/constants/Fonts'
import { useRouter } from 'expo-router'
type UserType = 'student' | 'lecturer' | 'entertainment' | null;

const Page = () => {
    const router = useRouter()
    const [selectedType, setSelectedType] = useState<UserType>(null);

    return (
        <SafeAreaView style={defaultStyles.container}>
            <Text style={[applyFont(defaultStyles.headerBase), { alignSelf: 'flex-start', marginTop: screen.hp(5) }]}>How Do You Want To Explore?</Text>
            <Text style={[applyFont(defaultStyles.descriptionTextBase), { alignSelf: 'flex-start' }]}>Whether you're here to learn, teach, or create, we've got the perfect space for you!</Text>

            <View style={[styles.userTypeContainer, { marginTop: screen.hp(10) }]}>
                <UserTypeCard
                    title='Student'
                    image={Images.student}
                    description='Access your courses uploaded by lecturers'
                    onPress={() => {
                        setSelectedType('student')
                        router.push('/(authenticated)/(student)/profile-setup')
                    }}
                    isSelected={selectedType === 'student'}
                />
                <UserTypeCard
                    title='Lecturer'
                    image={Images.teacher}
                    description='Teach and share lessons with students'
                    onPress={() => {
                        setSelectedType('lecturer')
                        router.push('/(authenticated)/(lecturer)/profile-setup')
                    }}
                    isSelected={selectedType === 'lecturer'}
                />
            </View>
            <View style={{ alignItems: 'center', marginTop: screen.hp(4) }}>
                <UserTypeCard
                    title='Entertainment'
                    image={Images.video}
                    description='Upload, share, and monetize videos'
                    onPress={() => {
                        setSelectedType('entertainment')
                        router.push('/(authenticated)/(creator)/profile-setup')
                    }}
                    isSelected={selectedType === 'entertainment'}
                />
            </View>
        </SafeAreaView>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        width: screen.wp(40),
        height: screen.hp(20),
        backgroundColor: 'red',
    },
    userTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    }
})