'use client';

import { signup } from '@/apis/users';
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
import React, { useState } from 'react';
import * as styles from './page.css';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [type, setType] = useState<'password' | 'text'>('password');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
  });

  const [loading, setLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleEmailBlur = () => {
    if (!email.includes('@') || !email.includes('.')) {
      setErrors((prev) => ({ ...prev, email: '이메일 형식으로 작성해 주세요.' }));
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const handleNicknameBlur = () => {
    if (nickname.length > 10) {
      setErrors((prev) => ({ ...prev, nickname: '열 자 이하로 작성해주세요.' }));
    } else {
      setErrors((prev) => ({ ...prev, nickname: '' }));
    }
  };

  const handlePasswordBlur = () => {
    if (password.length < 8) {
      setErrors((prev) => ({ ...prev, password: '비밀번호는 8자 이상이어야 합니다.' }));
    } else {
      setErrors((prev) => ({ ...prev, password: '' }));
    }
  };

  const handlePasswordConfirmBlur = () => {
    if (password !== passwordConfirm) {
      setErrors((prev) => ({ ...prev, passwordConfirm: '비밀번호가 일치하지 않습니다.' }));
    } else {
      setErrors((prev) => ({ ...prev, passwordConfirm: '' }));
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!Object.values(errors).some((error) => error) && email && nickname && password && passwordConfirm) {
      try {
        setLoading(true);

        const response = await signup(email, nickname, password);
        console.log('회원가입 성공:', response);
      } catch {
        setAlertMessage('이미 사용중인 이메일입니다.');
        setIsAlertOpen(true);
      } finally {
        setLoading(false);
      }
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
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailBlur}
              placeholder='이메일을 입력해 주세요'
              variant='authPage'
              error={Boolean(errors.email)}
              errorMessage={errors.email}
              style={{
                color: '#000',
              }}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>닉네임</label>
            <Input
              type='text'
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              onBlur={handleNicknameBlur}
              placeholder='닉네임을 입력해 주세요'
              variant='authPage'
              error={Boolean(errors.nickname)}
              errorMessage={errors.nickname}
              style={{
                color: '#000',
              }}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>비밀번호</label>
            <Input
              type={type}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handlePasswordBlur}
              placeholder='비밀번호를 입력해 주세요'
              variant='authPage'
              error={Boolean(errors.password)}
              errorMessage={errors.password}
              style={{
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
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>비밀번호 확인</label>
            <Input
              type={type}
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              onBlur={handlePasswordConfirmBlur}
              placeholder='비밀번호를 다시 입력해 주세요'
              variant='authPage'
              error={Boolean(errors.passwordConfirm)}
              errorMessage={errors.passwordConfirm}
              style={{
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
          </div>

          <Button
            label='회원가입 하기'
            disabled={loading || !email || !nickname || !password || !passwordConfirm}
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
