import { style } from '@vanilla-extract/css';

export const dropdownContainerA = style({
  position: 'relative',
  width: '15rem',
  background: 'white',
  borderRadius: '1.5rem',
});

export const dropdownListA = style({
  borderRadius: '0.5rem',
  border: '0.0625rem solid #ccc',
  listStyleType: 'none',
  padding: '0',
  margin: '0',
  position: 'absolute',
  top: '100%',
  left: '0',
  zIndex: 999,
});

export const dropdownButtonA = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'white',
  border: '1px solid #ccc',
  borderRadius: '1rem',
  padding: '1rem 1rem',
  cursor: 'pointer',
  width: '10rem',
  position: 'relative',
});

export const itemA = style({
  padding: '2rem',
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

export const portalContainerA = style({
  position: 'absolute',
  top: '6rem',
  left: '0',
  zIndex: 1000,
});

export const iconA = style({
  width: '5rem',
  height: '5rem',
  marginLeft: '0.5rem',
  marginTop: '0.5rem',
  transition: 'transform 0.3s ease',
  selectors: {
    '&.open': {
      transform: 'rotate(180deg)',
    },
  },
});

export const listItemWithDividerA = style({
  selectors: { '&:not(:last-child)': { borderBottom: '0.0625rem solid #ccc' } },
});
