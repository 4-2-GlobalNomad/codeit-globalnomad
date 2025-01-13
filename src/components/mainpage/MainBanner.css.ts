import { style } from '@vanilla-extract/css';

export const bannerWrapper = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '600px',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      height: '360px',
    },
    'screen and (max-width: 767px)': {
      height: '240px',
    },
  },
});

export const overlay = style({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'black',
  opacity: 0.3,
});

export const contentWrapper = style({
  position: 'absolute',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  width: '100%',
  maxWidth: '1000px',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
    'screen and (max-width: 767px)': {
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
    },
  },
});

export const textWrapper = style({
  marginTop: '16rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  width: '502px',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '440px',
    },
    'screen and (max-width: 767px)': {
      width: '184px',
    },
  },
});

export const title = style({
  color: 'white',
  fontSize: '3.75rem',
  fontWeight: 'bold',
  lineHeight: '1.2',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '3.375rem',
    },
    'screen and (max-width: 767px)': {
      fontSize: '1.5rem',
    },
  },
});

export const subtitle = style({
  color: 'white',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '1rem',
    },
    'screen and (max-width: 767px)': {
      fontSize: '0.875rem',
    },
  },
});

export const errorWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  fontSize: '1rem',
  fontWeight: 'bold',
});

export const loadingWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});
