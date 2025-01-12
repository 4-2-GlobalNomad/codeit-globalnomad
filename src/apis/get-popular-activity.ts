import { axiosInstance } from '@/apis/axios-instance';
import { ActivityResponse } from '@/types/mainpage';

const DEFAULT_ACTIVITY_RESPONSE: ActivityResponse = {
  activities: [],
  totalCount: 0,
};

interface PopularActivityQueryKey {
  queryKey: [string, number, number];
}

async function getPopularActivity({ queryKey }: PopularActivityQueryKey): Promise<ActivityResponse> {
  const [, page, size] = queryKey;

  try {
    const urlSearchParams = new URLSearchParams({
      method: 'offset',
      sort: 'most_reviewed',
      page: String(page),
      size: String(size),
    });

    const res = await axiosInstance.get<ActivityResponse>(`/activities?${urlSearchParams}`);
    return res.data;
  } catch (e: unknown) {
    console.error('Error: ', e);
    return DEFAULT_ACTIVITY_RESPONSE;
  }
}

export default getPopularActivity;
