import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { applyFont } from './Fonts';

// Base styles without fonts applied
const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    marginHorizontal: 16,
    marginVertical: 20
  },
  headerBase: {
    fontSize: 22,
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
    fontSize: 18,
    marginTop: 20,
    color: Colors.gray,
  },
  buttonTextBase: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  pillButtonSmall: {
    paddingHorizontal: 20,
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
  descriptionText: applyFont(baseStyles.descriptionTextBase),
  buttonText: applyFont(baseStyles.buttonTextBase),
  buttonTextSmall: applyFont(baseStyles.buttonTextSmallBase),
  sectionHeader: applyFont(baseStyles.sectionHeaderBase),
};