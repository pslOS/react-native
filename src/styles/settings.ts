import { Dimensions } from 'react-native';

// Style fonts const see: https://fonts.google.com/specimen/Barlow
export const font300 = 'Barlow-Light';
export const font400 = 'Barlow-Regular';
export const font500 = 'Barlow-Medium';
export const font500Italic = 'Barlow-MediumItalic';

export const entireScreenWidth = Dimensions.get('window').width;
export const rem = (remValue = 1): number => (remValue * entireScreenWidth) / 375;

export const getSize = (): { width: number, height: number } => ({
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
});

export function screenShadow(elevation: number, shadowColor: string): object {
  return {
    elevation,
    shadowColor,
    shadowOffset: { width: 0, height: -elevation },
    shadowOpacity: 0.5,
    shadowRadius: 0.6 * elevation,
  };
}

export function cardViewShadow(elevation: number, shadowColor: string): object {
  return {
    elevation,
    shadowColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 0.6 * elevation,
  };
}
