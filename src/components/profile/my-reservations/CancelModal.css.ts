import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const content = style({
  width: '250px',
  height: '120px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '17px',
});

export const checkmark = style({
  width: '24px',
  height: '24px',
  borderRadius: '24px',
  backgroundColor: `${global.color.black}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const message = style({
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: '400',
  color: `${global.color.black}`,
});

export const buttonBar = style({
  display: 'flex',
  gap: '8px',
  marginTop: 'auto',
});

export const button = style({
  display: 'block',
  width: '80px',
  height: '38px',
  borderRadius: '8px',
  fontSize: '14px',
});
