import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const whiteButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: `${global.fontSize.small}`,
  fontWeight: '700',
  border: `1px solid ${global.color.nomadBlack}`,
  lineHeight: `${global.lineHeights.small}`,
  backgroundColor: '#FFFFFF',
  color: `${global.color.nomadBlack}`,
});
