import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const modal = style({
  position: 'absolute',
  top: '80px',
  right: '170px',
  width: '368px',
  height: '356px',
  overflow: 'hidden',
  borderRadius: '10px',
  border: `1px solid ${global.color.gray[400]}`,
  backgroundColor: '#CED8D5',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '24px',
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

export const alarmItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 12px',
  borderRadius: '8px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  marginBottom: '16px',
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
  color: '#007AFF',
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
