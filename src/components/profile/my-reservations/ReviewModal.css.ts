import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const content = style({
  width: '432px',
  height: '686px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  gap: '10px',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '40px',
});

export const modalTitle = style({
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '32px',
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
  width: '290px',
});

export const title = style({
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '32px',
  color: `${global.color.nomadBlack}`,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const subtitle = style({
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '26px',
  color: `${global.color.nomadBlack}`,
});

export const price = style({
  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '42px',
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
  marginTop: '25px',
  display: 'block',
  width: '100%',
  height: '56px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '500',
});
