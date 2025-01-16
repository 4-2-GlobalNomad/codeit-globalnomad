import { style } from '@vanilla-extract/css';

export const skeleton = style({
  position: 'relative',
  overflow: 'hidden',
  '@media': {
    'screen and (max-width: 1199px)': {},
    'screen and (max-width: 640px)': {},
  },
});

export const shimmer = style({
  position: 'absolute',
  inset: 0,
  transform: 'translateX(-100%)',
  background: 'linear-gradient(to right, transparent, rgba(128, 128, 128, 0.3), transparent)',
  animation: 'shimmer 2s infinite',
  borderTop: '1px solid rgba(128, 128, 128, 0.1)',
  zIndex: 1,
  backgroundSize: '40% auto',
  '@media': {
    'screen and (max-width: 1199px)': {},
    'screen and (max-width: 640px)': {},
  },
});

export const skeletonWrapper = style({
  position: 'relative',
  contain: 'layout style',
  display: 'block',
  backgroundSize: '40% auto',
  zIndex: 0,
  '@media': {
    'screen and (max-width: 1199px)': {},
    'screen and (max-width: 640px)': {},
  },
});
