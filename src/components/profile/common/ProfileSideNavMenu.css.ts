import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const profileSideNavMenu = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.4rem',
  padding: '2.4rem 0',
  backgroundColor: '#fff',
  border: `1px solid ${global.color.gray[300]}`,
  borderRadius: '1.2rem',
  width: '38.4rem',
  height: 'fit-content',
  boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)',
});

export const profileImageBox = style({
  backgroundColor: '#E3E5E8',
  width: '100%',
  height: '100%',
  position: 'absolute',
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
});

export const defaultImage = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const profileImage = style({
  objectFit: 'contain',
});

export const profileImageContainer = style({
  position: 'relative',
  width: '16rem',
  height: '16rem',
});

export const penIconBox = style({
  width: '4.4rem',
  height: '4.4rem',
  borderRadius: '50%',
  backgroundColor: global.color.green[200],
  position: 'absolute',
  right: '0',
  bottom: '0',
  cursor: 'pointer',
});

export const penIconImage = style({
  position: 'absolute',
  bottom: '50%',
  right: '50%',
  transform: 'translate(50%, 50%)',
});

export const navListBox = style({
  width: '33.6rem',
  gap: '8px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '1.2rem',
});

export const navTextBox = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '1.2rem',
  overflow: 'hidden',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: global.color.green[100],
  },
});

export const navText = style({
  color: global.color.gray[700],
  display: 'flex',
  alignItems: 'center',
  padding: '0.9rem 0',
  paddingLeft: '1.6rem',
  gap: '1.4rem',
  transition: 'all 0.2s ease',

  ':hover': {
    color: global.color.nomadBlack,
    fontWeight: 'bold',
  },
});

export const fileInput = style({
  display: 'none',
  cursor: 'pointer',
});
