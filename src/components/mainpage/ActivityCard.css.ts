import { style } from '@vanilla-extract/css';

export const activityCardWrapper = style({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      height: '374px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      height: '295px',
    },
  },
});

export const activityCardInnerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const activityCardImage = style({
  width: '278px',
  height: '278px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '24px',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '232px',
      height: '232px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '168px',
      height: '168px',
    },
  },
});

export const activityCardDetails = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '8px',
  borderRadius: '16px',
  backgroundColor: '#fff',
  selectors: {
    '&:hover': {
      backgroundColor: '#F5F5F5',
      color: '#333',
    },
  },
});

export const ratingWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const ratingText = style({
  fontWeight: '500',
  fontSize: '1rem',
});

export const reviewCountText = style({
  color: '#888',
});

export const activityTitle = style({
  fontSize: '2xl',
  fontWeight: '600',
  marginBottom: '5px',
  lineClamp: '2',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: 'lg',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: 'md',
    },
  },
});

export const priceWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '28px',
  fontWeight: '700',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: 'xl',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: 'lg',
    },
  },
});

export const perPersonText = style({
  fontSize: '16px',
  color: '#888',
});
