import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const nomadButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: `${global.fontSize.small}`,
  fontWeight: '700',
  border: 'none',
  lineHeight: `${global.lineHeights.small}`,
  backgroundColor: `${global.color.nomadBlack}`,
  color: '#FFFFFF',
});
