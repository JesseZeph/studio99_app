import { StyleSheet, Text, View, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { screen } from '@/constants/Responsive'
import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { applyFont } from '@/constants/Fonts'

interface UserTypeCardProps {
    title: string
    description: string
    image: ImageSourcePropType
    onPress: () => void
    isSelected: boolean

}


const UserTypeCard = ({ title, image, onPress, isSelected, description }: UserTypeCardProps) => {
    const [selected, setSelected] = useState(isSelected)

    useEffect(() => {
        setSelected(isSelected)
    }, [isSelected])

    const handlePress = () => {
        setSelected(!selected)
        onPress()
    }

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: selected ? '#1B5CD5' : Colors.background }]} onPress={handlePress} >
            <Image source={image} style={styles.image} />
            <Text style={[applyFont(styles.header), { color: selected ? '#fff' : Colors.primaryText }]}>{title}</Text>
            <Text style={[applyFont(styles.description), { color: selected ? '#fff' : Colors.lightGray }]}>{description}</Text>
        </TouchableOpacity>
    )
}

export default UserTypeCard

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screen.wp(40),
        height: screen.hp(22),
        paddingHorizontal: screen.wp(4),
        paddingVertical: screen.hp(4),
        borderRadius: 10,
        backgroundColor: Colors.background,
        shadowColor: Colors.lightGray,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: screen.wp(10),
        height: screen.wp(10),
        borderRadius: 10,
    },
    header: {
        fontSize: screen.wp(4),
        fontWeight: '500',
        marginTop: screen.hp(3),

    },
    description: {
        fontSize: screen.wp(3.2),
        marginTop: screen.hp(1),
        textAlign: 'center',
    }

})