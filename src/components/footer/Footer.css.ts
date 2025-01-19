import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const footer = style({
  backgroundColor: `${global.color.nomadBlack}`,
  color: `${global.color.gray[900]}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  height: '160px',
  width: '100%',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      maxWidth: '1199px',
      padding: '32px 16px',
    },
    'screen and (max-width: 767px)': {
      maxWidth: '767px',
      padding: '0 20px',
    },
  },
});

export const content = style({
  display: 'flex',
  padding: '32px 360px 108px 360px',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '20px',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      gap: '60px',
      padding: '32px 111px 108px 111px',
    },
    'screen and (max-width: 767px)': {
      padding: '32px 39px 66px 39px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '24px',
    },
  },
});

export const text = style({
  display: 'flex',
  gap: '16px',
  whiteSpace: 'nowrap',
  '@media': {
    'screen and (max-width: 767px)': {
      textAlign: 'center',
    },
  },
});

export const socialIcons = style({
  display: 'flex',
  gap: '8px',
  fontSize: '16px',
});

export const icons = style({
  width: '20px',
});
