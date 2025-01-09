import React from 'react';
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
import { global } from '@/styles/global.css';
import * as styles from './Input.css';

/** input 컴포넌트: 아이콘을 포함한 input 컴포넌트입니다.
 * Props는 선택사항이며, 필요에 따라 사용하면 됩니다.
 * 아이콘이 있는 경우, placeholder와 겹칠 수 있으므로 inline style로 padding을 조절해주세요.
 * 
 * <Props 설명> 
 * 1. icon: 아이콘 컴포넌트
 * 2. iconPosition: 아이콘 위치
 * 3. variant: border-radius, padding 등의 스타일을 변경할 때 사용 (login, signup 페이지만 'authPage' 로 스타일 변경)
 * 
 * <사용법>
 * 1. 아이콘이 없는 경우
 * <Input placeholder='입력' />
 * 
 * 2. 아이콘이 있는 경우
 * <Input style={{ paddingLeft: '0.8rem' }} placeholder='내가 원하는 체험은' icon={<Search />} iconPosition='left' />
 * 
 * 3. 비밀번호 입력 시, 아이콘 변경
        <Input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ paddingRight: '1.2rem' }}
          variant={'authPage'}
          placeholder='비밀번호를 입력해주세요'
          icon={
            type === 'password' ? (
              <VisibilityOff onClick={() => setType('text')} />
            ) : (
              <VisibilityOn onClick={() => setType('password')} />
            )
          }
          iconPosition='right'
        />
 */

interface IconInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: 'default' | 'authPage';
  error?: boolean;
  errorMessage?: string;
  register?: (name: string, options?: RegisterOptions) => UseFormRegisterReturn; // react-hook-form의 register 함수
}

export default function Input(props: IconInputProps) {
  const { icon, iconPosition, variant = 'default', error, errorMessage, register, ...others } = props;

  if (!others.type) {
    others.type = 'text';
  }

  others.style = {
    fontSize: global.fontSize.small,
    lineHeight: global.lineHeights.small,
    color: global.color.black,
    fontWeight: '400',
    ...others.style,
  };

  return (
    <>
      <div className={`${styles.inputContainer} ${styles.variantStyles[variant]} ${error ? styles.errorStyle : ''}`}>
        <div className={styles.leftIconDiv}>{icon && iconPosition === 'left' && icon}</div>
        <input className={styles.inputField} {...register} {...others} />
        <div className={styles.rightIconDiv}>{icon && iconPosition === 'right' && icon}</div>
      </div>
      {error && errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </>
  );
}
