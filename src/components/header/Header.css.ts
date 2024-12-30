import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '70px',
  padding: '2rem 23rem',
  borderBottom: `0.1rem solid ${global.color.gray[300]}`,
  backgroundColor: '#FFFFFF',
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const logoImage = style({
  height: '40px',
});

export const title = style({
  marginLeft: '10px',
  fontSize: '12px',
  color: '#333',
});

export const userInfo = style({
  width: '150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const notificationButton = style({
  fontSize: '12px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

export const icon = style({});

export const divider = style({
  width: '1px',
  height: '22px',
  backgroundColor: `${global.color.gray[300]}`,
  margin: '1px',
});

export const avatar = style({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: `1px solid ${global.color.gray[300]}`,
});

export const authButtons = style({
  display: 'flex',
  gap: '10px',
});

export const authButton = style({
  padding: '8px 16px',
  fontSize: '14px',
  backgroundColor: '#FFFFFF',
  color: '#1b1b1b',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
});
