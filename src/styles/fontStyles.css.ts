import { style } from '@vanilla-extract/css';
import { global } from './global.css';

/** 1. text3xl = fontSize: 32px, lineHeight: 42px
 * 2. text2xl = fontSize: 24px, lineHeight: 32px
 * 3. textXl = fontSize: 20px, lineHeight: 32px
 * 4. text2lg = fontSize: 18px, lineHeight: 26px
 * 5. textLg = fontSize: 16px, lineHeight: 26px
 * 6. textMd = fontSize: 14px, lineHeight: 24px
 * 7. textSm = fontSize: 13px, lineHeight: 22px
 * 8. textXs = fontSize: 12px, lineHeight: 18px
 */
export const fontSizes = {
  text3xl: style({
    fontSize: global.fontSize.xxLarge,
    lineHeight: global.lineHeights.large,
  }),
  text2xl: style({
    fontSize: global.fontSize.large,
    lineHeight: global.lineHeights.medium,
  }),
  textXl: style({
    fontSize: global.fontSize.medium,
    lineHeight: global.lineHeights.medium,
  }),
  text2lg: style({
    fontSize: global.fontSize.regular,
    lineHeight: global.lineHeights.small,
  }),
  textLg: style({
    fontSize: global.fontSize.small,
    lineHeight: global.lineHeights.small,
  }),
  textMd: style({
    fontSize: global.fontSize.xSmall,
    lineHeight: global.lineHeights.xSmall,
  }),
  textSm: style({
    fontSize: global.fontSize.tiny,
    lineHeight: global.lineHeights.tiny,
  }),
  textXs: style({
    fontSize: global.fontSize.xxTiny,
    lineHeight: global.lineHeights.xxTiny,
  }),
};

/** 1. bold = fontWeight: 700
 * 2. semiBold = fontWeight: 600
 * 3. medium = fontWeight: 500
 * 4. regular = fontWeight: 400
 */
export const fontWeights = {
  bold: style({ fontWeight: '700' }),
  semibold: style({ fontWeight: '600' }),
  medium: style({ fontWeight: '500' }),
  regular: style({ fontWeight: '400' }),
};
