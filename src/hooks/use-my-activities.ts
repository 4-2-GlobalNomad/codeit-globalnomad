import { fetchMyActivities } from '@/apis/my-activities';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useMyActivities = () => {
  return useInfiniteQuery({
    queryKey: ['my-activities'],
    queryFn: ({ pageParam = null }) => fetchMyActivities(pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.cursorId;
    },
    staleTime: 1000 * 60, // 1분
  });
};
