import { axiosInstance } from '@/apis/axios-instance';
import { ActivityResponse } from '@/types/mainpage';

const defaultActivityResponse: ActivityResponse = {
  activities: [],
  totalCount: 0,
};

const getCurrentPageActivity = async (
  pageNum: number,
  size: number,
  category?: string,
  sort?: string,
): Promise<ActivityResponse> => {
  const urlSearchParams = new URLSearchParams({
    method: 'offset',
    page: String(pageNum + 1),
    size: String(size),
  });

  if (category) urlSearchParams.append('category', category);
  if (sort) urlSearchParams.append('sort', sort);

  try {
    const res = await axiosInstance.get<ActivityResponse>(`/activities?${urlSearchParams}`);
    return res.data;
  } catch (e) {
    console.error('Error: ', e);
    return defaultActivityResponse;
  }
};

export default getCurrentPageActivity;
