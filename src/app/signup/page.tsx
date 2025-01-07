'use client';

import GoogleIcon from '@/assets/icons/google.svg';
import KakaoIcon from '@/assets/icons/kakao.svg';
import Input from '@/components/Input';
import { Button } from '@/components/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import * as styles from './page.css';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirm(e.target.value);

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('회원가입 로직 추가 필요');
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupBox}>
        <div className={styles.logoContainer}>
          <Link href='/'>
            <Image src='/icons/logo-big.svg' alt='GlobalNomad 로고' className={styles.logo} width={340} height={192} />
          </Link>
        </div>
        <form className={styles.form} onSubmit={handleSignupSubmit} noValidate>
          <div className={styles.formGroup}>
            <label className={styles.label}>이메일</label>
            <Input
              type='email'
              value={email}
              onChange={handleEmailChange}
              placeholder='이메일을 입력해 주세요'
              variant='authPage'
              style={{
                color: '#000',
              }}
            />
            {errors.email && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }}>{errors.email}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>닉네임</label>
            <Input
              type='text'
              value={nickname}
              onChange={handleNicknameChange}
              placeholder='닉네임을 입력해 주세요'
              variant='authPage'
              style={{
                color: '#000',
              }}
            />
            {errors.nickname && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }}>{errors.nickname}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>비밀번호</label>
            <Input
              type='password'
              value={password}
              onChange={handlePasswordChange}
              placeholder='비밀번호를 입력해 주세요'
              variant='authPage'
              style={{
                color: '#000',
              }}
            />
            {errors.password && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }}>{errors.password}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>비밀번호 확인</label>
            <Input
              type='password'
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              placeholder='비밀번호를 다시 입력해 주세요'
              variant='authPage'
              style={{
                color: '#000',
              }}
            />
            {errors.passwordConfirm && (
              <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }}>{errors.passwordConfirm}</p>
            )}
          </div>

          <Button
            label='회원가입 하기'
            disabled={!email || !nickname || !password || !passwordConfirm}
            className={styles.signupButton}
          />
        </form>

        <div className={styles.footer}>
          회원이신가요?{' '}
          <a href='/login' className={styles.linkText}>
            로그인하기
          </a>
        </div>

        <div className={styles.socialLoginContainer}>
          <div className={styles.line}></div>
          <p>SNS 계정으로 회원가입하기</p>
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
