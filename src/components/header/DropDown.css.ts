import { style } from '@vanilla-extract/css';

export const avatarContainer = style({
  position: 'relative',
  cursor: 'pointer',
});

export const avatar = style({
  borderRadius: '50%',
  transition: 'transform 0.2s ease-in-out',
});

export const dropdown = style({
  position: 'absolute',
  top: '50px',
  right: '0',
  zIndex: 1000,
  backgroundColor: 'white',
  border: '1px solid #ddd',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
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

export const dropdownItemHover = style({
  backgroundColor: '#f0f0f0',
});
