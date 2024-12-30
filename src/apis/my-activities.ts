import { axiosInstance } from '@/apis/axios-instance';

export const fetchMyActivities = async (pageParam = null) => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('No access token found');
    }

    const url =
      pageParam === null
        ? `/my-activities?size=3` // TODO: size는 데이터 추가 시 변경
        : `/my-activities?size=3&cursorId=${pageParam}`; // cursorId가 있을 경우 추가

    const response = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching getMyActivities:', error);
    throw error;
  }
};
