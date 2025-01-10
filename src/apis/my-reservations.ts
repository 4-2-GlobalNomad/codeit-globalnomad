import { axiosInstance } from '@/apis/axios-instance';

export const fetchMyReservations = async (pageParam: null | number, queryKey: string[], isFiltered: boolean) => {
  try {
    const cursorUrl = isFiltered ? `/${queryKey}&cursorId=${pageParam}` : `/${queryKey}?cursorId=${pageParam}`;
    const url = pageParam === null ? `/${queryKey}` : cursorUrl;

    // console.log('url: ', url);

    const response = await axiosInstance.get(url, {});

    return response.data;
  } catch (error) {
    console.error('fetchMyReservations에서 에러 발생:', error);
    throw new Error('fetchMyReservations에서 에러 발생');
  }
};
