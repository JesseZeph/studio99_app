import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { defaultStyles } from '@/constants/Styles'
import { applyFont } from '@/constants/Fonts'
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
    const [department, setDepartment] = useState('');
    const [course, setCourse] = useState('');
    const [level, setLevel] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (text: string, field: string) => {
        setFirstName(text);
        setLastName(text);
        setEmail(text);
        setUniversity(text);
        setDepartment(text);
        setCourse(text);
        setLevel(text);
        if (errors) {
            setErrors(prev => ({ ...prev, firstName: '', lastName: '', email: '', university: '', department: '', course: '', level: '' }));
        }
    };

    return (
        <View style={[defaultStyles.container, { marginTop: headerHeight }]}>
            <ScrollView showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true} style={{ marginBottom: screen.hp(5) }}>
                <LogoHeader title="Complete Your Student Profile" subtitle="Help us personalize your learning experience" />

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
                    placeholder="Computer Science"
                    onChangeText={handleChange.bind(null, 'department')}
                    error={errors.firstName}
                    textContentType="organizationName"
                    label="Department"
                />


                <CustomInput
                    containerStyle={{ marginTop: screen.hp(4) }}
                    placeholder="Computer Science"
                    onChangeText={handleChange.bind(null, 'course')}
                    error={errors.firstName}
                    textContentType="none"
                    label="What course do you study?"
                />
                <CustomInput
                    containerStyle={{ marginTop: screen.hp(4) }}
                    placeholder="1st year"
                    onChangeText={handleChange.bind(null, 'level')}
                    error={errors.firstName}
                    textContentType="none"
                    label="What level are you?"
                />
            </ScrollView>
            <CustomButton text="Next" onPress={() => { }} loading={false} />
        </View>
    )
}

export default ProfileSetup

const styles = StyleSheet.create({

}) 