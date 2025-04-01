import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '@/constants/Colors'
import { screen } from '@/constants/Responsive'
import { applyFont } from '@/constants/Fonts'

interface CustomButtonProps {
    text: string;
    onPress: () => void;
    loading: boolean;
}

const CustomButton = ({ text, onPress, loading }: CustomButtonProps) => {
    const [isLoading, setIsLoading] = useState(loading);

    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    const handlePress = () => {
        setIsLoading(!isLoading);
        onPress();
    }





    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <Text style={applyFont(styles.text)}>{text}</Text>
            )}
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.buttonColor,
        paddingVertical: screen.hp(2),
        width: '100%',
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: screen.wp(4),
        fontWeight: 'bold',
    },
})