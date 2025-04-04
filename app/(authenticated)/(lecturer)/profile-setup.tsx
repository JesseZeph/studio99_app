import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import { screen } from '@/constants/Responsive'
import LogoHeader from '@/components/LogoHeader'
import CustomInput from '@/components/CustomTextField'
import CustomButton from '@/components/CustomButton'
import { useHeaderHeight } from '@react-navigation/elements'


const ProfileSetup = () => {
    const headerHeight = useHeaderHeight();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');
    const [faculty, setFaculty] = useState('');
    const [course, setCourse] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (text: string, field: string) => {
        setFirstName(text);
        setLastName(text);
        setEmail(text);
        setUniversity(text);
        setFaculty(text);
        setCourse(text);
        if (errors) {
            setErrors(prev => ({ ...prev, firstName: '', lastName: '', email: '', university: '', faculty: '', course: '' }));
        }
    };


    return (
        <View style={[defaultStyles.container, { marginTop: headerHeight }]}>
            <ScrollView showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true} style={{ marginBottom: screen.hp(5) }}>
                <LogoHeader title="Complete Your Profile" subtitle="Help us personalize your teaching experience" />

                <CustomInput
                    containerStyle={{ marginTop: screen.hp(4) }}
                    placeholder="John Doe"
                    onChangeText={handleChange.bind(null, 'firstName')}
                    error={errors.firstName}
                    textContentType="givenName"
                    label="Your full name"
                />
                <CustomInput
                    containerStyle={{ marginTop: screen.hp(4) }}
                    placeholder="john@doe.com"
                    onChangeText={handleChange.bind(null, 'email')}
                    error={errors.firstName}
                    textContentType="emailAddress"
                    label="Email address"
                />
                <CustomInput
                    containerStyle={{ marginTop: screen.hp(4) }}
                    placeholder="University of California, Los Angeles"
                    onChangeText={handleChange.bind(null, 'university')}
                    error={errors.firstName}
                    textContentType="organizationName"
                    label="University name"
                />
                <CustomInput
                    containerStyle={{ marginTop: screen.hp(4) }}
                    placeholder="Faculty of Science"
                    onChangeText={handleChange.bind(null, 'faculty')}
                    error={errors.firstName}
                    textContentType="organizationName"
                    label="Faculty"
                />
                <CustomInput
                    containerStyle={{ marginTop: screen.hp(4) }}
                    placeholder="Computer Science"
                    onChangeText={handleChange.bind(null, 'course')}
                    error={errors.firstName}
                    textContentType="organizationName"
                    label="What do you teach?"
                />

            </ScrollView>
            <CustomButton text="Save and continue" onPress={() => { }} loading={false} />
        </View>
    )
}

export default ProfileSetup

const styles = StyleSheet.create({

}) 