import React from 'react';
import styles from './LoginButton.module.css';

interface LoginButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const LoginButton: React.FC<LoginButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};
