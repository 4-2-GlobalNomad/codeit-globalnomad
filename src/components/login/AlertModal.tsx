import React from 'react';
import * as styles from './AlertModal.css';

interface AlertModalProps {
  message: string;
  onClose: () => void;
}

export default function AlertModal({ message, onClose }: AlertModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p className={styles.message}>{message}</p>
        <button className={styles.closeButton} onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
}
