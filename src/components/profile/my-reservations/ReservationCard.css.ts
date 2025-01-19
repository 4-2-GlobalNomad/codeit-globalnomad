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
  gap: '20px',
  alignItems: 'center',

  boxShadow: '0 4px 16px 0 rgb(11 22 11 / 5%)',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '429px',
      height: '156px',
      gap: '16px',
      borderRadius: '18px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '344px',
      height: '128px',
      gap: '12px',
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
  fontSize: '16px',
  lineHeight: '26px',
  color: `${global.color.blue[200]}`,

  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '14px',
      lineHeight: '24px',
    },
  },
});

export const title = style({
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '32px',
  color: `${global.color.nomadBlack}`,
  paddingBottom: '4px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  cursor: 'pointer',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '18px',
      lineHeight: '26px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '14px',
      lineHeight: '24px',
    },
  },
});

export const subtitle = style({
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '26px',
  color: `${global.color.nomadBlack}`,
  whiteSpace: 'nowrap',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '14px',
      lineHeight: '24px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '12px',
      lineHeight: '18px',
    },
  },
});

export const price = style({
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '32px',
  color: `${global.color.black}`,
  paddingTop: '16px',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '20px',
      lineHeight: '32px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '16px',
      lineHeight: '26px',
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
      fontSize: '14px',
      right: '10px',
      bottom: '10px',
    },
  },
});
