import { style } from '@vanilla-extract/css';

export const skeleton = style({
  width: '380px',
  height: '380px',
  backgroundColor: '#e0e0e0',
  borderRadius: '24px',
  position: 'relative',
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '317px',
      height: '317px',
    },
    'screen and (max-width: 767px)': {
      width: '186px',
      height: '186px',
    },
  },
});

export const skeletonContent = style({
  position: 'absolute',
  bottom: '32px',
  left: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  zIndex: 10,
  '@media': {
    'screen and (max-width: 767px)': {
      bottom: '24px',
      width: '146px',
      gap: '6px',
    },
  },
});

export const skeletonHeader = style({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
});

export const skeletonStar = style({
  width: '48px',
  height: '14px',
  backgroundColor: '#c0c0c0',
  borderRadius: '12px',
  '@media': {
    'screen and (max-width: 767px)': {
      width: '28px',
    },
  },
});

export const skeletonTitle = style({
  width: '230px',
  height: '30px',
  backgroundColor: '#c0c0c0',
  borderRadius: '12px',
  '@media': {
    'screen and (max-width: 767px)': {
      width: '130px',
      height: '18px',
    },
  },
});

export const skeletonFooter = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const skeletonUser = style({
  width: '130px',
  height: '20px',
  backgroundColor: '#c0c0c0',
  borderRadius: '12px',
  '@media': {
    'screen and (max-width: 767px)': {
      width: '16px',
      height: '14px',
    },
  },
});

export const skeletonDivider = style({
  fontSize: '12px',
  color: '#c0c0c0',
  fontWeight: 'bold',
});

export const skeletonRating = style({
  width: '24px',
  height: '20px',
  backgroundColor: '#c0c0c0',
  borderRadius: '8px',
  '@media': {
    'screen and (max-width: 767px)': {
      width: '14px',
      height: '14px',
    },
  },
});
