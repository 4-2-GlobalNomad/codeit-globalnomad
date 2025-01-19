import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const signupBox = style({
  width: '640px',
  height: '100%',
  margin: '48px auto',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '93.54%',
    },
    'screen and (max-width: 767px)': {
      width: '89.3%',
      padding: '24px',
    },
  },
});

export const logo = style({
  width: '340px',
  height: '192px',
  '@media': {
    'screen and (max-width: 767px)': {
      width: '240px',
      height: '135px',
    },
  },
});

export const logoContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '56px',
  '@media': {
    'screen and (max-width: 767px)': {
      marginBottom: '24px',
    },
  },
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
});

export const formGroup = style({
  marginBottom: '28px',
  '@media': {
    'screen and (max-width: 767px)': {
      marginBottom: '16px',
    },
  },
});

export const label = style({
  fontSize: '16px',
  fontWeight: '400',
  marginBottom: '8px',
  display: 'block',
});

export const signupButton = style({
  width: '640px',
  height: '48px',
  borderRadius: '6px',
  marginBottom: '32px',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '100%',
    },
    'screen and (max-width: 767px)': {
      width: '100%',
      height: '44px',
      marginBottom: '24px',
    },
  },
});

export const footer = style({
  textAlign: 'center',
  fontSize: '16px',
  marginBottom: '48px',
  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: '12px',
      marginBottom: '24px',
    },
  },
});

export const linkText = style({
  color: ' #0B3B2D',
  textDecoration: 'underline',
});

export const socialLoginContainer = style({
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: ' #79747E',
  gap: '37.5px',
  marginBottom: '40px',
  '@media': {
    'screen and (max-width: 767px)': {
      gap: '12px',
    },
  },
});

export const line = style({
  flex: 1,
  height: '1px',
  backgroundColor: '#ccc',
});

export const socialButtons = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  '@media': {
    'screen and (max-width: 767px)': {
      gap: '12px',
    },
  },
});
