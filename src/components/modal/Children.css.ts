import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const content = style({
  width: '350px',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

export const message = style({
  textAlign: 'center',
  fontSize: '1.8rem',
  fontWeight: '500',
});

export const button = style({
  marginTop: '2.5rem',
  display: 'block',
  padding: '14px 46px',
  borderRadius: '8px',
  backgroundColor: `${global.color.nomadBlack}`,
  color: '#ffffff',
  fontSize: '1.6rem',
  fontWeight: '500',
});
