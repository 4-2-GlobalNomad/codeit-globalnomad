import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const item = style({
  width: '100%',
  height: '116px',
  border: `1px solid ${global.color.gray[300]}`,
  //   outline: `1px solid ${global.color.gray[300]}`,
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '14px 16px',
});

export const text = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  fontSize: '1.6rem',
  fontWeight: '500',
  color: `${global.color.gray[800]}`,
});

export const textBold = style({
  fontWeight: '600',
  color: `${global.color.black}`,
  paddingLeft: '0.5rem',
});

export const buttonBar = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const button = style({
  width: '82px',
  height: '38px',
  borderRadius: '6px',
  marginLeft: '8px',
  fontSize: '1.4rem',
});

export const confirmed = style({
  padding: '10px 15px',
  borderRadius: '50px',
  backgroundColor: `${global.color.orange[100]}`,
  color: `${global.color.orange[200]}`,
  fontSize: '1.4rem',
  lineHeight: '2.4rem',
  fontWeight: '700',
});

export const declined = style({
  padding: '10px 15px',
  borderRadius: '50px',
  backgroundColor: `${global.color.red[100]}`,
  color: `${global.color.red[300]}`,
  fontSize: '1.4rem',
  lineHeight: '2.4rem',
  fontWeight: '700',
});
