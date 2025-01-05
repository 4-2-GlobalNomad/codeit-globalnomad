import React from 'react';
import * as styles from './Button.css';

// ex) <Button label='텍스트' className={클래스네임} disabled={!email || !password} />
// ex) <Button label='저장하기' className={클래스네임} variant='outline'/>
// label에는 텍스트를 넣어서 쓰고 className을 넣어 css로 width 랑 heigh등 자율적으로 처리하게 했습니다
// variant 값은 solid는 색이 채워져있는 버튼 outline은 비워져있는 값입니다.
// disabled 값은 boolean으로 처리해두었습니다.
type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'solid' | 'outline';
  className?: string;
};
export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, variant = 'solid', className }) => {
  const classNames = `${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''} ${className || ''}`;
  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
