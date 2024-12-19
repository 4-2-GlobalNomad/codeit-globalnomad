import { style } from '@vanilla-extract/css';

export const button = style({
  width: '100%',
  padding: '0.75rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '1rem',
  transition: 'background-color 0.2s ease',
});

export const buttonHover = style({
  backgroundColor: '#0056b3',
});

export const buttonFocus = style({
  outline: 'none',
  boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
});
