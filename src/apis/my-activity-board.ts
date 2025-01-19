import { axiosInstance } from '@/apis/axios-instance';

// res1
export const fetchMyActivityList = async () => {
  try {
    const url = 'my-activities?size=1000';
    // console.log('url: ', url);

    const response = await axiosInstance.get(url, {});

    return response.data;
  } catch (error) {
    console.error('fetchMyActivityList에서 에러 발생:', error);
    throw new Error('fetchMyActivityList에서 에러 발생');
  }
};

// res2
export const fetchMyCalendarEvent = async (activityId: number, year: string, month: string) => {
  try {
    const url = `my-activities/${activityId}/reservation-dashboard?year=${year}&month=${month}`;
    // console.log('url: ', url);

    const response = await axiosInstance.get(url, {});

    return response.data;
  } catch (error) {
    console.error('fetchMyCalendarEvent에서 에러 발생:', error);
    throw new Error('fetchMyCalendarEvent에서 에러 발생');
  }
};

// res3
export const fetchMyReservedSchedule = async (activityId: number, date: string) => {
  try {
    const url = `my-activities/${activityId}/reserved-schedule?date=${date}`;
    // console.log('url: ', url);

    const response = await axiosInstance.get(url, {});

    return response.data;
  } catch (error) {
    console.error('fetchMyReservedSchedule에서 에러 발생:', error);
    throw new Error('fetchMyReservedSchedule에서 에러 발생');
  }
};

// res4
export const fetchMyReservations = async (activityId: number, scheduleId: number, status: string) => {
  try {
    const url = `my-activities/${activityId}/reservations?scheduleId=${scheduleId}&status=${status}&size=1000`;
    console.log('url: ', url);

    const response = await axiosInstance.get(url, {});

    return response.data.reservations;
  } catch (error) {
    console.error('fetchMyReservations에서 에러 발생:', error);
    throw new Error('fetchMyReservations에서 에러 발생');
  }
};

// confirm
export const confirmReservation = async (activityId: number, reservationId: number) => {
  try {
    const url = `my-activities/${activityId}/reservations/${reservationId}`;
    // console.log('url: ', url);

    const response = await axiosInstance.patch(url, {
      status: 'confirmed',
    });

    return response.data;
  } catch (error) {
    console.error('confirmReservation에서 에러 발생:', error);
    throw new Error('confirmReservation에서 에러 발생');
  }
};

// decline
export const declineReservation = async (activityId: number, reservationId: number) => {
  try {
    const url = `my-activities/${activityId}/reservations/${reservationId}`;
    // console.log('url: ', url);

    const response = await axiosInstance.patch(url, {
      status: 'declined',
    });

    return response.data;
  } catch (error) {
    console.error('declineReservation에서 에러 발생:', error);
    throw new Error('declineReservation에서 에러 발생');
  }
};
