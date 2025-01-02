import axios from 'axios';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    nickname: string;
    profileImageUrl: string;
  };
}

// 토큰 받기
export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const teamId = '10-2';
  const url = `https://sp-globalnomad-api.vercel.app/${teamId}/auth/login`;

  try {
    const response = await axios.post<LoginResponse>(
      url,
      {
        email,
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
      throw new Error('로그인 실패: 서버 에러');
    } else {
      throw new Error('로그인 실패: 예상치 못한 에러');
    }
  }
};

//토큰 갱신
export const refreshAccessToken = async (): Promise<void> => {
  const refreshToken = localStorage.getItem('refreshToken');

  if (!refreshToken) {
    throw new Error('Refresh Token이 없습니다.');
  }

  try {
    const response = await axios.post(
      `https://sp-globalnomad-api.vercel.app/10-2/auth/tokens`,
      { refreshToken },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    const { accessToken, refreshToken: newRefreshToken } = response.data;

    localStorage.setItem('accessToken', accessToken);
    if (newRefreshToken) {
      localStorage.setItem('refreshToken', newRefreshToken);
    }
  } catch (error) {
    console.error('토큰 갱신 실패:', error);
    throw new Error('토큰 갱신 실패');
  }
};
