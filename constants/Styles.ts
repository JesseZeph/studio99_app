import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { applyFont } from './Fonts';
import { screen } from './Responsive';
// Base styles without fonts applied
const baseStyles = StyleSheet.create({
  container: {
     flex: 1,
    marginHorizontal: screen.wp(6),
    paddingBottom: screen.hp(4)
  },
  headerBase: {
    fontSize: screen.wp(5),
    fontWeight: '500',
  },
  pillButton: {
    padding: 10,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLinkBase: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: '500',
  },
  descriptionTextBase: {
    fontSize: screen.wp(4),
    marginTop: screen.hp(1),
    color: Colors.lightGray,
    lineHeight: screen.wp(5),
  },

  textBase: {
    fontSize: screen.wp(3.7),
    lineHeight: screen.wp(5),
  },

  buttonTextBase: {
    fontSize: screen.wp(4),
    fontWeight: '500',
  },
  pillButtonSmall: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextSmallBase: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  sectionHeaderBase: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 10,
  },
  block: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 20,
  },
});

export const defaultStyles = {
  ...baseStyles,
  header: applyFont(baseStyles.headerBase),
  textLink: applyFont(baseStyles.textLinkBase),
  text: applyFont(baseStyles.textBase),
  descriptionText: applyFont(baseStyles.descriptionTextBase),
  buttonText: applyFont(baseStyles.buttonTextBase),
  buttonTextSmall: applyFont(baseStyles.buttonTextSmallBase),
  sectionHeader: applyFont(baseStyles.sectionHeaderBase),
};