import { fetchMyReservations } from '@/apis/my-reservations';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useMyReservations = () => {
  return useInfiniteQuery({
    queryKey: ['my-reservations'],
    queryFn: ({ pageParam = null }) => fetchMyReservations(pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.cursorId; // 더 없으면 null
    },
    staleTime: 1000 * 60,
  });
};
