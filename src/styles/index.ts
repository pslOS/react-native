import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { screenShadow, rem } from '@styles/settings';

export interface IGeneralStyle {
  defaultScreenContainer: ViewStyle;
  contentContainer: ViewStyle;
  headerImage: ImageStyle;
  iconContainer: ViewStyle;
  icon: ImageStyle;
}

export const getCommonStyles = (): IGeneralStyle => StyleSheet.create<IGeneralStyle>({
  defaultScreenContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderTopRightRadius: rem(25),
    borderTopLeftRadius: rem(25),
    ...screenShadow(rem(10), 'grey'),
  },
  headerImage: {
    aspectRatio: 1.2,
    width: '100%',
    height: undefined,
    resizeMode: 'cover',
  },
  iconContainer: {
    overflow: 'hidden',
    height: rem(24),
    width: rem(24),
  },
  icon: {
    alignItems: 'center',
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'contain',
  },
});
