import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minWidth: '1200px',
  marginBottom: '8rem',
  backgroundColor: '@f0f0f0',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: 'calc(100% - 1rem)',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '100%',
      padding: '0.5rem',
    },
    'screen and (min-width: 1200px)': {
      width: '100%',
    },
  },
});
