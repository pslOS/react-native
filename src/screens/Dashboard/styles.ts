import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { font400, font500, font300, rem } from '@styles/settings';

export interface IStyle {
  container: ViewStyle;
  topContainer: ViewStyle;
  bottomContainer: ViewStyle;
  date: TextStyle;
  info: TextStyle;
  error: TextStyle;
  locationContainer: ViewStyle;
  location: TextStyle;
  currentTemperatureContainer: ViewStyle;
  temperatureSign: TextStyle;
  currentTemperature: TextStyle;
  temperatureUnit: TextStyle;
  todayTemperatureContainer: ViewStyle;
  todayTemperature: TextStyle;
  icon: ImageStyle;
  row: ViewStyle;
  rowForecast: ViewStyle;
  loading: ViewStyle;
}

export const getStyles = (): IStyle => StyleSheet.create<IStyle>({
  container: {
    marginTop: rem(-25),
  },
  topContainer: {
    flexDirection: 'row',
    height: rem(48),
  },
  bottomContainer: {
    paddingBottom: rem(25),
  },
  date: {
    paddingStart: rem(6),
    paddingTop: rem(18),
    fontSize: rem(14),
    fontFamily: font400,
    color: '#999999',
  },
  info: {
    textAlign: 'center',
    fontFamily: font400,
    fontSize: rem(20),
    color: '#999999',
  },
  error: {
    paddingTop: rem(18),
    textAlign: 'center',
    fontFamily: font400,
    fontSize: rem(14),
    color: 'red',
  },
  locationContainer: {
    flex: 1,
    fontFamily: font500,
    flexDirection: 'row',
    marginStart: rem(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(13, 159, 234, 0.08)',
    borderBottomLeftRadius: rem(25),
  },
  location: {
    fontSize: rem(16),
    fontFamily: font500,
    color: '#0DA0EA',
    paddingEnd: rem(6),
  },
  currentTemperatureContainer: {
    flexDirection: 'row',
    width: rem(110),
    height: rem(85),
  },
  currentTemperature: {
    flex: 1,
    fontSize: rem(64),
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: font300,
    color: '#000000',
  },
  temperatureSign: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: rem(27),
    fontFamily: font500,
    color: '#666666',
  },
  temperatureUnit: {
    fontSize: rem(24),
    paddingTop: rem(13),
    fontFamily: font500,
    color: '#666666',
  },
  todayTemperatureContainer: {
    width: rem(85),
    height: rem(85),
    alignItems: 'center',
    justifyContent: 'center',
  },
  todayTemperature: {
    fontSize: rem(16),
    paddingTop: rem(5),
    fontFamily: font300,
    color: '#666666',
  },
  icon: {
    alignItems: 'center',
    width: rem(12),
    height: rem(12),
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: rem(11),
    paddingStart: rem(25),
    paddingEnd: rem(25),
    paddingBottom: rem(11),
  },
  rowForecast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: rem(10),
    paddingStart: rem(20),
    paddingEnd: rem(20),
    paddingBottom: rem(30),
  },
  loading: {
    marginTop: rem(30),
  },
});
