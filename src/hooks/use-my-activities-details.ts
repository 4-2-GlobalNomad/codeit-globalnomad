import { axiosInstance } from '@/apis/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useMyActivitiesDetails = (id: number | null) => {
  return useQuery({
    queryKey: ['my-activities', id],
    queryFn: async () => {
      return await axiosInstance.get(`/activities/${id}`);
    },
    enabled: Boolean(id),
  });
};
