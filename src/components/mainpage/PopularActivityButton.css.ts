import { style, styleVariants } from '@vanilla-extract/css';

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
});

export const arrowButton = style({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px',
  transition: 'opacity 0.2s ease',
});

export const arrowButtonDisabled = style({
  cursor: 'not-allowed',
  opacity: 0.5,
});

export const icon = styleVariants({
  enabled: {
    stroke: '#4b5563',
  },
  disabled: {
    stroke: '#FFFFFF',
  },
});
