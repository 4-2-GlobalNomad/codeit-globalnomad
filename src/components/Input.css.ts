import { fontSizes } from '@/styles/fontStyles.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const variantStyles = styleVariants({
  default: {
    borderRadius: '0.4rem',
    padding: '1.5rem 1.6rem',
  },
  /** 로그인, 회원가입만 해당 스타일 */
  authPage: {
    borderRadius: '0.6rem',
    padding: '1.6rem 2rem',
  },
});

export const inputContainer = style({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'auto 1fr auto',
  width: '100%',
  border: `1px solid ${global.color.gray[800]}`,
  backgroundColor: '#fff',

  selectors: {
    '&:focus-within': {
      border: `1px solid ${global.color.green[200]}`,
    },
  },
});

export const errorStyle = style({
  borderColor: `${global.color.red[300]}`,

  selectors: {
    '&:focus-within': {
      border: `1px solid ${global.color.red[300]}`,
    },
  },
});

export const errorMessage = style({
  fontSize: fontSizes.textXs,
  color: global.color.red[300],
  marginTop: '0.8rem',
});

export const leftIconDiv = style({
  gridColumn: '1',
});

export const inputField = style({
  gridColumn: '2',
  border: 'none',

  selectors: {
    '&:focus': {
      outline: 'none',
    },

    '&::placeholder': {
      color: global.color.gray[600],
    },
  },
});

export const rightIconDiv = style({
  gridColumn: '3',
});
