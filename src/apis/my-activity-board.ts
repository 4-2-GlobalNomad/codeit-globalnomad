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
