import { style } from '@vanilla-extract/css';

export const dropdownContainerA = style({
  position: 'relative',
  width: 'fit-content',
  height: 'fit-content',
});

export const dropdownListA = style({
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
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

export const itemA = style({
  whiteSpace: 'nowrap',
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
  width: '12rem',
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
