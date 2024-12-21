import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const global = createGlobalTheme(':root', {
  color: {
    black: '#1B1B1B',
    nomadBlack: '#112211',

    gray: {
      900: '#4B4B4B',
      800: '#79747E',
      700: '#A1A1A1',
      600: '#A4A1AA',
      500: '#ADAEB8',
      400: '#CBC9CF',
      300: '#DDDDDD',
      200: '#EEEEEE',
      100: '#FAFAFA',
    },

    green: {
      200: '#0B3B2D',
      100: '#CED8D5',
    },

    red: {
      300: '#FF472E',
      200: '#FFC2BA',
      100: '#FFE4E0',
    },

    lightGreen: '#00AC07',

    orange: {
      200: '#FF7C1D',
      100: '#FFF4E8',
    },

    yellow: '#FFC23D',

    blue: {
      300: '#E5F3FF',
      200: '#2EB4FF',
      100: '#0085FF',
    },
  },
  fontSize: {
    xxLarge: '32px',
    xLarge: '32px',
    large: '24px',
    medium: '20px',
    regular: '18px',
    small: '16px',
    xSmall: '14px',
    tiny: '13px',
    xxTiny: '12px',
  },
  lineHeights: {
    large: '42px',
    medium: '32px',
    small: '26px',
    xSmall: '24px',
    tiny: '22px',
    xxTiny: '18px',
  },
});

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('*, ::before, ::after', {
  boxSizing: 'border-box',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('button, input, textarea, select', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  color: 'inherit',
  appearance: 'none',
});

globalStyle('button', {
  background: 'none',
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  cursor: 'pointer',
});

globalStyle('img, svg', {
  verticalAlign: 'bottom',
});

globalStyle('body', {
  wordBreak: 'keep-all',
  fontFamily: 'Pretendard, sans-serif',
  color: global.color.black,
  fontSize: '1.6rem',
});
