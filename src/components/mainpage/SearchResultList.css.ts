import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '1184px',
  color: '#000000',
  marginTop: '2.5rem',
  marginBottom: '1.5rem',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      margin: '1.5rem 0',
    },
    'screen and (max-width: 767px)': {
      marginTop: '1.5rem',
      marginBottom: '1rem',
    },
  },
});

export const title = style({
  fontSize: '2rem',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '1.5rem',
    },
    'screen and (max-width: 767px)': {
      fontSize: '1.125rem',
    },
  },
});

export const boldGreenText = style({
  fontWeight: 'bold',
  color: '#4CAF50',
});

export const count = style({
  color: '#6B7280',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '1rem',
      lineHeight: '28px',
    },
    'screen and (max-width: 767px)': {
      fontSize: '0.875rem',
      lineHeight: '26px',
    },
  },
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1.5rem',
  marginBottom: '4.5rem',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      marginBottom: '9rem',
    },
    'screen and (max-width: 767px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.5rem',
      marginBottom: '7rem',
    },
  },
});

export const emptyResult = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '918px',
  marginBottom: '4.5rem',
  fontSize: '2rem',
  fontWeight: '500',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      height: '24rem',
    },
    'screen and (max-width: 767px)': {
      height: '15rem',
      fontSize: '1rem',
    },
  },
});
