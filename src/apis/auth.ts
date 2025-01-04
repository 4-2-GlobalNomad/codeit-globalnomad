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
    console.log('Access Token:', response.data.accessToken);
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
