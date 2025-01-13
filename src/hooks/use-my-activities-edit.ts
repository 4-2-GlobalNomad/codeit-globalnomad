import { axiosInstance } from '@/apis/axios-instance';
import { MyActivitiesEditData } from '@/types/my-activities-edit-data';
import { useMutation } from '@tanstack/react-query';

export const useMyActivitiesEdit = () =>
  useMutation({
    mutationFn: ({ activityId, data }: { activityId: number; data: MyActivitiesEditData }) => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error('No access token found');
      }

      return axiosInstance.patch(`/my-activities/${activityId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
