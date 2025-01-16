import { axiosInstance } from '@/apis/axios-instance';
import axios from 'axios';

interface SignupResponse {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export const signup = async (email: string, nickname: string, password: string): Promise<SignupResponse> => {
  const teamId = '10-2';
  const url = `https://sp-globalnomad-api.vercel.app/${teamId}/users`;

  try {
    const response = await axiosInstance.post<SignupResponse>(
      url,
      {
        email,
        nickname,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // 오류 응답에 따른 에러 처리
      if (error.response?.status === 400) {
        throw new Error('잘못된 요청: 이메일 형식이 올바르지 않습니다.');
      } else if (error.response?.status === 409) {
        throw new Error('중복된 이메일입니다.');
      } else {
        throw new Error('회원가입 실패: 서버 에러');
      }
    } else {
      throw new Error('회원가입 실패: 예상치 못한 에러');
    }
  }
};

//내 정보 조회
export const fetchUserInfo = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const teamId = '10-2';
  const response = await axiosInstance.get(`https://sp-globalnomad-api.vercel.app/${teamId}/users/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

//내 정보 수정
export const updateUserInfo = async (data: {
  nickname?: string;
  profileImageUrl?: string;
  newPassword?: string;
}): Promise<void> => {
  const accessToken = localStorage.getItem('accessToken');
  const teamId = '10-2';
  try {
    const response = await axiosInstance.patch(`https://sp-globalnomad-api.vercel.app/${teamId}/users/me`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('User info updated:', response.data);
  } catch (error) {
    console.error('Error updating user info:', error);
    throw new Error('사용자 정보 수정 실패');
  }
};
