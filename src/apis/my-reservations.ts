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

export const cancelMyReservations = async (reservationId: number) => {
  try {
    const url = `my-reservations/${reservationId}`;
    // console.log('url: ', url);

    const response = await axiosInstance.patch(url, {
      status: 'canceled',
    });

    return response.data;
  } catch (error) {
    console.error('cancelMyReservations에서 에러 발생:', error);
    throw new Error('cancelMyReservations에서 에러 발생');
  }
};

export const reviewMyReservations = async (reservationId: number, rating: number, content: string) => {
  try {
    const url = `my-reservations/${reservationId}/reviews`;
    // console.log('url: ', url);

    const review = {
      rating: rating,
      content: content,
    };

    const response = await axiosInstance.post(url, review);

    return response.data;
  } catch (error) {
    console.error('reviewMyReservations에서 에러 발생:', error);
    throw new Error('reviewMyReservations에서 에러 발생');
  }
};
