import axios from 'axios';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

// 로그인
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
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('로그인 실패:', error.response ? error.response.data : error.message);
      throw new Error('로그인 실패: 서버 에러');
    } else {
      console.error('예상치 못한 에러:', error);
      throw new Error('로그인 실패: 예상치 못한 에러');
    }
  }
};

// 토큰 재발급
export const refreshAccessToken = async (): Promise<string> => {
  const teamId = '10-2';
  const url = `https://sp-globalnomad-api.vercel.app/${teamId}/auth/tokens`;
  const refreshToken = localStorage.getItem('refreshToken');

  if (!refreshToken) {
    throw new Error('리프레시 토큰이 없습니다. 다시 로그인해주세요.');
  }

  try {
    const response = await axios.post<{ accessToken: string }>(
      url,
      { refreshToken },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    // 새로운 accessToken 저장
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data.accessToken;
  } catch (error) {
    console.error('토큰 갱신 실패:', error);
    throw new Error('토큰 갱신 실패');
  }
};
