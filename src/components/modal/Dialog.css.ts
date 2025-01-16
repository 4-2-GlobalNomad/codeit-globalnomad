import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const content = style({
  width: '492px',
  height: '186px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'relative',

  '@media': {
    'screen and (max-width: 576px)': {
      width: '279px',
      height: '156px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '40px',
    },
  },
});

export const message = style({
  textAlign: 'center',
  fontSize: '1.6rem',
  fontWeight: '500',
  color: `${global.color.black}`,
});

export const button = style({
  position: 'absolute',
  bottom: '0',
  right: '0',

  display: 'block',
  padding: '14px 46px',
  borderRadius: '8px',
  backgroundColor: `${global.color.nomadBlack}`,
  color: '#ffffff',
  fontSize: '1.4rem',
  fontWeight: '500',

  '@media': {
    'screen and (max-width: 576px)': {
      position: 'relative',
    },
  },
});
