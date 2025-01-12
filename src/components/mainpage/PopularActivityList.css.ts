import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  marginTop: '2.5rem',
  marginBottom: '3.75rem',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      marginTop: '1.5rem',
      marginBottom: '2.5rem',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      marginTop: '1.5rem',
      marginBottom: '2.5rem',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '1.125rem',
      marginBottom: '1.5rem',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '1rem',
      marginBottom: '1.5rem',
    },
  },
});

export const cardContainer = style({
  display: 'flex',
  gap: '1.5rem',
  width: '100%',
  overflowX: 'scroll',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: 'calc(100% - 1.5rem)',
      gap: '2rem',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      gap: '1rem',
    },
  },
});

export const skeletonContainer = style({
  display: 'flex',
  gap: '1.5rem',
  minWidth: 'max-content',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      gap: '2rem',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      gap: '1rem',
    },
  },
});

export const emptyContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '23.75rem',
  fontSize: '1.25rem',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      height: '19.8125rem',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      height: '11.625rem',
      fontSize: '1rem',
    },
  },
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});
