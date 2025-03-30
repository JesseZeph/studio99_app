import { TextStyle } from 'react-native';

export const FONTS = {
  LEAGUE_SPARTAN: 'LeagueSpartan',
};

export const applyFont = (style: TextStyle = {}, fontFamily = FONTS.LEAGUE_SPARTAN): TextStyle => {
  return {
    ...style,
    fontFamily,
  };
};

export default FONTS; 