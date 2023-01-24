import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { cardViewShadow, font500, rem } from '@styles/settings';

export interface IStyles {
  container: ViewStyle;
  cardStyleContainer: ViewStyle;
  value: TextStyle;
  name: TextStyle;
}

export const getStyles = (): IStyles => StyleSheet.create<IStyles>({
  container: {
    width: rem(85),
    height: rem(85),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStyleContainer: {
    width: rem(95),
    height: rem(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: rem(14),
    ...cardViewShadow(rem(15), 'grey'),
  },
  value: {
    fontSize: rem(16),
    paddingTop: rem(10),
    fontFamily: font500,
    textAlign: 'center',
    color: '#444444',
  },
  name: {
    paddingTop: rem(3),
    fontSize: rem(8),
    fontFamily: font500,
    textAlign: 'center',
    color: '#999999',
  },
});
