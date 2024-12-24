import { style } from '@vanilla-extract/css';

export const dropdownContainer = style({
  position: 'relative',
  width: '12.5rem',
  background: 'white',
  borderRadius: '0.25rem',
});

export const dropdownButton = style({
  padding: '0.5rem',
  fontSize: '5rem',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'rotate(90deg)',
});

export const dropdownList = style({
  borderRadius: '0.5rem',
  border: '0.0625rem solid #ccc',
  listStyleType: 'none',
  padding: '0',
  margin: '0',
});

export const item = style({
  padding: '1.5rem',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
  selectors: {
    '&:hover': {
      backgroundColor: 'gray',
      color: 'white',
    },
  },
});

export const divider = style({
  height: '0.0625rem',
  backgroundColor: '#ccc',
  margin: '0',
});

export const listItemWithDivider = style({
  selectors: {
    '&:not(:last-child)': {
      borderBottom: '0.0625rem solid #ccc',
    },
  },
});

export const portalContainer = style({
  position: 'absolute',
  top: '6rem',
  left: '3,125rem',
  zIndex: 1000,
});
