import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { font500, rem } from '@styles/settings';

export interface IStyles {
  container: ViewStyle;
  iconContainer: ViewStyle;
  value: TextStyle;
}

export const getStyles = (): IStyles => StyleSheet.create<IStyles>({
  container: {
    width: rem(85),
    height: rem(85),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    overflow: 'hidden',
    height: rem(40),
    width: rem(40),
  },
  value: {
    fontSize: rem(17),
    fontFamily: font500,
    textAlign: 'center',
    color: '#000000',
  },
});
