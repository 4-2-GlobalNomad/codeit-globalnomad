import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const cardSectionList = style({
  display: 'grid',
  marginTop: '3rem',
  rowGap: '1.6rem',
  maxWidth: '80rem',
  margin: '0 auto',
  marginBottom: '1.6rem',
});

export const cardSection = style({
  display: 'grid',
  gridTemplateColumns: '25.5% 1fr',
  columnGap: '2%',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)',
  borderRadius: '2.4rem',
  overflow: 'hidden',
});

export const cardImageContainer = style({
  width: '100%',
  height: '204px',
  overflow: 'hidden',
  objectFit: 'contain',
  position: 'relative',
});

export const responsiveImage = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const cardContentLayout = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '1.2rem 1.2rem  1.3rem 0',
});

export const cardTopLayout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});

export const starRatingLayout = style([
  fontSizes.textLg,
  fontWeights.regular,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
]);

export const h3Title = style([
  fontSizes.text2lg,
  fontWeights.bold,
  {
    color: global.color.nomadBlack,
  },
]);

export const cardBottomLayout = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const priceText = style([fontSizes.textXl, fontWeights.medium]);
