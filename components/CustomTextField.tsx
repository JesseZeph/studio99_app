import Colors from '@/constants/Colors';
import { screen } from '@/constants/Responsive';
import { applyFont } from '@/constants/Fonts';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TextInputProps, ViewStyle } from 'react-native';

type TextContentType =
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode';

interface CustomInputProps extends Omit<TextInputProps, 'style'> {
    containerStyle?: ViewStyle;
    placeholder: string;
    onChangeText: (text: string) => void;
    error?: string;
    textContentType?: TextContentType;
    label?: string;
}

const CustomInput = ({ containerStyle, placeholder, onChangeText, label, error, ...props }: CustomInputProps) => {
    const [text, setText] = useState('');

    const handleTextChange = (text: string) => {
        setText(text);
        if (onChangeText) {
            onChangeText(text);
        }
    };

    return (
        <View style={containerStyle}>
            <Text style={applyFont(styles.label)}>{label}</Text>
            <View style={[styles.innerContainer, error && { borderColor: 'red' }]}>
                <View style={styles.inputContainer}>
                    <TextInput
                        {...props}
                        style={applyFont(styles.input)}
                        onChangeText={handleTextChange}
                        value={text}
                        placeholder={placeholder}
                        placeholderTextColor="#888"
                        textAlignVertical="center"
                        textContentType={props.textContentType}
                    />
                </View>
            </View>
            {error && <Text style={applyFont(styles.errorText)}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    innerContainer: {
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: 5,
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: screen.wp(2),
    },
    input: {
        flex: 1,
        fontSize: screen.wp(3.5),
        height: 50,
        paddingHorizontal: 10,
    },
    errorText: {
        marginTop: 5,
        fontSize: 14,
        color: 'red',
    },
    label: {
        fontSize: screen.wp(4),
        color: Colors.primaryText,
        marginBottom: screen.wp(2),
        opacity: 0.7,
    },
});

export default CustomInput;