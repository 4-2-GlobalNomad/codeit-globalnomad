import { axiosInstance } from './axios-instance';

export const getMyActivities = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    console.log('Token found:', token);

    if (!token) {
      throw new Error('No access token found');
    }

    const response = await axiosInstance.get('/my-activities', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('API Response:', response.data.activities);
    return response.data.activities;
  } catch (error) {
    console.error('Error fetching getMyActivities:', error);
  }
};
