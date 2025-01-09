import { style } from '@vanilla-extract/css';

// import { global } from '@/styles/global.css';

export const content = style({
  width: '792px',
});

export const contentHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
});

export const history = style({
  fontWeight: '700',
  fontSize: '3.2rem',
  lineHeight: '3.8rem',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',
});

export const ref = style({
  height: '5px',
});
