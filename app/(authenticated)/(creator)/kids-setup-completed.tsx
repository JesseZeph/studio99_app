import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useHeaderHeight } from '@react-navigation/elements'
import { defaultStyles } from '@/constants/Styles'
import { Images } from '@/constants/Images'
import { screen } from '@/constants/Responsive'
import CustomButton from '@/components/CustomButton'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '@/constants/Colors'


const KidsSetupCompleted = () => {
    const headerHeight = useHeaderHeight();
    return (
        <View style={[defaultStyles.container, { marginTop: headerHeight, justifyContent: 'center', alignItems: 'center' }]}>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Image source={Images.studioMascot} style={styles.mascot} />
                <Ionicons name='checkmark-circle' size={screen.wp(5)} color='#079336' />
            </View>
            <Text style={[defaultStyles.header, { marginTop: screen.hp(8) }]}>You're All Set</Text>
            <Text style={[defaultStyles.text, { marginTop: screen.hp(2), marginBottom: screen.hp(8), textAlign: 'center', color: Colors.lightText }]}>Your Parental PIN has been successfully created. This PIN will be required anytime you want to switch to General Mode on Studio99.</Text>
            <CustomButton text={'Continue to Kids Mode'} onPress={() => { }} loading={false} />
        </View>
    )
}

export default KidsSetupCompleted

const styles = StyleSheet.create({
    mascot: {
        width: screen.wp(20),
        height: screen.wp(30),
    }
})