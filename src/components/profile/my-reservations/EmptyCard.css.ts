import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '150px',
});

export const icon = style({
  width: '240px',
  height: '240px',
});

export const message = style({
  color: `${global.color.gray[800]}`,
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: '32px',
});
