import { recipe } from '@vanilla-extract/recipes';
import { global } from './global.css';

export const fontStyle = recipe({
  variants: {
    size: {
      text3xl: {
        fontSize: global.fontSize.xxLarge,
        lineHeight: global.lineHeights.large,
      },
      text2xl: {
        fontSize: global.fontSize.large,
        lineHeight: global.lineHeights.medium,
      },
      textXl: {
        fontSize: global.fontSize.medium,
        lineHeight: global.lineHeights.medium,
      },
      text2lg: {
        fontSize: global.fontSize.regular,
        lineHeight: global.lineHeights.small,
      },
      textLg: {
        fontSize: global.fontSize.small,
        lineHeight: global.lineHeights.small,
      },
      textMd: {
        fontSize: global.fontSize.xSmall,
        lineHeight: global.lineHeights.xSmall,
      },
      textSm: {
        fontSize: global.fontSize.tiny,
        lineHeight: global.lineHeights.tiny,
      },
      textXs: {
        fontSize: global.fontSize.xxTiny,
        lineHeight: global.lineHeights.xxTiny,
      },
    },
    weight: {
      bold: { fontWeight: '700' },
      semibold: { fontWeight: '600' },
      medium: { fontWeight: '500' },
      regular: { fontWeight: '400' },
    },
  },
  defaultVariants: {
    size: 'textLg',
    weight: 'regular',
  },
});
