'use client';

import { login } from '@/apis/auth';
import { LoginButton } from '@/components/login/LoginButton';
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(email, password);
      localStorage.setItem('accessToken', response.accessToken);
      alert('로그인 성공!');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인 실패. 다시 시도해 주세요.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', padding: '2rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>GlobalNomad</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>이메일</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='이메일을 입력해 주세요'
              style={{
                width: '100%',
                padding: '0.5rem',
                margin: '0.5rem 0',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
          <div>
            <label>비밀번호</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='비밀번호를 입력해 주세요'
              style={{
                width: '100%',
                padding: '0.5rem',
                margin: '0.5rem 0',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
          <LoginButton label='로그인 하기' type='submit' />
        </form>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p>
            회원이 아니신가요?{' '}
            <a href='#' style={{ color: '#007bff', textDecoration: 'none' }}>
              회원가입
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
