import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const card = style({
  position: 'relative',

  backgroundColor: '#ffffff',
  height: '204px',
  width: '792px',
  borderRadius: '24px',
  overflow: 'hidden',

  display: 'flex',
  gap: '20px',
  alignItems: 'center',

  boxShadow: '0 4px 16px 0 rgb(11 22 11 / 5%)',
});

export const img = style({
  height: '204px',
  width: '204px',
  objectFit: 'cover',
});

export const texts = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const status = style({
  fontWeight: '700',
  fontSize: '1.6rem',
  lineHeight: '2.6rem',
  color: `${global.color.blue[200]}`,
});

export const title = style({
  fontWeight: '700',
  fontSize: '2rem',
  lineHeight: '3.2rem',
  color: `${global.color.nomadBlack}`,
  paddingBottom: '4px',
});

export const subtitle = style({
  fontWeight: '400',
  fontSize: '1.8rem',
  lineHeight: '2.6rem',
  color: `${global.color.nomadBlack}`,
});

export const price = style({
  fontWeight: '500',
  fontSize: '2.4rem',
  lineHeight: '3.2rem',
  color: `${global.color.black}`,
  paddingTop: '16px',
});

export const button = style({
  position: 'absolute',
  right: '30px',
  bottom: '20px',

  width: '144px',
  height: '43px',
  backgroundColor: `${global.color.nomadBlack}`,
  borderRadius: '6px',

  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '700',
});
