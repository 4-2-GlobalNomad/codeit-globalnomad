'use client';

import { signupWithKakao } from '@/apis/oauth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const KakaoSignupPage = () => {
  const router = useRouter();

  // State
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 닉네임 유효성 검사
    if (!nickname.trim()) {
      setError('닉네임을 입력해주세요.');
      return;
    }

    if (nickname.length > 10) {
      setError('닉네임은 최대 10자까지 가능합니다.');
      return;
    }

    setLoading(true);

    try {
      // 토큰 가져오기
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
        router.push('/login');
        return;
      }

      // 회원가입 API 호출
      await signupWithKakao(nickname, accessToken);
      alert('회원가입 완료! 메인 페이지로 이동합니다.');
      router.push('/');
    } catch (error) {
      console.error(error);
      setError('회원가입 처리 중 문제가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  // Rendering
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>카카오 간편 회원가입</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor='nickname' style={{ display: 'block', marginBottom: '5px' }}>
            닉네임
          </label>
          <input
            id='nickname'
            type='text'
            value={nickname}
            onChange={handleInputChange}
            placeholder='닉네임을 입력하세요'
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
        </div>
        <button
          type='submit'
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#FFEB00',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? '회원가입 중...' : '회원가입'}
        </button>
      </form>
    </div>
  );
};

export default KakaoSignupPage;
