import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const SelectBoxContainer = style({
  border: `1px solid ${global.color.gray[800]}`,
  height: '5.4rem',
  borderRadius: '0.4rem',
});

export const arrow = style({
  transition: 'transform 0.3s',
});

export const rotated = style({
  transform: 'rotate(180deg)',
});
