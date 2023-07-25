import {fontScale} from '../utils/scaling';
import {StyleProp} from 'react-native';
import colors from './colors';

export const FONT_FAMILY = {
  EXTRA_LIGHT: 'Sora-ExtraLight',
  LIGHT: 'Sora-Light',
  THIN: 'Sora-Thin',
  MEDIUM: 'Sora-Medium',
  REGULAR: 'Sora-Regular',
  SEMI_BOLD: 'Sora-SemiBold',
  BOLD: 'Sora-Bold',
  EXTRA_BOLD: 'Sora-ExtraBold',
};

export const getVariantStyle = (variant: string): StyleProp<{}> => {
  switch (variant) {
    case 'displayLarge':
      return {
        fontFamily: FONT_FAMILY.REGULAR,
        fontSize: fontScale(57),
        fontWeight: '400',
        letterSpacing: 0,
      };
    case 'displayMedium':
      return {
        fontFamily: FONT_FAMILY.REGULAR,
        fontSize: fontScale(45),
        fontWeight: '400',
        letterSpacing: 0,
      };
    case 'displaySmall':
      return {
        fontFamily: FONT_FAMILY.REGULAR,
        fontSize: fontScale(36),
        fontWeight: '400',
        letterSpacing: 0,
      };
    case 'headlineLarge':
      return {
        fontFamily: FONT_FAMILY.REGULAR,
        fontSize: fontScale(32),
        fontWeight: '400',
        letterSpacing: 0,
        color: colors.gray8,
      };
    case 'headlineMedium':
      return {
        fontFamily: FONT_FAMILY.REGULAR,

        fontSize: fontScale(28),
        fontWeight: '400',
        letterSpacing: 0,
      };
    case 'headlineSmall':
      return {
        fontFamily: FONT_FAMILY.REGULAR,

        fontSize: fontScale(24),
        fontWeight: '400',
        letterSpacing: 0,
      };
    case 'titleLarge':
      return {
        fontFamily: FONT_FAMILY.REGULAR,

        fontSize: fontScale(22),
        fontWeight: '400',
        letterSpacing: 0,
      };
    case 'titleMedium':
      return {
        fontFamily: FONT_FAMILY.MEDIUM,

        fontSize: fontScale(16),
        fontWeight: '500',
        letterSpacing: 0.15,
      };
    case 'titleSmall':
      return {
        fontFamily: FONT_FAMILY.MEDIUM,

        fontSize: fontScale(14),
        fontWeight: '500',
        letterSpacing: 0.1,
      };
    case 'labelLarge':
      return {
        fontFamily: FONT_FAMILY.MEDIUM,

        fontSize: fontScale(14),
        fontWeight: '500',
        letterSpacing: 0.1,
      };
    case 'labelMedium':
      return {
        fontFamily: FONT_FAMILY.MEDIUM,

        fontSize: fontScale(12),
        fontWeight: '500',
        letterSpacing: 0.5,
      };
    case 'labelSmall':
      return {
        fontFamily: FONT_FAMILY.MEDIUM,

        fontSize: fontScale(11),
        fontWeight: '500',
        letterSpacing: 0.5,
      };
    case 'bodyLarge':
      return {
        fontFamily: FONT_FAMILY.MEDIUM,

        fontSize: fontScale(16),
        fontWeight: '400',
        letterSpacing: 0.5,
      };
    case 'bodyMedium':
      return {
        fontFamily: FONT_FAMILY.REGULAR,

        fontSize: fontScale(14),
        fontWeight: '400',
        letterSpacing: 0.25,
      };
    case 'bodySmall':
      return {
        fontFamily: FONT_FAMILY.REGULAR,

        fontSize: fontScale(12),
        fontWeight: '400',
        letterSpacing: 0.4,
      };
    default:
      return {};
  }
};
