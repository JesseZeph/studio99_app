import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import { useHeaderHeight } from '@react-navigation/elements'
import * as ImagePicker from 'expo-image-picker';
import Colors from '@/constants/Colors';
import { screen } from '@/constants/Responsive';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomInput from '@/components/CustomTextField';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
const CreatorProfileSetup = () => {
    const headerHeight = useHeaderHeight();
    const router = useRouter();
    const [image, setImage] = useState<string | null>(null);
    const [username, setUsername] = useState<string>('');
    const [displayName, setDisplayName] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (field: string, text: string) => {
        if (field === 'username') {
            setUsername(text);
        } else if (field === 'displayName') {
            setDisplayName(text);
        } else if (field === 'bio') {
            setBio(text);
        }

        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };
    const onCaptureImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.80,
            base64: true
        })
        if (!result.canceled) {
            const base64 = `data:image/jpeg;base64,${result.assets[0].base64}`
            setImage(base64);
        }
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={[defaultStyles.container, { marginTop: headerHeight }]} >
            <Text style={defaultStyles.text}>Set Up Your Profile</Text>

            <View style={{ alignItems: 'center' }}>
                <View style={styles.placeholder}>
                    {image ? <Image source={{ uri: image }} style={styles.avatar} /> : <Ionicons name='person-circle-outline' style={styles.icon} />}
                </View>
                <TouchableOpacity onPress={onCaptureImage}>
                    <Text style={[defaultStyles.text, styles.textContainer]}>Add Photo</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginBottom: screen.hp(4) }}>
                <CustomInput
                    containerStyle={{ marginTop: screen.hp(4) }}
                    placeholder="johndoe"
                    onChangeText={(text) => handleChange('username', text)}
                    error={errors.username}
                    textContentType="username"
                    label="Username"
                />
                <CustomInput
                    containerStyle={{ marginTop: screen.hp(4) }}
                    placeholder="John Doe"
                    onChangeText={(text) => handleChange('displayName', text)}
                    error={errors.displayName}
                    textContentType="givenName"
                    label="Display Name"
                />
                <CustomInput
                    containerStyle={{ marginTop: screen.hp(4) }}
                    placeholder="Bio"
                    onChangeText={(text) => handleChange('bio', text)}
                    error={errors.bio}
                    textContentType="none"
                    label="Bio"
                    multiline={true}
                    numberOfLines={4}
                />
            </View>
            <CustomButton text="Save and continue" onPress={() => {
                router.push('/(authenticated)/(creator)/(tabs)/home')
            }} loading={false} style={{ marginBottom: screen.hp(6) }} />

        </ScrollView>
    )
}

export default CreatorProfileSetup

const styles = StyleSheet.create({
    placeholder: {
        width: screen.wp(20),
        height: screen.wp(20),
        borderRadius: screen.wp(16),
        backgroundColor: '#E2E5EA',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: screen.wp(12)
    },
    icon: {
        color: Colors.lightGray,
        fontSize: screen.wp(10)

    },
    avatar: {
        width: screen.wp(20),
        height: screen.wp(20),
        borderRadius: screen.wp(16),
    },
    textContainer: {
        color: Colors.lightText,
        width: screen.wp(24),
        marginTop: screen.wp(4),
        borderWidth: 1,
        borderColor: '#BBC2CE',
        textAlign: 'center',
        borderRadius: screen.wp(1),
        padding: screen.wp(0.8),
    },


})