import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const ratings = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const defaultIcon = style({
  height: '1.6rem',
});

export const smallIcon = style({
  height: '1.4rem',
});

export const darkModeText = style({
  color: '#ffffff',
});

export const defaultModeText = style({
  color: `1px solid ${global.color.black}`,
});

export const smallSizeText = style({
  fontSize: '1.4rem',
});

export const defaultSizeText = style({
  fontSize: '1.6rem',
});
