import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  width: '62%',
  display: 'flex',
  justifyContent: 'space-between',
  color: 'green',

  selectors: {
    '&.active': {
      color: '#FFFFFF',
    },
  },
});

export const categoryWrapper = style({
  position: 'relative',
});

export const categoryList = style({
  display: 'flex',
  gap: '14px',
  overflowX: 'scroll',
  paddingRight: '14px',

  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {
      gap: '8px',
      width: '240px',
      paddingRight: '8px',
    },
    'screen and (max-width: 767px)': {
      gap: '6px',
      paddingRight: '6px',
    },
  },
});

globalStyle(`${categoryList}::-webkit-scrollbar`, {
  display: 'none',
});

export const categoryButton = style({
  minWidth: '127px',
  fontSize: '1rem',
  border: '1px solid green',
  borderRadius: '0.5rem',
  padding: '1rem 1.25rem',
  backgroundColor: '#FFFFFF',
  selectors: {
    '&:hover': {
      backgroundColor: 'green',
      color: '#FFFFFF',
    },
    '&.active': {
      backgroundColor: '#4CAF50',
      color: '#FFFFFF',
    },
  },

  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {
      minWidth: '100px',
      fontSize: '0.875rem',
      padding: '0.75rem 1rem',
    },
    'screen and (max-width: 767px)': {
      minWidth: '80px',
      fontSize: '0.75rem',
      padding: '0.5rem 0.75rem',
    },
  },
});

export const sortWrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

export const sortButton = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '127px',
  height: '62px',
  fontSize: '1rem',
  backgroundColor: '#FFFFFF',
  border: '1px solid green',
  borderRadius: '2rem',
  padding: '1rem 1.25rem',

  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {
      width: '90px',
      height: '46px',
      fontSize: '0.875rem',
      padding: '0.75rem 1rem',
    },
    'screen and (max-width: 767px)': {
      width: '80px',
      height: '40px',
      fontSize: '0.75rem',
      padding: '0.5rem 0.75rem',
    },
  },
});

export const popoverWrapper = style({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '14px',
  height: '100%',

  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {
      width: '10px',
    },
    'screen and (max-width: 767px)': {
      width: '8px',
    },
  },
});
