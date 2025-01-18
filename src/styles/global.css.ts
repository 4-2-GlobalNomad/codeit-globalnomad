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
    xxLarge: '3.2rem',
    xLarge: '3.2rem',
    large: '2.4rem',
    medium: '2rem',
    regular: '1.8rem',
    small: '1.6rem',
    xSmall: '1.4rem',
    tiny: '1.3rem',
    xxTiny: '1.2rem',
  },
  lineHeights: {
    large: '4.2rem',
    medium: '3.2rem',
    small: '2.6rem',
    xSmall: '2.4rem',
    tiny: '2.2rem',
    xxTiny: '1.8rem',
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
