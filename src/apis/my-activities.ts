import { axiosInstance } from './axios-instance';

export const getMyActivities = async () => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('No access token found');
    }

    const response = await axiosInstance.get('/my-activities', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.activities;
  } catch (error) {
    console.error('Error fetching getMyActivities:', error);
  }
};
