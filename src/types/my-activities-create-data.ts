export type MyActivitiesCreateData = {
  title: string;
  category: string;
  description: string;
  address: string;
  price: number;
  schedules: Array<{
    date: string;
    startTime: string;
    endTime: string;
  }>;
  bannerImageUrl: string;
  subImageUrls: string[];
};
