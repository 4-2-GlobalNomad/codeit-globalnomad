import { style } from '@vanilla-extract/css';

const sharedButtonStyle = {
  width: '4rem',
  height: '4rem',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center' as const,
  fontWeight: 'bold',
  fontSize: '1rem',
};

export const pageButton = style({
  ...sharedButtonStyle,
  selectors: {
    '&:hover': {
      backgroundColor: '#0B3B2D',
      color: '#fff',
    },
    '&:disabled': {
      backgroundColor: '#f1f1f1',
      cursor: 'not-allowed',
    },
    '&.selected': {
      backgroundColor: '#0B3B2D',
      color: '#fff',
    },
  },
});

export const prevNextButton = style({
  ...sharedButtonStyle,
  padding: '0.65rem',
  selectors: {
    '&:hover': {
      backgroundColor: '#0B3B2D',
      color: '#fff',
    },
    '&:disabled': {
      backgroundColor: '#f1f1f1',
      cursor: 'not-allowed',
    },
  },
});

export const rightArrow = style({
  width: '2rem',
  height: '2rem',
  transition: 'fill 0.3s',
  fill: '#000',
  selectors: {
    '&:hover': {
      fill: '#007bff',
    },
    '[disabled] &': {
      fill: '#6c757d',
    },
  },
});

export const leftArrow = style({
  transition: 'fill 0.3s',
  fill: '#000',
  selectors: {
    '&:hover': {
      fill: '#007bff',
    },
    '[disabled] &': {
      fill: '#6c757d',
    },
  },
});

export const paginationContainer = style({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  justifyContent: 'center',
});
