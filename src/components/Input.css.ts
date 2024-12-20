import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

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
