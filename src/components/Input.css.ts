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
});

export const leftIconDiv = style({
  gridColumn: '1',
});

export const inputField = style({
  gridColumn: '2',
  border: 'none',

  ':focus': {
    outline: 'none',
  },
});

export const rightIconDiv = style({
  gridColumn: '3',
});
