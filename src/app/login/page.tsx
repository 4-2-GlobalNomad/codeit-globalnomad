'use client';

import { login } from '@/apis/auth';
import GoogleIcon from '@/assets/icons/google.svg';
import KakaoIcon from '@/assets/icons/kakao.svg';
import VisibilityOff from '@/assets/icons/visibility-off.svg';
import VisibilityOn from '@/assets/icons/visibility-on.svg';
import Input from '@/components/Input';
import { Button } from '@/components/button/Button';
import Image from 'next/image';
import React, { useState } from 'react';
import * as styles from './page.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState<'password' | 'text'>('password');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      localStorage.setItem('userInfo', JSON.stringify(response.user));
      alert('로그인 성공!');
    } catch {
      alert('로그인 실패. 다시 시도해 주세요.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.logoContainer}>
          <Image src='/icons/logo-big.svg' alt='GlobalNomad 로고' className={styles.logo} width={340} height={192} />
        </div>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label className={styles.label}>이메일</label>
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='이메일을 입력해 주세요'
              variant='authPage'
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>비밀번호</label>
            <Input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='8자 이상 입력해 주세요'
              variant='authPage'
              style={{ paddingRight: '1.2rem' }}
              icon={
                type === 'password' ? (
                  <VisibilityOff onClick={() => setType('text')} tabIndex={0} aria-label='비밀번호 표시' />
                ) : (
                  <VisibilityOn onClick={() => setType('password')} tabIndex={0} aria-label='비밀번호 숨기기' />
                )
              }
              iconPosition='right'
            />
          </div>
          <Button label='로그인 하기' disabled={!email || !password} className={styles.loginButton} />
        </form>
        <div className={styles.footer}>
          회원이 아니신가요?{' '}
          <a href='/signup' className={styles.linkText}>
            회원가입하기
          </a>
        </div>
        <div className={styles.socialLoginContainer}>
          <div className={styles.line}></div>
          <p>SNS 계정으로 로그인하기</p>
          <div className={styles.line}></div>
        </div>
        <div className={styles.socialButtons}>
          <button>
            <GoogleIcon />
          </button>
          <button>
            <KakaoIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
