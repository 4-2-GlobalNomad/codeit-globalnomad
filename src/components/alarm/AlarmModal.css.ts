import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const modal = style({
  position: 'absolute',
  width: '368px',
  height: '356px',
  overflowY: 'hidden',
  borderRadius: '10px',
  border: `1px solid ${global.color.gray[400]}`,
  backgroundColor: '#CED8D5',
  padding: '24px',

  '@media': {
    'screen and (max-width: 767px)': {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      maxHeight: 'none',
      padding: '16px',
      borderRadius: '0',
      zIndex: 9999,
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '16px',
  marginBottom: '16px',
});

export const closeButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
});

export const noAlarms = style({
  textAlign: 'center',
  color: '#999',
  fontSize: '1rem',
  marginTop: '1rem',
});

export const alarmList = style({
  maxHeight: '400',
  overflowY: 'auto',
});

export const alarmItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '8px 12px',
  borderRadius: '8px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  marginBottom: '16px',
});

export const statusDot = style({
  width: '8px',
  height: '8px',
  borderRadius: '8px',
  marginRight: '12px',
  flexShrink: '0',
});

export const alarmContent = style({
  flex: '1',
});

export const timeAgo = style({
  fontSize: '12px',
  color: 'gray',
});

export const message = style({
  fontSize: '14px',
  lineHeight: '1.5',
  color: '#333333',
});

export const status = style({
  fontWeight: 'bold',
});

export const approve = style({
  color: '#0085FF',
});

export const reject = style({
  color: '#FF3B30',
});

export const time = style({});

export const deleteButton = style({
  backgroundColor: '#FFFFFF',
});

export const loading = style({
  textAlign: 'center',
  color: '#666',
  marginTop: '20px',
});
