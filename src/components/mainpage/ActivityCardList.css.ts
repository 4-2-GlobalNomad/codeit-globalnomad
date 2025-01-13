import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  marginTop: '2.5rem',
  marginBottom: '3.75rem',
  fontWeight: 'bold',
  fontSize: '2rem',
  lineHeight: '2.5rem',
  marginRight: '60rem',
  '@media': {
    'screen and (max-width: 640px)': {
      fontSize: '1.125rem',
      marginTop: '1.5rem',
      marginBottom: '2.5rem',
    },
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '1.5rem',
    },
  },
});

export const gridContainer = style({
  display: 'grid',
  paddingRight: '2rem',
  marginRight: 'auto',
  marginLeft: 'auto',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1.5rem',
  width: '100%',
  maxWidth: '1200px',
  height: '918px',
  marginBottom: '4.5rem',
  '@media': {
    'screen and (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      height: '1184px',
    },
    'screen and (max-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.5rem',
      height: '638px',
      marginBottom: '3.875rem',
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
    'screen and (max-width: 640px)': {
      fontSize: '1.125rem',
      marginBottom: '1.5rem',
    },
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '1.75rem',
    },
  },
});

export const cardContainer = style({
  display: 'flex',
  gap: '1.5rem',
  width: '100%',
  overflowX: 'scroll',
  '@media': {
    'screen and (max-width: 1024px)': {
      width: 'calc(100% - 1.5rem)',
      gap: '2rem',
    },
    'screen and (max-width: 640px)': {
      gap: '1rem',
    },
  },
});

export const skeletonContainer = style({
  display: 'flex',
  gap: '1.5rem',
  minWidth: 'max-content',
  '@media': {
    'screen and (max-width: 1024px)': {
      gap: '2rem',
    },
    'screen and (max-width: 640px)': {
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
    'screen and (max-width: 1024px)': {
      height: '19.8125rem',
    },
    'screen and (max-width: 640px)': {
      height: '11.625rem',
      fontSize: '1rem',
    },
  },
});

export const noActivities = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2rem',
  fontWeight: '500',
  color: '#FF6F61',
  '@media': {
    'screen and (max-width: 640px)': {
      fontSize: '1rem',
    },
  },
});

export const paginationContainer = style({
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'center',
  '@media': {
    'screen and (max-width: 640px)': {
      marginTop: '1rem',
    },
  },
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});
