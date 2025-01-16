import { style } from '@vanilla-extract/css';

export const skeletonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  flexShrink: 0,
  borderRadius: '24px',
});

export const skeletonImage = style({
  width: '278px',
  height: '278px',
  backgroundColor: '#d1d5db',
  borderRadius: '24px',
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '232px',
      height: '232px',
    },
    'screen and (max-width: 1024px)': {
      width: '221px',
      height: '221px',
    },
    'screen and (max-width: 768px)': {
      width: '168px',
      height: '168px',
    },
    'screen and (max-width: 640px)': {
      width: '168px',
      height: '168px',
    },
  },
});

export const skeletonContent = style({
  width: '274px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '12px 16px',
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '232px',
    },
    'screen and (max-width: 1024px)': {
      width: '221px',
    },
    'screen and (max-width: 768px)': {
      width: '168px',
    },
    'screen and (max-width: 640px)': {
      width: '168px',
    },
  },
});

export const skeletonHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const skeletonStar = style({
  zIndex: 10,
});

export const skeletonStarText = style({
  width: '32px',
  height: '16px',
  backgroundColor: '#d1d5db',
  borderRadius: '8px',
  '@media': {
    'screen and (max-width: 640px)': {
      width: '28px',
      height: '14px',
    },
  },
});

export const skeletonTitle = style({
  width: '221px',
  height: '24px',
  backgroundColor: '#d1d5db',
  borderRadius: '12px',
  marginBottom: '5px',
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '192px',
    },
    'screen and (max-width: 1024px)': {
      width: '192px',
    },
    'screen and (max-width: 768px)': {
      width: '144px',
      height: '18px',
    },
    'screen and (max-width: 640px)': {
      width: '144px',
      height: '18px',
    },
  },
});

export const skeletonFooter = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const skeletonButton = style({
  width: '130px',
  height: '28px',
  backgroundColor: '#d1d5db',
  borderRadius: '16px',
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '120px',
    },
    'screen and (max-width: 1024px)': {
      width: '120px',
    },
    'screen and (max-width: 768px)': {
      width: '96px',
      height: '20px',
    },
    'screen and (max-width: 640px)': {
      width: '96px',
      height: '20px',
    },
  },
});

export const skeletonIcon = style({
  width: '8px',
  height: '28px',
  backgroundColor: '#d1d5db',
  borderRadius: '16px',
  '@media': {
    'screen and (max-width: 640px)': {
      width: '8px',
      height: '20px',
      borderRadius: '8px',
    },
  },
});
