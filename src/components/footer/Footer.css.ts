import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const footer = style({
  bottom: '0',
  backgroundColor: `${global.color.nomadBlack}`,
  color: `${global.color.gray[900]}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '160px',
  width: '100%',
});

export const content = style({
  display: 'flex',
  margin: '32px 360px 108px 360px',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '20px',
});

export const text = style({
  display: 'flex',
  gap: '16px',
});

export const socialIcons = style({
  display: 'flex',
  gap: '8px',
  fontSize: '16px',
});

export const icons = style({
  width: '20px',
});
