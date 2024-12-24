import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '7rem',
  padding: '2rem 23rem',
  borderBottom: `0.1rem solid ${global.color.gray[300]}`,
  backgroundColor: '#FFFFFF',
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const logoImage = style({
  height: '4rem',
});

export const title = style({
  marginLeft: '1rem',
  fontSize: '1.2rem',
  color: '#333',
});

export const userInfo = style({
  width: '15rem',
  display: 'flex',
  alignItems: 'center',
});

export const notificationButton = style({
  fontSize: '1.2rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

export const icon = style({});

export const divider = style({
  width: '0.1rem',
  height: '2.2rem',
  backgroundColor: `${global.color.gray[300]}`,
  margin: '0 1rem',
});

export const avatar = style({
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  border: `0.1rem solid ${global.color.gray[300]}`,
});

export const authButtons = style({
  display: 'flex',
  gap: '1rem',
});

export const authButton = style({
  padding: '0.8rem 1.6rem',
  fontSize: '1.4rem',
  backgroundColor: '#FFFFFF',
  color: '#1b1b1b',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
});
