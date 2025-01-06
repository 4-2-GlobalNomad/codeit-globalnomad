'use client';

import { login } from '@/apis/auth';
import GoogleIcon from '@/assets/icons/google.svg';
import KakaoIcon from '@/assets/icons/kakao.svg';
import VisibilityOff from '@/assets/icons/visibility-off.svg';
import VisibilityOn from '@/assets/icons/visibility-on.svg';
import Input from '@/components/Input';
import { Button } from '@/components/button/Button';
import Dialog from '@/components/modal/Dialog';
import Modal from '@/components/modal/Modal';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import * as styles from './page.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState<'password' | 'text'>('password');
  const router = useRouter();
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleEmailBlur = () => {
    if (!email.includes('@') || !email.includes('.')) {
      setErrors((prev) => ({ ...prev, email: '이메일 형식으로 작성해 주세요.' }));
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const handlePasswordBlur = () => {
    if (password.length < 8) {
      setErrors((prev) => ({ ...prev, password: '8자 이상 작성해 주세요.' }));
    } else {
      setErrors((prev) => ({ ...prev, password: '' }));
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { accessToken, refreshToken, user } = await login(email, password);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('userInfo', JSON.stringify(user));
      alert('로그인 성공!');
      router.push('/');
    } catch {
      setAlertMessage('비밀번호가 일치하지 않습니다.');
      setIsAlertOpen(true);
    }
  };

  return (
    <div className={styles.container}>
      {isAlertOpen && (
        <Modal
          handleModalState={() => setIsAlertOpen(false)}
          content={<Dialog handleModalState={() => setIsAlertOpen(false)} message={alertMessage} />}
        />
      )}
      <div className={styles.loginBox}>
        <div className={styles.logoContainer}>
          <Link href='/'>
            <Image src='/icons/logo-big.svg' alt='GlobalNomad 로고' className={styles.logo} width={340} height={192} />
          </Link>
        </div>
        <form className={styles.form} onSubmit={handleLogin} noValidate>
          <div className={styles.formGroup}>
            <label className={styles.label}>이메일</label>
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailBlur}
              placeholder='이메일을 입력해 주세요'
              variant='authPage'
              style={{
                color: '#000',
              }}
            />
            {errors.email && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }}>{errors.email}</p>}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>비밀번호</label>
            <Input
              type={type}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handlePasswordBlur}
              placeholder='8자 이상 입력해 주세요'
              variant='authPage'
              style={{
                paddingRight: '1.2rem',
                color: '#000',
              }}
              icon={
                type === 'password' ? (
                  <VisibilityOff onClick={() => setType('text')} tabIndex={0} aria-label='비밀번호 표시' />
                ) : (
                  <VisibilityOn onClick={() => setType('password')} tabIndex={0} aria-label='비밀번호 숨기기' />
                )
              }
              iconPosition='right'
            />
            {errors.password && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }}>{errors.password}</p>}
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
