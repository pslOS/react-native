import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { font300, font400, font500, font500Italic, rem } from '@styles/settings';

export interface IStyle {
  container: ViewStyle;
  title: TextStyle;
  searchContainer: ViewStyle;
  textInput: TextStyle ;
  icon: ImageStyle ;
  itemContainer: ViewStyle;
  city: TextStyle;
  temperature: TextStyle;
}

export const getStyles = (): IStyle => StyleSheet.create<IStyle>({
  container: {
    marginTop: rem(30),
  },
  title: {
    paddingTop: rem(28),
    paddingBottom: rem(28),
    fontSize: rem(16),
    fontFamily: font500,
    textAlign: 'center',
    color: '#999999',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: rem(40),
    marginStart: rem(19),
    marginEnd: rem(19),
    marginBottom: rem(28),
    backgroundColor: '#F3F3F3',
  },
  textInput: {
    flex: 1,
    fontFamily: font500Italic,
    paddingStart: rem(15),
    paddingEnd: rem(15),
    fontSize: rem(18),
  },
  icon: {
    alignItems: 'center',
    width: rem(16),
    height: rem(16),
    resizeMode: 'contain',
    marginEnd: rem(12),
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: rem(35),
    paddingEnd: rem(35),
    height: rem(30),
    alignItems: 'center',
  },
  city: {
    fontSize: rem(18),
    fontFamily: font400,
    color: '#444444',
  },
  temperature: {
    fontSize: rem(16),
    fontFamily: font300,
    color: '#666666',
  },
});
