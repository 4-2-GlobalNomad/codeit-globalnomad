import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  background: 'none',
  paddingBottom: '118px',
  '@media': {
    'screen and (max-width: 767px)': {
      paddingBottom: '73px',
    },
  },
});

export const form = style({
  position: 'absolute',
  top: '-56px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '1184px',
  padding: '24px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  backgroundColor: 'white',
  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {
      width: '1000px',
    },
    'screen and (max-width: 767px)': {
      width: '400px',
      gap: '15px',
      padding: '16px',
    },
  },
});

export const label = style({
  color: 'black',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: '1rem',
    },
  },
});

export const inputContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
});

export const inputBox = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '992px',
  height: '56px',
  border: '1px solid #d1d5db',
  borderRadius: '8px',
  ':focus-within': {
    border: '1px solid #34d399',
  },
  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {
      width: '952px',
    },
    'screen and (max-width: 767px)': {
      width: '187px',
    },
  },
});

export const icon = style({
  width: '24px',
  height: '24px',
  margin: '12px',
});

export const input = style({
  outline: 'none',
  width: '916px',
  paddingLeft: '8px',
  fontSize: '1rem',
  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {
      width: '730px',
    },
    'screen and (max-width: 767px)': {
      width: '124px',
    },
  },
});

export const button = style({
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '8px',
  fontWeight: 'bold',
  minWidth: '136px',
  height: '75px',
  padding: '0 40px',
  ':hover': {
    backgroundColor: '#444',
  },
  '@media': {
    'screen and (max-width: 767px)': {
      minWidth: '96px',
      padding: '0 20px',
    },
  },
});
