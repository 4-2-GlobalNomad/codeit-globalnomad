import React from 'react';
import * as styles from './AlarmModal.css';

export interface Alarm {
  id: number;
  message: string;
  status: 'approved' | 'rejected';
  time: string;
}

interface AlarmModalProps {
  alarms: Alarm[];
  onClose: () => void;
}

export const AlarmModal: React.FC<AlarmModalProps> = ({ alarms, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <span>알람 {alarms.length}개</span>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
      </div>
      {alarms.map((alarm) => (
        <div key={alarm.id} className={styles.alarmItem}>
          <div>
            <p className={styles.message}>{alarm.message}</p>
            <span className={`${styles.status} ${alarm.status === 'approved' ? styles.approve : styles.reject}`}>
              {alarm.status === 'approved' ? '승인' : '거절'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
