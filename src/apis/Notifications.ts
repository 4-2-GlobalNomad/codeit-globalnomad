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
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
      params: {
        cursorId,
        size,
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

//알림 삭제
export const deleteAlarm = async (teamId: '10-2', notificationId: number): Promise<void> => {
  const url = `https://sp-globalnomad-api.vercel.app/${teamId}/my-notifications/${notificationId}`;
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('로그인이 필요합니다. 토큰이 없습니다.');
  }

  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    });

    if (response.status === 204) {
      console.log(`알림 ID ${notificationId} 삭제 성공`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('알림 삭제 실패:', error.response ? error.response.data : error.message);
      throw new Error('알림 삭제 실패: 서버 에러');
    } else {
      console.error('예상치 못한 에러:', error);
      throw new Error('알림 삭제 실패: 예상치 못한 에러');
    }
  }
};
