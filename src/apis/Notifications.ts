import axios from 'axios';

export interface AlarmResponse {
  id: number;
  message: string;
  status: 'approved' | 'rejected';
  time: string;
}

// 알람 데이터 가져오기
export const fetchAlarms = async (teamId = '10-2', cursorId?: number, size = 10): Promise<AlarmResponse[]> => {
  const url = `https://sp-globalnomad-api.vercel.app/${teamId}/my-notifications`;

  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('로그인이 필요합니다. 토큰이 없습니다.');
  }

  try {
    const response = await axios.get<AlarmResponse[]>(url, {
      params: {
        cursorId,
        size,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    });

    console.log('알람 데이터:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('알람 가져오기 실패:', error.response ? error.response.data : error.message);
      throw new Error('알람 가져오기 실패: 서버 에러');
    } else {
      console.error('예상치 못한 에러:', error);
      throw new Error('알람 가져오기 실패: 예상치 못한 에러');
    }
  }
};
