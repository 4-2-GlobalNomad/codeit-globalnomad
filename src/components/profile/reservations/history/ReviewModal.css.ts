import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const content = style({
  width: '432px',
  height: '686px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  gap: '1rem',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '40px',
});

export const modalTitle = style({
  fontSize: '2.4rem',
  fontWeight: '700',
  lineHeight: '3.2rem',
  color: `${global.color.black}`,
});

export const btnX = style({
  height: '40px',
  width: '40px',
});

export const info = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const img = style({
  height: '126px',
  width: '126px',
  borderRadius: '12px',
  objectFit: 'cover',
});

export const texts = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const title = style({
  fontWeight: '700',
  fontSize: '2rem',
  lineHeight: '3.2rem',
  color: `${global.color.nomadBlack}`,
});

export const subtitle = style({
  fontWeight: '400',
  fontSize: '1.8rem',
  lineHeight: '2.6rem',
  color: `${global.color.nomadBlack}`,
});

export const price = style({
  fontWeight: '700',
  fontSize: '3.2rem',
  lineHeight: '4.2rem',
  color: `${global.color.black}`,
});

export const star = style({
  width: '20px',
  height: '20px',
});

export const input = style({
  resize: 'none',
  width: '100%',
  height: '240px',
  borderRadius: '6px',
  padding: '20px 15px',
});

export const button = style({
  marginTop: '2.5rem',
  display: 'block',
  width: '100%',
  height: '56px',
  borderRadius: '8px',
  backgroundColor: `${global.color.nomadBlack}`,
  color: '#ffffff',
  fontSize: '1.4rem',
  fontWeight: '500',
});
