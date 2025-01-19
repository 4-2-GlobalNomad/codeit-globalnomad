import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const activitiesPageContainer = style({
  marginBottom: '120px',
});

export const topLayout = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '34px',
});

export const mobileMenuTitle = style({
  display: 'flex',
  gap: '2px',
});

export const h2Title = style([fontSizes.text3xl, fontWeights.bold]);

export const createButton = style([
  {
    backgroundColor: global.color.nomadBlack,
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '4px',

    '@media': {
      'screen and (max-width: 767px)': {
        width: '100%',
      },
    },
  },

  fontSizes.textLg,
]);
