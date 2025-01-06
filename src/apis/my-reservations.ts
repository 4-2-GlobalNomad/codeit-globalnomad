import { axiosInstance } from '@/apis/axios-instance';

export const fetchMyReservations = async (pageParam: null | number, queryKey: string[], isFiltered: boolean) => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('access token을 찾을 수 없음');
    }

    const cursorUrl = isFiltered ? `/${queryKey}&cursorId=${pageParam}` : `/${queryKey}?cursorId=${pageParam}`;
    const url = pageParam === null ? `/${queryKey}` : cursorUrl;

    console.log('url: ', url);

    const response = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('fetchMyReservations에서 에러 발생:', error);
    throw new Error('fetchMyReservations에서 에러 발생');
  }
};
