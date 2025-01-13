import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  position: 'relative',
});

export const imageContainer = style({
  position: 'relative',
  width: '378px',
  height: '378px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '24px',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '317px',
      height: '317px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '186px',
      height: '186px',
    },
  },
});

export const overlay = style({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderRadius: '24px',
});

export const contentContainer = style({
  position: 'absolute',
  bottom: '32px',
  left: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '230px',
  color: 'white',
  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      bottom: '24px',
      width: '146px',
      gap: '6px',
    },
  },
});

export const ratingContainer = style({
  display: 'flex',
  gap: '4px',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '1.5rem',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '1rem',
      WebkitLineClamp: 1,
    },
  },
});

export const priceContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '1rem',
    },
  },
});
