import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const background = style({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '10',
});

export const modalArea = style({
  backgroundColor: '#ffffff',
  // height: 'fit-content',
  // width: 'fit-content',
  height: '697px',
  width: '429px',

  padding: '2.8rem 2.4rem',
  borderRadius: '2.4rem',
  border: `1px solid ${global.color.gray[300]}`,
  boxShadow: '0 4px 16px 0 rgb(11 22 11 / 5%)',

  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      height: '100%',
      width: '100%',
      borderRadius: '0',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '55px',
  paddingBottom: '1.5rem',
  borderBottom: `1px solid ${global.color.gray[300]}`,
});

export const title = style({
  fontSize: '2.4rem',
  lineHeight: '3.2rem',
  fontWeight: '700',
});

export const btnX = style({
  width: '40px',
  height: '40px',
});

export const context = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  paddingTop: '2rem',
  paddingBottom: '1.5rem',
  height: '580px',
  width: '100%',
  overflowY: 'scroll',
  msOverflowStyle: 'none',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const bundle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  width: '100%',
});

export const miniHeader = style({
  fontSize: '2rem',
  lineHeight: '2.4rem',
  fontWeight: '600',
});
