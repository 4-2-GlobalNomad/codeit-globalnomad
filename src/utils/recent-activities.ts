export type CurrentViewedActivity = {
  id: number;
  title?: string;
  price?: number;
  bannerImageUrl: string;
  rating?: number;
  reviewCount?: number;
};

const CURRENT_VIEWED_KEY = 'currentViewedActivity';
const RECENTLY_VIEWED_KEY = 'recentlyViewedActivities';

export const setCurrentViewedActivity = (activity: CurrentViewedActivity): void => {
  localStorage.setItem(CURRENT_VIEWED_KEY, JSON.stringify(activity));
};

export const getCurrentViewedActivity = (): CurrentViewedActivity | null => {
  const storedData = localStorage.getItem(CURRENT_VIEWED_KEY);
  return storedData ? JSON.parse(storedData) : null;
};

export const setRecentlyViewedActivities = (activities: CurrentViewedActivity[]): void => {
  localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(activities));
};

export const getRecentlyViewedActivities = (): CurrentViewedActivity[] => {
  const storedData = localStorage.getItem(RECENTLY_VIEWED_KEY);
  return storedData ? JSON.parse(storedData) : [];
};
