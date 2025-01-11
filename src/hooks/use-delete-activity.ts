import { axiosInstance } from '@/apis/axios-instance';
import { useMutation } from '@tanstack/react-query';

export const useDeleteActivity = () =>
  useMutation({
    mutationFn: (id: number) => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error('No access token found');
      }

      return axiosInstance.delete(`/my-activities/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
