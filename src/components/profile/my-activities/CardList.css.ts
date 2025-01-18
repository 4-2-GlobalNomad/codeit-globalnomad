import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const cardSectionList = style({
  display: 'grid',
  marginTop: '30px',
  rowGap: '16px',
  maxWidth: '800px',
  margin: '0 auto',
  marginBottom: '16px',
});

export const cardSection = style({
  display: 'grid',
  gridTemplateColumns: '25.5% 1fr',
  columnGap: '2%',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)',
  borderRadius: '24px',
  overflow: 'hidden',

  '@media': {
    'screen and (max-width: 767px)': {
      gridTemplateColumns: '40% 1fr',
      columnGap: '4%',
    },
  },
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
  padding: '12px 12px  13px 0',
});

export const cardTopLayout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const starRatingLayout = style([
  fontSizes.textLg,
  fontWeights.regular,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
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

export const priceText = style([
  {
    whiteSpace: 'nowrap',
  },
  fontSizes.textXl,
  fontWeights.medium,
]);

export const noDataLayout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const emptyBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '240px',
  height: '240px',

  '@media': {
    'screen and (min-width: 320px) and (max-width: 1199px)': {
      width: '200px',
      height: '200px',
    },
  },
});

export const loadingBarWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
