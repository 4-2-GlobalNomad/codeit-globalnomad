import { style } from '@vanilla-extract/css';

export const background = style({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '10',
});

export const modalArea = style({
  backgroundColor: '#ffffff',
  height: 'fit-content',
  width: 'fit-content',
  padding: '3.2rem 2.4rem',
  borderRadius: '2.4rem',
});
