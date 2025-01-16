import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const card = style({
  position: 'relative',

  backgroundColor: '#ffffff',
  height: '204px',
  width: '792px',
  borderRadius: '24px',
  overflow: 'hidden',

  display: 'flex',
  gap: '2rem',
  alignItems: 'center',

  boxShadow: '0 4px 16px 0 rgb(11 22 11 / 5%)',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '429px',
      height: '156px',
      gap: '1.6rem',
      borderRadius: '18px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '344px',
      height: '128px',
      gap: '1.2rem',
      borderRadius: '12px',
    },
  },
});

export const img = style({
  height: '204px',
  width: '204px',
  objectFit: 'cover',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '156px',
      height: '156px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '128px',
      height: '128px',
    },
  },
});

export const texts = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',

  width: '520px',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '240px',
      gap: '0px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '180px',
      gap: '0px',
    },
  },
});

export const status = style({
  fontWeight: '700',
  fontSize: '1.6rem',
  lineHeight: '2.6rem',
  color: `${global.color.blue[200]}`,

  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '1.4rem',
      lineHeight: '2.4rem',
    },
  },
});

export const title = style({
  fontWeight: '700',
  fontSize: '2rem',
  lineHeight: '3.2rem',
  color: `${global.color.nomadBlack}`,
  paddingBottom: '4px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '1.8rem',
      lineHeight: '2.6rem',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '1.4rem',
      lineHeight: '2.4rem',
    },
  },
});

export const subtitle = style({
  fontWeight: '400',
  fontSize: '1.8rem',
  lineHeight: '2.6rem',
  color: `${global.color.nomadBlack}`,
  whiteSpace: 'nowrap',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '1.4rem',
      lineHeight: '2.4rem',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '1.2rem',
      lineHeight: '1.8rem',
    },
  },
});

export const price = style({
  fontWeight: '500',
  fontSize: '2.4rem',
  lineHeight: '3.2rem',
  color: `${global.color.black}`,
  paddingTop: '16px',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '2rem',
      lineHeight: '3.2rem',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '1.6rem',
      lineHeight: '2.6rem',
    },
  },
});

export const button = style({
  position: 'absolute',
  right: '30px',
  bottom: '20px',

  width: '144px',
  height: '43px',
  borderRadius: '6px',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '112px',
      height: '40px',
      right: '15px',
      bottom: '10px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '80px',
      height: '32px',
      fontSize: '1.4rem',
      right: '10px',
      bottom: '10px',
    },
  },
});
