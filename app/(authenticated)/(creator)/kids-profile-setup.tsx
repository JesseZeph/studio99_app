import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment, useState } from 'react'
import { useHeaderHeight } from '@react-navigation/elements'
import { defaultStyles } from '@/constants/Styles';
import LogoHeader from '@/components/LogoHeader';
import { screen } from '@/constants/Responsive';
import { useBlurOnFulfill, useClearByFocusCell, CodeField, Cursor } from 'react-native-confirmation-code-field';
import Colors from '@/constants/Colors';
import { Dropdown } from 'react-native-element-dropdown';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CustomButton from '@/components/CustomButton';
import { applyFont } from '@/constants/Fonts';
import { useRouter } from 'expo-router';
const CELL_COUNT = 4;

const durationData = [
    { label: '1 hour', value: '1' },
    { label: '2 hours', value: '2' },
    { label: '3 hours', value: '3' },
]


const KidsProfileSetup = () => {
    const headerHeight = useHeaderHeight();
    const router = useRouter();

    const [pin, setPin] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [duration, setDuration] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const ref = useBlurOnFulfill({ value: pin, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value: pin,
        setValue: setPin,
    });




    return (
        <View style={[defaultStyles.container, { marginTop: headerHeight }]}>
            <LogoHeader title={'Parental Control'} subtitle={'Parents, set up Kids Mode to ensure a safe experience for your kid below the age of 14 years'} />


            <View style={{ marginTop: screen.hp(5) }}>
                <Text style={defaultStyles.text}>Set PIN lock</Text>

                <CodeField
                    ref={ref}
                    {...props}
                    value={pin}
                    onChangeText={setPin}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    testID="my-code-input"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Fragment key={index}>
                            <View
                                onLayout={getCellOnLayoutHandler(index)}
                                key={index}
                                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                                <Text style={[defaultStyles.text, { fontSize: screen.wp(5) }]}>
                                    {symbol ? '•' : (isFocused ? <Cursor /> : null)}
                                </Text>
                            </View>
                        </Fragment>
                    )}
                />

                <Text style={[defaultStyles.text, { marginTop: screen.hp(5) }]}>Set screen time limit</Text>

                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={applyFont(styles.placeholderStyle)}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    containerStyle={styles.dropdownContainer}
                    data={durationData}
                    maxHeight={200}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select duration' : '...'}
                    value={duration}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setDuration(item.value);
                        setIsFocus(false);
                    }}
                />

                <View style={styles.checkboxContainer}>
                    <BouncyCheckbox
                        size={25}
                        fillColor={Colors.buttonColor}
                        unFillColor="#FFFFFF"
                        disableText={true}
                        iconStyle={{ borderColor: Colors.buttonColor, borderRadius: 0 }}
                        innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}
                        textStyle={{ fontFamily: "LeagueSpartan" }}
                        onPress={(isChecked: boolean) => { setIsChecked(isChecked) }}
                    />

                    <Text style={[defaultStyles.text, styles.termsText]}>By signing up, you agree to our Terms of Service and Privacy Policy.</Text>


                </View>
                <CustomButton text={'Create kids account'} onPress={() => { router.push('/kids-setup-completed') }} loading={false} />

            </View>

        </View>
    )
}

export default KidsProfileSetup

const styles = StyleSheet.create({
    focusCell: {
        paddingBottom: screen.wp(1),
        color: Colors.primaryText
    },
    codeFieldRoot: {
        marginTop: screen.hp(2),
    },
    cellRoot: {
        width: screen.wp(12),
        height: screen.wp(12),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.lightPrimary,
        borderRadius: screen.wp(2)
    },
    dropdown: {
        height: screen.wp(12),
        borderColor: Colors.lightPrimary,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginVertical: screen.hp(2),
    },

    icon: {
        marginRight: 5,
    },
    label: {
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: screen.wp(4),
    },
    placeholderStyle: {
        fontSize: screen.wp(4),
    },
    selectedTextStyle: {
        fontSize: screen.wp(4),
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    dropdownContainer: {
        marginTop: screen.hp(-10),
        borderRadius: 8,
        overflow: 'hidden'
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: screen.wp(5),
        marginTop: screen.hp(8),
        marginBottom: screen.hp(5),
    },
    termsText: {
        flex: 1,
        flexWrap: 'wrap',
    }
})