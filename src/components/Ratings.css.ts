import { style } from '@vanilla-extract/css';

// import global from '@/styles/global.css';

export const ratings = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});

export const defaultIcon = style({
  height: '16px',
});

export const smallIcon = style({
  height: '14px',
});

export const darkModeText = style({
  color: '#ffffff',
});

export const defaultModeText = style({
  color: '#1B1B1B',
});

export const smallSizeText = style({
  fontSize: '14px',
});

export const defaultSizeText = style({
  fontSize: '16px',
});
