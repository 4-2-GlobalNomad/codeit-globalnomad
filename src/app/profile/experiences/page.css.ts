import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const experiencesPageContainer = style({
  marginBottom: '12rem',
});

export const topLayout = style({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '80rem',
  margin: '0 auto', // TODO: 페이지 레이아웃 수정 시 제거하기
  marginTop: '7.2rem', // TODO: 페이지 레이아웃 수정 시 제거하기
  marginBottom: '3.4rem',
});

export const h2Title = style([fontSizes.text3xl, fontWeights.bold]);

export const h3Title = style([
  fontSizes.text2lg,
  fontWeights.bold,
  {
    color: global.color.nomadBlack,
  },
]);

export const createButton = style([
  {
    backgroundColor: global.color.nomadBlack,
    color: '#fff',
    padding: '0.8rem 1.6rem',
    borderRadius: '0.4rem',
  },
  fontSizes.textLg,
]);

export const cardSectionList = style({
  display: 'grid',
  marginTop: '3rem',
  rowGap: '1.6rem',
  maxWidth: '80rem',
  margin: '0 auto', // TODO: 페이지 레이아웃 수정 시 제거하기
});

export const cardSection = style({
  display: 'grid',
  gridTemplateColumns: '20.4rem 1fr',
  columnGap: '2.4rem',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)',
  borderRadius: '2.4rem',
  overflow: 'hidden',
});

export const cardImageContainer = style({
  width: '204px',
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
  padding: '1.2rem 0 1.3rem',
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

export const cardBottomLayout = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const priceText = style([fontSizes.textXl, fontWeights.medium]);
