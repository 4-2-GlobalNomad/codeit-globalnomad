import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const dropdownContainerB = style({
  position: 'relative',
  width: '15rem',
  background: 'white',
  borderRadius: '1.5rem',
});

export const dropdownListB = style({
  borderRadius: '0.5rem',
  border: '0.0625rem solid #ccc',
  listStyleType: 'none',
  padding: '0',
  margin: '0',
});

export const dropdownButtonB = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'white',
  border: `1px solid ${global.color.green[200]}`,
  borderRadius: '1rem',
  padding: '1rem 1rem',
  cursor: 'pointer',
  width: '10rem',
  position: 'relative',
  color: global.color.green[200],
});

export const itemB = style({
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

export const portalContainerB = style({
  position: 'absolute',
  top: '10rem',
  left: '0',
  zIndex: 1000,
});

export const iconB = style({
  width: '2rem',
  height: '1.5rem',
  marginLeft: '0.5rem',
  marginTop: '0.5rem',
  transition: 'transform 0.3s ease',
  fill: global.color.green[200],
  selectors: {
    '&.open': {
      transform: 'rotate(180deg)',
    },
  },
});

export const open = style({ transform: 'rotate(180deg)' });

export const listItemWithDividerB = style({
  selectors: { '&:not(:last-child)': { borderBottom: '0.0625rem solid #ccc' } },
});
