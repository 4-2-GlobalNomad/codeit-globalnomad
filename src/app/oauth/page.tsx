'use client';

import { fetchKakaoAccessToken, fetchKakaoUserInfo, signupWithKakao } from '@/apis/oauth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const KakaoRedirectPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKakaoRedirect = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (!code) {
        setError('카카오 인증 코드가 없습니다.');
        setLoading(false);
        return;
      }

      try {
        // 1. 액세스 토큰 발급
        const accessToken = await fetchKakaoAccessToken(code);
        localStorage.setItem('accessToken', accessToken);

        // 2. 사용자 정보 가져오기
        const userInfo = await fetchKakaoUserInfo(accessToken);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        // 3. 회원가입 요청
        try {
          await signupWithKakao(userInfo.properties.nickname, accessToken);
          alert('회원가입 및 로그인 완료!');
          router.push('/');
        } catch (signUpError: unknown) {
          if (typeof signUpError === 'object' && signUpError !== null && 'response2' in signUpError) {
            const error = signUpError as { response2: { status: number } }; // 명확한 타입 선언
            if (error.response2.status === 400) {
              alert('이미 회원입니다. 로그인 처리 완료!');
              router.push('/');
            } else {
              alert('회원가입 처리 중 오류가 발생했습니다.');
            }
          } else {
            alert('알 수 없는 오류가 발생했습니다.');
          }
        }
      } catch {
        setError('카카오 인증 처리 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    handleKakaoRedirect();
  }, [router]);

  if (loading) {
    return <p>카카오 인증 처리 중...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return null;
};

export default KakaoRedirectPage;
