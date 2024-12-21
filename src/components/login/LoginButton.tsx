import React from 'react';
import * as styles from './LoginButton.css';

interface LoginButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const LoginButton: React.FC<LoginButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.button}
      onMouseEnter={(e) => e.currentTarget.classList.add(styles.buttonHover)}
      onMouseLeave={(e) => e.currentTarget.classList.remove(styles.buttonHover)}
      onFocus={(e) => e.currentTarget.classList.add(styles.buttonFocus)}
      onBlur={(e) => e.currentTarget.classList.remove(styles.buttonFocus)}
    >
      {label}
    </button>
  );
};
