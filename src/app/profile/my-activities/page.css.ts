import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const myActivitiesPageContainer = style({
  marginBottom: '12rem',
});

export const topLayout = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '3.4rem',
});

export const mobileMenuTitle = style({
  display: 'flex',
  gap: '0.2rem',
});

export const h2Title = style([fontSizes.text3xl, fontWeights.bold]);

export const createButton = style([
  {
    backgroundColor: global.color.nomadBlack,
    color: '#fff',
    padding: '0.8rem 1.6rem',
    borderRadius: '0.4rem',
    whiteSpace: 'nowrap',
    maxHeight: '4.8rem',
  },
  fontSizes.textLg,
]);
