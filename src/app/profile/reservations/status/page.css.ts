import { style } from '@vanilla-extract/css';

// import { global } from '@/styles/global.css';

export const content = style({
  width: '800px',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  paddingBottom: '10rem',
});

export const header = style({
  fontSize: '3.2rem',
  fontWeight: '700',
});
