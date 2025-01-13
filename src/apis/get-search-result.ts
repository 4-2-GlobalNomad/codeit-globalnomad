import { axiosInstance } from '@/apis/axios-instance';
import { ActivityResponse } from '@/types/mainpage';

const defaultActivityResponse: ActivityResponse = {
  activities: [],
  totalCount: 0,
};

const getSearchResult = async (keyword: string, pageNum: number, size: number): Promise<ActivityResponse> => {
  try {
    const urlSearchParams = new URLSearchParams({
      method: 'offset',
      keyword,
      page: String(pageNum),
      size: String(size),
    });

    const { data } = await axiosInstance.get<ActivityResponse>(`/activities?${urlSearchParams}`);
    return data;
  } catch (e) {
    console.error('API 호출 중 오류 발생:', e);
    return defaultActivityResponse;
  }
};

export default getSearchResult;
