import { style } from '@vanilla-extract/css';

export const avatarContainer = style({
  position: 'relative',
  cursor: 'pointer',
});

export const avatar = style({
  width: '40px',
  height: '40px',
  objectFit: 'cover',
  borderRadius: '50%',
  display: 'block',
  transition: 'transform 0.2s ease-in-out',
});

export const dropdown = style({
  position: 'absolute',
  top: '50px',
  right: '0',
  zIndex: 1000,
  backgroundColor: '#FFFFFF',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '8px 0',
  minWidth: '150px',
});

export const dropdownItem = style({
  padding: '10px 16px',
  background: 'none',
  border: 'none',
  textAlign: 'left',
  width: '100%',
  transition: 'background-color 0.2s ease-in-out',
});
