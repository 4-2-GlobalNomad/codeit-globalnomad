import React from 'react';
import { global } from '@/styles/global.css';
import * as styles from './BasicInput.css';

interface IconInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function BasicInput(props: IconInputProps) {
  const { icon, iconPosition, ...others } = props;

  if (!others.type) others.type = 'text';

  others.style = {
    fontSize: global.fontSize.small,
    lineHeight: global.lineHeights.small,
    color: global.color.gray[600],
    fontWeight: '400',
    ...others.style,
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.leftIconDiv}>{icon && iconPosition === 'left' && icon}</div>
      <input className={styles.inputField} {...others} />
      <div className={styles.rightIconDiv}>{icon && iconPosition === 'right' && icon}</div>
    </div>
  );
}
