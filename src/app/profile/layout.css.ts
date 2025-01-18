import { style } from '@vanilla-extract/css';

export const layout = style({
  margin: '72px auto 120px',
  display: 'grid',
  gridTemplateColumns: '32% 1fr',
  gridGap: '24px',
  maxWidth: '1200px',
  boxSizing: 'border-box',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: 'min(93.54%, 100%)',
      margin: '24px 24px 120px',
      gridTemplateColumns: '33.7% 1fr',
    },
    'screen and (max-width: 767px)': {
      width: 'min(89.3%, 100%)',
      margin: '16px auto 120px',
      gridTemplateColumns: '1fr',
    },
  },
});
