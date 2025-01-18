import { style } from '@vanilla-extract/css';

// import { global } from '@/styles/global.css';

export const content = style({
  width: '800px',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  paddingBottom: '10rem',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '429px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '342px',
    },
  },
});

export const header = style({
  fontSize: '3.2rem',
  fontWeight: '700',
});

// export const dropdownContainer = style({
//   width: '800px',

//   '@media': {
//     'screen and (min-width: 768px) and (max-width: 1199px)': {
//       width: '429px',
//     },
//     'screen and (min-width: 320px) and (max-width: 767px)': {
//       width: '342px',
//     },
//   },
// });
