import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const background = style({
  backgroundColor: `${global.color.gray[100]}`,
  height: '2000px',
  paddingTop: '80px',
});

export const page = style({
  width: '1200px',
  margin: '0 auto',
  display: 'flex',
  gap: '24px',
});

export const panel = style({
  width: '384px',
  height: '432px',
  backgroundColor: '#ffffff',
  border: `1px solid ${global.color.gray[300]}`,
  borderRadius: '12px',
  padding: '50px',
});

export const content = style({});

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
});
