import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const skeleton = style({
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
  backgroundColor: `${global.color.gray[200]}`,

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
  gap: '12px',

  width: '520px',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '240px',
      gap: '6px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '180px',
      gap: '6px',
    },
  },
});

export const status = style({
  height: '20px',
  width: '62px',
  backgroundColor: `${global.color.gray[200]}`,

  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      height: '16px',
      width: '54px',
    },
  },
});

export const title = style({
  height: '26px',
  width: '400px',
  backgroundColor: `${global.color.gray[300]}`,
  marginBottom: '4px',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      height: '22px',
      width: '230px',
      marginBottom: '2px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      height: '18px',
      width: '180px',
      marginBottom: '2px',
    },
  },
});

export const subtitle = style({
  height: '20px',
  width: '200px',
  backgroundColor: `${global.color.gray[200]}`,

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      height: '16px',
      width: '160px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      height: '12px',
      width: '140px',
    },
  },
});

export const price = style({
  height: '32px',
  width: '120px',
  backgroundColor: `${global.color.gray[200]}`,

  marginTop: '16px',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      height: '26px',
      width: '90px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      height: '22px',
      width: '70px',
      marginTop: '12px',
    },
  },
});
