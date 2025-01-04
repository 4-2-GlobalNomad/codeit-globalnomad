import { Alarm } from '@/components/alarm/AlarmModal';
import axios from 'axios';
import { axiosInstance } from './axios-instance';

const apiClient = axios.create({
  baseURL: 'https://sp-globalnomad-api.vercel.app',
  headers: {
    Accept: 'application/json',
  },
});

// 알람 데이터 가져오기
export const fetchAlarms = async (
  teamId: string,
  cursorId: number | null,
  size: number,
): Promise<{
  notifications: Alarm[];
  cursorId: number | null;
  totalCount: number;
}> => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    throw new Error('로그인이 필요합니다. 토큰이 없습니다.');
  }

  try {
    const response = await axiosInstance.get(`/my-notifications`, {
      params: {
        cursorId: cursorId ?? 0,
        size,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('알림 데이터를 가져오는데 실패했습니다.');
    } else {
      throw new Error('알림 데이터를 가져오는데 예상치 못한 에러가 발생했습니다.');
    }
  }
};

//알림 삭제
export const deleteAlarm = async (teamId: '10-2', notificationId: number): Promise<void> => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('로그인이 필요합니다. 토큰이 없습니다.');
  }

  try {
    const response = await apiClient.delete(`/${teamId}/my-notifications/${notificationId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 204) {
      console.log(`알림 ID ${notificationId} 삭제 성공`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('알림 삭제 실패: 서버 에러');
    } else {
      console.error('예상치 못한 에러:', error);
      throw new Error('알림 삭제 실패: 예상치 못한 에러');
    }
  }
};
